package maqetta.server.orion.user;

import java.io.IOException;
import java.net.URI;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import maqetta.core.server.user.User;
import maqetta.core.server.util.VResourceUtils;
import maqetta.server.orion.VOrionResource;
import maqetta.server.orion.VOrionWorkspace;
import maqetta.server.orion.VOrionWorkspaceStorage;
import maqetta.server.orion.internal.Activator;

import org.davinci.server.user.IPerson;
import org.eclipse.core.filesystem.IFileStore;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Path;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.preferences.IEclipsePreferences;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.orion.internal.server.servlets.ProtocolConstants;
import org.eclipse.orion.internal.server.servlets.workspace.WebProject;
import org.eclipse.orion.internal.server.servlets.workspace.WebUser;
import org.eclipse.orion.internal.server.servlets.workspace.WebWorkspace;
import org.eclipse.orion.internal.server.servlets.workspace.WorkspaceResourceHandler;
import org.eclipse.orion.internal.server.servlets.workspace.authorization.AuthorizationService;
import org.eclipse.orion.server.core.users.OrionScope;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.maqetta.server.IDavinciServerConstants;
import org.maqetta.server.IStorage;
import org.maqetta.server.IVResource;
import org.maqetta.server.ServerManager;
import org.osgi.framework.Bundle;


@SuppressWarnings("restriction")
public class OrionUser extends User {

	private WebUser webuser;
	private WebWorkspace webWorkspace;
	protected static final IScopeContext scope = new OrionScope();	// XXX used?
	protected IEclipsePreferences store;							// XXX used?
	private static String DEFAULT_WORKSPACE = "MyWorkspace"; //$NON-NLS-1$
	
	public OrionUser(IPerson person) throws CoreException {
		super(person);
		this.webuser = WebUser.fromUserId(this.getUserID());
		try {
			JSONArray workspaceJson = webuser.getWorkspacesJSON();
			if (workspaceJson.length() != 0) {
				/* may need to default to other workspace here via the URL or a cookie, but taking first one found for now */
				JSONObject workObj = (JSONObject)workspaceJson.get(0);
				webWorkspace = WebWorkspace.fromId(workObj.getString("Id"));
			} else {
				// create default workspace for new user
				webWorkspace = createWorkspace(DEFAULT_WORKSPACE);
			}
		} catch (JSONException e) {
			throw new CoreException(new Status(IStatus.ERROR, null, null, e));
		}

		this.userDirectory = new VOrionWorkspaceStorage(webWorkspace, this.getUserID());
		
		rebuildWorkspace();
	}

	public IVResource newWorkspaceRoot(){
		return  new VOrionWorkspace((VOrionWorkspaceStorage)this.userDirectory);
	}
	
	public IVResource createOrionProject(String name) throws IOException {
		return this.workspace.create(name);
	}
	
	private IStorage getStorage(){
		// return storage system
		return this.userDirectory;
	}

	public boolean isProject(String projectName){
		Collection<?> baseFile = userDirectory.findFiles(userDirectory, projectName + "/" +
				IDavinciServerConstants.SETTINGS_DIRECTORY_NAME+ "/" +
				IDavinciServerConstants.LIBS_FILE, false);
		return baseFile.size() > 0;
	}
	
	public String computeMaqettaPath(String orionPathStr, String contextStr) throws CoreException {
		IPath orionPath = new Path(orionPathStr);
		IPath contextPath = new Path(contextStr);
		
		assert contextPath.isPrefixOf(orionPath) : "`orionPath` doesn't include expected servlet context";

		// remove servlet context, if any
		orionPath = orionPath.removeFirstSegments(orionPath.matchingFirstSegments(contextPath));

		String projectId = orionPath.segment(1);  // [0]: "file", [1]: project id, [2] sub-folder, ...
		WebProject proj = WebProject.fromId(projectId);
		String path = proj.getName();
		
		IFileStore child = null;
		for (int i = 2; i < orionPath.segmentCount(); i++) {
			child = proj.getProjectStore().getChild(orionPath.segment(i));
			path += "/" + child.getName();
		}
		return path;
	}
	
	public IVResource createProject(String projectName, String basePath, boolean initFiles) throws IOException {
		
		if(isProject(projectName))  return getResource(projectName);
		
		IVResource project = createOrionProject(projectName);
		/*
		 * Load the initial user files extension point and copy the files to the projects root
		 */
		
		if(basePath!=null && !basePath.equals("")){
			project.create(basePath + "/");
		}
			
		
		if(initFiles){
			List<?> extensions = ServerManager.getServerManager().getExtensions(IDavinciServerConstants.EXTENSION_POINT_INITIAL_USER_FILES, IDavinciServerConstants.EP_TAG_INITIAL_USER_FILE);
	        for (Iterator<?> iterator = extensions.iterator(); iterator.hasNext();) {
	            IConfigurationElement libraryElement = (IConfigurationElement) iterator.next();
	            String path = libraryElement.getAttribute(IDavinciServerConstants.EP_ATTR_INITIAL_USER_FILE_PATH);
	            String name = libraryElement.getDeclaringExtension().getContributor().getName();
	            Bundle bundle = Activator.getActivator().getOtherBundle(name);
	            IStorage file =this.getStorage().newInstance(project.getPath());
			
					if(basePath!=null && !basePath.equals(""))
						file = file.newInstance(project.getPath()+ "/" + basePath);
				
				
	            VResourceUtils.copyDirectory(file, path, bundle);
	        }
		}
        addBaseSettings(projectName);
        rebuildWorkspace();
		return project;
	}
	
	public boolean isValid(String path){
	     return true;
	}

	public IVResource createResource(String path, boolean isFolder) throws IOException {
		/* serve working copy files if they exist */

		String path1 = path;
		if (path1.startsWith("./")) {
			path1 = path.substring(2);
		} else if (path.length() > 0 && path.charAt(0) == '.') {
			path1 = path.substring(1);
		}
		if(!this.isValid(this.userDirectory.getAbsolutePath() + "/" + path1)) return null;
		
		/*
		ILink link = this.getLinks().hasLink(path1);
		if (link != null) {
			path = link.location + "/" + path1.substring(link.path.length());
			path = path.replace('/', File.separatorChar);
			VFile linkFile = new VFile(this.userDirectory.newInstance(path));
			return linkFile;
		}
		*/
//		IStorage directory = this.userDirectory.newInstance(path);
		/* make sure the new resoruce is within the user directory */
		
		IVResource userFile = this.workspace.create(path);
		if(isFolder){
			userFile.mkdir();
		}else{
			userFile.createNewInstance();
		}
		return userFile;
	}

	
	public IVResource getUserFile(String p1){
	      
		if(p1==null || p1.equals(""))
			return this.workspace;
		
        String path = p1;
        while(path.length()>0 && (path.charAt(0)=='.' || path.charAt(0)=='/' || path.charAt(0)=='\\'))
        	path=path.substring(1);

        IPath a = new Path(this.userDirectory.getAbsolutePath()).append(path);
        /*
         * security check, dont want to return a resource BELOW the workspace
         * root
         */
        IStorage parentStorage = this.userDirectory.newInstance(a.toString());
        
        
        if (!parentStorage.exists()) {
        	
            IPath a2 = new Path(this.userDirectory.getAbsolutePath()).append(path + IDavinciServerConstants.WORKING_COPY_EXTENSION);
            IStorage workingCopy = this.userDirectory.newInstance(a2.toString());
            if (!workingCopy.exists()) {
                return null;
            }
        	
        }
     
       
        IVResource parent = this.workspace;
        IPath halfPath = new Path("");
        for (int i = 1; i < a.segmentCount(); i++) {
        	halfPath = halfPath.append(a.segment(i));
        	IStorage f = this.userDirectory.newInstance(halfPath.toString());
            parent = new VOrionResource(f, parent,a.segment(i));
        }
        /*
        if(parent==this.workspace)
            parent = new VFile(this.userDirectory, this.workspace);
        */
        return parent;

	}

	public WebWorkspace createWorkspace(String workspaceName) throws CoreException {
		// see org.eclipse.orion.server.servlets.WorkspaceServlet.doCreateWorkspace()
		WebWorkspace workspace =  webuser.createWorkspace(workspaceName);
		URI loc = URI.create(Activator.LOCATION_WORKSPACE_SERVLET);
		JSONObject result = WorkspaceResourceHandler.toJSON(workspace, loc, loc);
		String resultLocation = result.optString(ProtocolConstants.KEY_LOCATION);

		// add user rights for the workspace
		AuthorizationService.addUserRight(workspace.getId(), URI.create(resultLocation).getPath());
		AuthorizationService.addUserRight(workspace.getId(), URI.create(resultLocation).getPath() + "/*"); //$NON-NLS-1$
		// add user rights for file servlet location
		String filePath = Activator.LOCATION_FILE_SERVLET + '/' + workspace.getId();
		AuthorizationService.addUserRight(workspace.getId(), filePath);
		AuthorizationService.addUserRight(workspace.getId(), filePath + "/*"); //$NON-NLS-1$

		return workspace;
	}

	public IVResource[] listFiles(String path) {
	    IVResource[] found = new IVResource[0];
	    if (path == null || path.equals(".") ) {
			path = "";
		}
    
		/* list all files given a path, dont recurse. */
		/* add users actual workspace files */
		IVResource r1 = getResource(path);
		if (r1 != null) {
			if (r1.isDirectory()) {
				found = r1.listFiles();
			}
		}
		r1 = getLibFile(path);
        if (r1 != null) {
            if (r1.isDirectory()) {
                IVResource[] list = r1.listFiles();
                found = VResourceUtils.merge(found, list);
            }
        }
 		return found;
 	}

//	public void rebuildWorkspace() {
//		this.workspace = newWorkspaceRoot();
//		IStorage[] userFiles = this.userDirectory.listFiles();
//		
//		for(int j=0;j<userFiles.length;j++){
//			if(!userFiles[j].isDirectory()) continue;
//			LibrarySettings settings = this.getLibSettings(userFiles[j]);
//			if(!settings.exists()){
//				settings.save();
//			}
//			Vector<ILibInfo> libs = new Vector();
//			libs.addAll(Arrays.asList( settings.allLibs()));
//			
//			
//			IVResource workspace = this.workspace;
//			IVResource firstFolder = new VDirectory(workspace, userFiles[j].getName());
//			this.workspace.add(firstFolder);
//			for (int i = 0; i < libs.size(); i++) {
//				IVResource root = firstFolder;
//				String defaultRoot = libs.get(i).getVirtualRoot();
//				
//				if(defaultRoot==null) continue;
//				
//				Library b = this.getLibrary(libs.get(i));
//				/* library not found on server so avoid adding it to the workspace */
//				if (b == null) {
//					continue;
//				}
//				URL file = b.getURL("");
//				// TODO temp fix to avoid adding virtual library entries that don't
//				// exist to the workspace.
//				if (file == null) {
//					continue;
//				}
//				IPath path = new Path(defaultRoot);
//				for (int k = 0; k < path.segmentCount(); k++) {
//					String segment = path.segment(k);
//					IVResource v = root.get(segment);
//					if (v == null) {
//						/* creating virtual directory structure, so READ ONLY */
//						v = new VDirectory(root, segment,true);
//						root.add(v);
//					}
//					root = v;
//				}
//	
//				
//				IVResource libResource = new VLibraryResource(b, file,"", "");
//				/* need a special case for library items whos root is the project roots */
//				//if(path.segmentCount()==0){
//					
//				IVResource[] children = libResource.listFiles();
//				for(int p=0;p<children.length;p++)
//					root.add(children[p]);
//				//}else{
//				//	root.add(libResource);
//				//}
//			}
//		}
//	}
}
