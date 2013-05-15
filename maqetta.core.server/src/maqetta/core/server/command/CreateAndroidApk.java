package maqetta.core.server.command;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.concurrent.CountDownLatch;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.davinci.server.user.IUser;
import org.maqetta.server.Command;
import org.maqetta.server.IStorage;
import org.maqetta.server.ServerManager;

public class CreateAndroidApk extends Command {

	@Override
	public void handleCommand(HttpServletRequest req, HttpServletResponse resp,
			IUser user) throws IOException {
		//当前用户工作空间目录
		user = ServerManager.getServerManager().getUserManager().getUser(req);
		IStorage userDir = user.getUserDirectory();
		IStorage[] files = userDir.listFiles();

		String userDirPath = files[0].toURI().getPath();
		userDirPath = userDirPath.substring(1); 	//去掉路径前面的斜杠
		System.out.println(userDirPath);
		//获取allneed目录
		String allneedPath = getAllnedPath(userDirPath);
		System.out.println(allneedPath);
		
		String version = req.getParameter("SdkVersion");
		System.out.println(version);
		// TODO Auto-generated method stub
		if (version.equals("22"))
			version = "8";
		else if (version.equals("23"))
			version = "10";
		else if (version.equals("40"))
			version = "14";
		else version = "16";
		System.out.println(version);
		modifyAndroidFiles(version, allneedPath);
		
		try {
			final CountDownLatch threadSignal = new CountDownLatch(2);//初始化countDown
			String cmdcontent = "cmd /c " + allneedPath + "/test.bat " + userDirPath + " " + allneedPath;
			//final Process process = Runtime.getRuntime().exec("cmd /c E:\\maqettamodify\\allneed\\test.bat");
			final Process process = Runtime.getRuntime().exec(cmdcontent);

			process.getOutputStream().close();
			Runnable errThread = new Runnable() {
				public void run() {
					try {
						InputStream is = process.getErrorStream();
						InputStreamReader isr = new InputStreamReader(is);
						BufferedReader br = new BufferedReader(isr);
						String line = "";
						StringBuilder sb = new StringBuilder();
						while ((line = br.readLine()) != null) {
							sb.append(line);
						}
						System.out.println("error : " + sb.toString());
					} catch (IOException e) {
						e.printStackTrace();
					}

					threadSignal.countDown();// 线程结束时计数器减1
				}
			};

			new Thread(errThread).start();

			Runnable inputThread = new Runnable() {
				public void run() {
					try {
						InputStream is = process.getInputStream();
						InputStreamReader isr = new InputStreamReader(is);
						BufferedReader br = new BufferedReader(isr);
						String line = "";
						StringBuilder sb = new StringBuilder();
						while ((line = br.readLine()) != null) {
							sb.append(line);
						}
						System.out.println("input : " + sb.toString());

						is.close();
						isr.close();
						br.close();
					} catch (IOException e) {
						e.printStackTrace();
					}

					threadSignal.countDown();// 线程结束时计数器减1
				}
			};

			new Thread(inputThread).start();
			try {
				threadSignal.await();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}

			try {
				process.waitFor();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} finally {
				process.destroy();
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
//		String apkPath = "E:\\maqettamodify\\allneed\\TestPlugin\\bin\\" + "MainActivity-debug.apk";
		String apkPath = allneedPath + "/TestPlugin/bin/" + "MainActivity-debug.apk";
		File apkFile = new File(apkPath);
		if (apkFile.exists()) {
//			apkPath = apkPath.replace("\\", "/");
			System.out.println(apkPath);
			this.responseString = "{'apkPath' : '" + apkPath + "'}";
		}
	}
	
	public void modifyAndroidFiles(String version, String allneedPath) {
		try {
	        String androidManifestPath = allneedPath + "/TestPlugin/AndroidManifest.xml";
	        System.out.println(androidManifestPath);
            BufferedReader manifest = new BufferedReader(new FileReader(new File(androidManifestPath)));
            StringBuffer sb = new StringBuffer();
            String str = null;
            while((str=manifest.readLine()) != null){
                if(str.matches(".*:(targetSdkVersion).*")){
                    str="android:targetSdkVersion=\""+ version +"\" />";
                    
                }
//                System.out.println(str);
                sb.append(str+"\n");
            }
            sb.setLength(sb.length()-1);//因为多加了一个换行符，所以截掉
            manifest.close();//关闭输入流
            System.out.println("manifestreadok");
            
            PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(androidManifestPath)));
            out.write(sb.toString());//把sb里面的内容读入
             
            out.flush();
            out.close();
            System.out.println("manifestwriteok");
            
            String projectpropertitesPath = allneedPath + "/TestPlugin/project.properties";
            System.out.println(projectpropertitesPath);
            BufferedReader property = new BufferedReader(new FileReader(new File(projectpropertitesPath)));
            sb = new StringBuffer();
            str = null;
            while((str=property.readLine()) != null){//target=android-17
                if(str.matches(".*(android-).*")){
                    str="target=android-" + version;
                    
                }
//                System.out.println(str);
                sb.append(str+"\n");
            }
            sb.setLength(sb.length()-1);//因为多加了一个换行符，所以截掉
            property.close();//关闭输入流
            System.out.println("propertyreadok");
            
            out = new PrintWriter(new BufferedWriter(new FileWriter(projectpropertitesPath)));
            out.write(sb.toString());//把sb里面的内容读入E:test.txt中
             
            out.flush();
            out.close();
            System.out.println("propertywriteok");
        }catch(FileNotFoundException e){
            System.out.println("文件未找到");
        } catch (IOException e) {
            e.printStackTrace();
        }
	}
	
	public String getAllnedPath(String userDirPath) {
		String allneedPath = null;
		Pattern patt = Pattern.compile("(.*)(/.+)$");     //代码版maqetta将allneed文件放到__maqetta_server_workspace中，打包版放到maqetta/中，从获取的用户目录中解析出allneed所在目录
		Matcher mat = patt.matcher(userDirPath);
		if (mat.find()) {
//			for (int i = 0; i <= mat.groupCount(); i++)
//				System.out.println(mat.group(i));
			allneedPath = mat.group(1);
		}
		patt = Pattern.compile("(.*)(/users)$");
		mat = patt.matcher(allneedPath);
		if (mat.find()) {
			allneedPath = mat.group(0);
		}
		allneedPath += "/allneed";
		System.out.println(allneedPath);
		return allneedPath ;
	}
}

