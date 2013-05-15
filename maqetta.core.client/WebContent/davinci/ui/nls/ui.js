define({ root:
{
		//DocileDialog.js
		"dontShowAgain":"不再显示",
	
		//FileFieldDialog.js
		"selectFile":"Select a file",
		
		//OpenFileDialog.js
		"openFile":"打开文件",//used in Resource.js as well
		
		//about.js
		"aboutMaqetta":"关于BUPT Visual Editor",
		"productVersion":"版本: ${0}",
		"productDate":"日期: ${0}",
		//"build":"Build: <a href='https://github.com/maqetta/maqetta/commit/${0}'> ${1}...</a> ",
		"build":"Build: ${0}",
		
		//Download.js
		"library":"Library",//used in UserLibraries.js as well
		"version":"Version",//used in UserLibraries.js as well
		"include":"Include",
		"source":"Source",
		"baseLocation":"Base Location",
		"invalidDownloadFileName": "文件名只能包含 字母、数字、 &#8216;_&#8216;,和 &#8216;.&#8216;.",
		
		//DownloadSelected.js
		"selectedFiles":"选择的文件",
		"noFilesSelected":"没有文件被选中!",
		"downloadButtonLabel": "下载",
		
		//NewTheme.js
		"themeAlreadyExists":"主题已经存在!",
		"invalidThemeName": "主题名不合法",
		"errorCreatingTheme": "创建主题失败: ",
		"creatingTheme": "创建主题",
		
		//OpenThemeDialog.js
		"noUserThemes":"未在工作空间中找到用户主题. 请在编辑前创建一个新的主题.",
		
		//ThemeSetsDialog.js and widgets/ThemeSetSelection.js
		"themeSetsDialog":"管理主题集",
		"renameThemeSet":"重命名主题集",
		"themeSets":"主题集:",
		"currentlySelectedThemeSet":"当前选择的主题集:",
		"themeSetName":"名称:",
		"desktopTheme":"Dojo desktop 1.7 主题:",
		"mobileTheme":"Dojo mobile 1.7 主题:",
		"android":"Android:",
		"blackberry":"Blackberry:",
		"ipad":"iPad:",
		"iphone":"iPhone:",
		"other":"其他:",
		"selectTheme":"选择主题",
		"themeSet":"主题集:",
		"themeVersionMessage": "工作空间版本与主题版本不匹配，这可能产生意外情况. 建议您删除当前主题并使用当前版本BUPT Visual Editor创建主题.",
		"addThemeSet": "添加主题集",
		"deleteThemeSet":"删除主题集",

		//SaveAsWidgetForm.js
		//right now it has its own nls file called "common." 
		//Globalize later once it is completed
			
		//UserLibraries.js
		//"library":"Library",
		//"version":"Version",
		"workspaceLocation":"工作空间地址",
		
		//Resource.js
		"savingReadonlyFile": "该文件为只读文件. 请将它保存到可写入的位置.",
		
		//doItLabels
		"create":"创建",
		"open":"打开",
		"save":"保存",
		"select": "选择",
		
		//fileDialog
		"fileName":"文件名",//used in templates/download.html
		"folderName":"目录名",
		"parentFolder":"上级目录: ",//used in add files as well
		"newFolderLabel":"新文件夹",
		"cancelButtonLabel":"取消",
		"newFolderName": "名称:",
		"createFolder": "创建文件夹",
		
		//dialog titles
		"createNewFile":"创建新文件",
		"createMobileApplication":"创建移动应用",
		"createDesktopApplication":"创建桌面应用",
		"createSketchHiFi":"创建草图（高清晰度）",
		"createSketchLoFi":"创建草图（低清晰度）",
		"createNewCSSFile":"创建CSS文件",
		"createNewJSFile":"创建JavaScript脚本文件",
		//"openFile":"Open File",
		"createNewFolder":"穿件文件夹",
		"saveFileAs":"文件另存为",
		"downloadFile":"下载",
		
		//addFiles
		"selectFiles":"选择文件...",
		"selectZip":"选择ZIP文件...",
		"upload":"上传",
		"addFiles":"上传",
		"uploading":"上传中...",
		"completed":"完成: ${0} \n",
		"done":"完成",
		"explodeZipWarning":"警告: 。zip中的文件将覆盖当前工作空间中任何与之冲突的文件",
		
		//checkFileName
		"mustEnterFileName":"您必须键入文件名.",
		"cannotSelect":"不能选择 ${0}. 他是一个目录.",
		"fileAlreadyExistsOverwrite":"文件 ${0} 已经存在. 是否覆盖？",
		"cannotCreate":"不能创建 ${0}. 它已经存在.",
		"fileNameSlashCharacter":"文件名不能包含斜线 (/). 您的文件名是: ${0}",
		"doesNotHaveExtension":" ${0} 没有包含扩展名 (e.g., .html, .css or .js) ，它会被识别为纯文本文件. 是否继续?",
		
		//deleteAction
		"areYouSureDelete":"是否确定删除 ${0}?",
		"noResourcesSelected":"没有选中任何资源.",
		
		/*Templates*/
		//download.html -- see above for file name
		"optimizeOption": "使用  Dojo Web Builder (experimental)",
		"downloadFullSource": "下载选中库的未压缩文件 (如果存在)",
		"selectAll": "全部",
		"selectNone": "无",
		
		//newtheme.html
		"themeToClone":"复制的主题",
		"newName":"新名称",
				
		//OpenThemeDialog.html
		"selectTheme":"选择一个主题",

		//ProjectToolbar.js
		"newProject":"新项目",
		"renameProjectDialogTitle": "重命名项目...",
		"deleteProjectButtonTitle": "删除项目",
		"renameProjectButtonTitle": "重命名项目...",
		"deleteOnlyProjectError": "您不能删除当前工作空间中唯一的项目!",
		
		//NewFile.html
		"newFileShowFiles":"显示文件选择器",
		"newFileHideFiles":"隐藏文件选择器",
		"root":"(root)",
		
		//NewHTMLFileOptions.html - Composition type strings
		"nhfoDevice":"设备:",
		'nhfoDeviceTooltip':'选择一个初始移动设备',
		
		//NewHTMLFileOptions.html - Theme strings
		"nhfoThemeButtonLabel":"主题...",
		"nhfoThemeButtonTitle":"为新HTML文件选择主题或主题集",

		//Rename
		"renameNewLabel": "名称:",
		"renameButtonLabel": "重命名",
		"renameDialogTitle": "重命名...",

		//NewProject
		"newProjectName": "名称:",
		"newProjectEclipseSupport": "Eclipse 支持",
		"newProjectNameExists": "当前名称的项目已存在",

		//UserLibraries
		"modify": "修改",
		
		//UserName.js
		"User": "用户",

		//SelectProjectDialog.js
		"currentProject": "当前项目:",
		"selectProject": "选择一个项目:"
}
});
