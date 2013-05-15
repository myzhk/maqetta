define([
    "require",
//    "./ui/Resource",
//    "./Workbench",
//    "./ui/Download",
//    "./ui/DownloadSelected",
//    "./ui/UserLibraries",
    "davinci/css!./ui.css"    // load css; no return
], function(require) {

return {
    id: "davinci.ui",
    "davinci.view": [
        {
            id: "navigator",
            title: "文件",
            viewClass: "davinci/workbench/Explorer",
            iconClass: "paletteIcon paletteIconFiles"
        },
        {
            id: "hierarchy",
            title: "层级"
        },
        {
            id: "outline",
            title: "纲要",
            viewClass: "davinci/workbench/OutlineView",
            iconClass: "paletteIcon paletteIconOutline"
        },
		{
			id: "comment",
			title: "评论",
			viewClass: "davinci/review/view/CommentView",
            iconClass: "paletteIcon paletteIconComments"
		},
        {
            id: "scope",
            title: "范围"
        },
        {
            id: "properties",
            title: "属性",
            viewClass: "davinci/workbench/PropertyEditor"
        },
        {
            id: "problems",
            title: "问题",
            viewClass: "davinci/workbench/ProblemsView"
        },
        {
            id: "console",
            title: "控制台"
        },
        {
            id: "history",
            title: "历史"
        },
        {
            id: "search",
            title: "搜索"
        }
    ],
    "davinci.preferences": [
        {
            name: "项目",
            id: "project",
            hide:true,	//FIXME: temporarily don't show project setting preferences. See #3657, #3658
            category: "",
            pageContent: "Project Settings here"
        },
        {
            name: "项目设置",
            id: "ProjectPrefs",
            category: "davinci.ui.project",
            pane: "davinci/ui/ProjectPreferences",
            defaultValues: {
                "webContentFolder": "",
                "themeFolder": "themes",
                "widgetFolder": "lib/custom"
            }
        }
    ],
    "davinci.perspective": {
        id: "main",
        title: "AJAX IDE",
        views: [
            {
                viewID: "davinci.ui.navigator",
                position: "left-bottom"
            },
            {
                viewID: "davinci.ui.outline",
                position: "right"
            },
            {
                viewID: "davinci.ui.properties",
                position: "right-bottom"
            }
        ]
    },
    "davinci.actionSets": [
       {
           id: "editorActions",
           visible: true,
           menu: [
               {
                   __mainMenu: true,
                   separator: [
                       "new", false, "open", false
                   ]
               },
               {
                   label: "创建",
                   path: "new",
                   id: "davinci.new",
                   separator: [
                       "newApp", true, "newSketch", true, "newFolder", true, "newTheme", true, "newProject", true, "additions", true
                   ]
               },
               {
                   label: "打开",
                   path: "open",
                   id: "davinci.open",
                   separator: [
                       "openFile", true, "openTheme", true, "openProject", true, "openOrion", true, "additions", false
                   ]
               }
           ],
           actions: [
                 {
                     id: "newHTMLMobile",
                     // icon: 'davinci/img/add.gif',
                     run: function() {
                         require(['./ui/Resource'], function(r) {
                             r.newHTMLMobile();
                         });
                     },
                     iconClass: "newOpenMenuItem newMobileAppMenuItem",
                     label: "移动应用...",
                     // toolbarPath: "davinci.toolbar.main/edit",
                     menubarPath: "davinci.new/newApp"
                 },
                 {
                     id: "newHTMLDesktop",
                     // icon: 'davinci/img/add.gif',
                     run: function() {
                         require(['./ui/Resource'], function(r) {
                             r.newHTMLDesktop();
                         });
                     },
                     iconClass: "newOpenMenuItem newDesktopAppMenuItem",
                     label: "桌面应用...",
                     // toolbarPath: "davinci.toolbar.main/edit",
                     menubarPath: "davinci.new/newApp"
                 },
                 {
                     id: "newHTMLSketchHiFi",
                     // icon: 'davinci/img/add.gif',
                     run: function() {
                         require(['./ui/Resource'], function(r) {
                             r.newHTMLSketchHiFi();
                         });
                     },
                     iconClass: "newOpenMenuItem newSketchHiFiMenuItem",
                     label: "草图（高清晰度）...",
                     // toolbarPath: "davinci.toolbar.main/edit",
                     menubarPath: "davinci.new/newSketch"
                 },
                 {
                     id: "newHTMLSketchLoFi",
                     // icon: 'davinci/img/add.gif',
                     run: function() {
                         require(['./ui/Resource'], function(r) {
                             r.newHTMLSketchLoFi();
                         });
                     },
                     iconClass: "newOpenMenuItem newSketchLoFiMenuItem",
                     label: "草图（低清晰度）...",
                     // toolbarPath: "davinci.toolbar.main/edit",
                     menubarPath: "davinci.new/newSketch"
                 },
                 {
                     id: "newFolder",
                     run: function() {
                     	require(['./ui/Resource'], function(r) {
                     		r.newFolder();
                     	});
                     },
                     iconClass: "newOpenMenuItem newFolderMenuItem",
                     label: "文件夹...",
                     menubarPath: "davinci.new/newFolder"
                 },
                {
                   id: "newCSS",
                   run: function() {
                   	require(['./ui/Resource'], function(r) {
                   		r.newCSS();
                   	});
                   },
                   iconClass: "newOpenMenuItem newCSSMenuItem",
                   label: "CSS 文件...",
                   menubarPath: "davinci.new/newFolder"
               },
               {
                   id: "newJS",
                   run: function() {
                   	require(['./ui/Resource'], function(r) {
                   		r.newJS();
                   	});
                   },
                   iconClass: "newOpenMenuItem newJSMenuItem",
                   label: "JavaScript 脚本文件...",
                   menubarPath: "davinci.new/newFolder"
               },
               {
                   id: "newTheme",                                     
                   run: function() {
                   	require(['davinci/Workbench', 'davinci/ui/NewTheme'], function(Workbench, NewTheme){
                   			Workbench.showModal(new NewTheme(), 'New Theme', {width: 300}, null, true);
                   	});
                   },
                   iconClass: "newOpenMenuItem newThemeMenuItem",
                   label: "主题...",
                   menubarPath: "davinci.new/newTheme"
               },
               {
                   id: "newProject",
                   run: function() {
                   	require(['./ui/Resource'], function(r) {
                   		r.newProject();
                   	});
                   },
                   iconClass: "newOpenMenuItem newProjectMenuItem",
                   label: "项目...",
                   menubarPath: "davinci.new/newProject"
               },
               {
                   id: "openFile",
                   run: function() {
                   	require(['./ui/Resource'], function(r) {
                   		r.openFile();
                   	});
                   },
                   iconClass: "newOpenMenuItem openFileMenuItem",
                   label: "文件...",
                   toolbarPath: "davinci.toolbar.main/edit",
                   menubarPath: "davinci.open/openFile",
                   keyBinding: {accel: true, charOrCode: "o"}
               },
               {
                   id: "openThemeEditor",
                   run: function() {
                   	require(['davinci/Workbench', 'davinci/ui/OpenThemeDialog'], function(Workbench, OpenThemeDialog){
                   			Workbench.showModal(new OpenThemeDialog(), 'Open Theme', {width: 200}, null, true);
                   	});
                   },
                   iconClass: "newOpenMenuItem openThemeMenuItem",
                   label: "主题编辑器...",
                   menubarPath: "davinci.open/openTheme"
               },
               {
                   id: "openReview",
                   run: function() {
                	   
                   	require(['./ui/Resource'], function(r) {
                   		r.openFile();
                   	});
                   },
                   run: function() {
                      	require(['davinci/Workbench', 'davinci/review/widgets/OpenReviewDialog'], function(Workbench, OpenReviewDialog){
                      		Workbench.showModal(new OpenReviewDialog(), 'Open Review', {width: 350, height: 250});
                      	});
                   },
                   iconClass: "newOpenMenuItem openReviewMenuItem",
                   label: "评审...",
                   menubarPath: "davinci.open/openTheme"
               },
/* Commenting out for M8 - UI is all messed up now
               {
                   id: "openProject",
                   run: function() {
                   	require(['davinci/Workbench', 'davinci/ui/SelectProjectDialog'], function(Workbench, SelectProjectDialog){
                   			Workbench.showModal(new SelectProjectDialog(), 'Open Project', {width: 300}, null, true);
                   	});
                   },
                   iconClass: "newOpenMenuItem newProjectMenuItem",
                   label: "Project...",
                   menubarPath: "davinci.open/openProject"
               },
*/
               {
                   id: "orionNavigator",
                   run: function() {
                     window.open("../navigate/table.html#", '_blank');
                     window.focus();
                   },
                   iconClass: "newOpenMenuItem orionIcon",
                   label: "Orion 向导",
                   menubarPath: "davinci.open/openOrion"
               }
           ]
        },
        {
            id: "main",
            visible: true,
            menu: [
                {
                    __mainMenu: true,
                    separator: [
                        "usersettings", false, "settings", false, "additions", false, "help",
                        false
                    ]
                },
                {
                    label: "用户设置",
                    path: "usersettings",
                    id: "davinci.usersettings",
                    className: 'userSettingsMenu',
                    iconClass: 'userSettingsMenuIcon',
                    showLabel:false,
                    separator: [
                        "username", true, "logout", true, "additions", false
                    ]
                },
                {
                    label: "设置",
                    path: "settings",
                    id: "davinci.settings",
                    className: 'appSettingsMenu',
                    iconClass: 'appSettingsMenuIcon',
                    showLabel:false,
                    separator: [
                        "settings", true, "additions", false
                    ]
                },
                {
                    label: "帮助",
                    path: "help",
                    id: "davinci.help",
                    className: 'helpMenu',
                    iconClass: 'helpMenuIcon',
                    showLabel:false,
                    separator: [
                        "help", true, "about", false, "additions", false
                    ]
                }
            ],
            actions: [
                {
                    id: "editPreferences",
                    run: function() {
                    	require(['davinci/workbench/Preferences'], function(Preferences) {
                    		Preferences.showPreferencePage();
                    	});
                    },
                    label: "偏好设置...",
                    menubarPath: "davinci.settings/settings"
                },
                {
                    id: "editThemeSets",
                    run: function() {
                    	require(['davinci/ui/ThemeSetsDialog'], function(ThemeSetsDialog){
                    		ThemeSetsDialog();
                    	});
                    },
                    label: "主题集...",
                    menubarPath: "davinci.settings/settings"
                },
                {
                    id: "showHelp",
                    run: function() {
                    	window.open('app/docs/index.html', 'MaqettaDocumentation');
                    },
                    label: "文档",
                    menubarPath: "davinci.help/help",
                    keyBinding: {charOrCode: dojo.keys.F1}
                },
                {
                    id: "showTutotials",
                    run: function() {
                    	window.open('app/docs/index.html#tutorials/tutorials', 'MaqettaTutorials');
                    },
                    label: "教程",
                    menubarPath: "davinci.help/help"
                },
                {
                    id: "showVideos",
                    run: function() {
                    	window.open('http://www.youtube.com/user/Maqetta/', 'MaqettaVideos');
                    },
                    label: "视频",
                    menubarPath: "davinci.help/help"
                },
                {
                    id: "showCheatSheets",
                    run: function() {
                    	window.open('app/docs/index.html#cheatsheets/cheatsheets', 'MaqettaCheatSheets');
                    },
                    label: "Cheat sheets",
                    menubarPath: "davinci.help/help"
                },
                {
                    id: "showHowTo",
                    run: function() {
                    	window.open('https://www.ibm.com/search/csass/search/?sn=dw&en=utf&hpp=20&dws=dw&q=maqetta&Search=Search', 'MaqettaHowTo');
                    },
                    label: "How-to articles",
                    menubarPath: "davinci.help/help"
                },
                {
                    id: "about",
                    run: function() {
                    	require(['davinci/ui/about'], function(about) {
                    		about.show();
                    	});
                    },
                    label: "关于 BUPT Visual Editor",
                    menubarPath: "davinci.help/about"
                },
                {
                    id: "username",
                    action: "davinci/actions/UserNameAction",
                    run: function() {
                    	// do monthing - purely informational
                    },
                    label: "{user}",	// Filled in programmatically by UserNameAction class
                    menubarPath: "davinci.usersettings/username"
                },
                {
                    id: "logout",
                    action: "davinci/actions/LogoutAction",
                    label: "注销",
                    menubarPath: "davinci.usersettings/logout"
                }
            ]
        },
        {
            id: "explorerActions",              //Files中的文件右键菜单
            visible: true,
            actions: [
                {
                    id: "davinci.ui.rename",
                    label: "重命名...",
                    iconClass:"renameIcon",
                    run: function() {
                    	require(['./ui/Resource'], function(r) {
                    		r.renameAction();
                    	});
                    },
                    isEnabled: function(item) {
                        return require('./ui/Resource').canModify(item);
                    },
                    menubarPath: "addFiles"
                },
                {
                    id: "davinci.ui.delete",
                    label: "删除",
                    iconClass: "deleteIcon",
                    isEnabled: function(item) {
                        return require('./ui/Resource').canModify(item);
                    },
                    run: function() {
                    	require(['./ui/Resource'], function(r) {
                    		r.deleteAction();
                    	});
                    },
                    menubarPath: "delete",
                    keyBinding: {charOrCode: [dojo.keys.DELETE, dojo.keys.BACKSPACE]}
                },
                {
                    id: "davinci.ui.download",
                    label: "下载",
                    iconClass: "downloadSomeIcon",
                    action: "davinci/actions/DownloadAction",
                    isEnabled: function(item) {
                        return require('./ui/Resource').canModify(item);
                    },
                    menubarPath: "delete"
                }
                
                
            ]
        }
    ],
    "davinci.actionSetPartAssociations": [
        {
            targetID: "davinci.ui.editorActions",
            parts: [
                "davinci.ui.editorMenuBar"
            ]
        },
        {
            targetID: "davinci.ui.explorerActions",
            parts: [
                "davinci.ui.navigator"
            ]
        }
    ],
    "davinci.viewActions": [
        {
            viewContribution: {
                targetID: "davinci.ui.problems",
                actions: [
                    {
                        id: "Copy2",
                        iconClass: 'copyIcon',
                        run: function() {
                            alert("view toolbar");
                        },
                        label: "复制",
                        toolbarPath: "davinci.toolbar.main/edit",
                        menubarPath: "davinci.edit/cut"
                    }
                ]
            }
        },

        /* deployment icon in the file explorer toolbar */
        {
            viewContribution: {
                targetID: "workbench.Explorer",
                actions: [
	                {
	                    id: "davinci.ui.newfile",
	                    label: "新文件夹...",
	                    iconClass:"newFolderIcon",
	                    run: function() {
	                    	require(['./ui/Resource'], function(r) {
	                    		r.newFolder();
	                    	});
	                    },
	                    isEnabled: function(item) {
	                        return !item || require('./ui/Resource').canModify(item);
	                    },
                        toolbarPath: "download"
	                },
                    {
                        id: "download",
                        iconClass: 'downloadAllIcon',
                        run: function() {
                            require(['./Workbench', './ui/Download'],
                                function(workbench, Download) {
                                	workbench.showModal(new Download(), "Download", {width: 440});
                                }
                            );
                        },
                        label: "下载完整项目",
                        toolbarPath: "download"
                    },
                    {
                        id: "download",
                        iconClass: 'downloadSomeIcon',
                        run: function() {
                            require(['./Workbench', './ui/DownloadSelected'],
                                function(workbench, DownloadSelected) {
                                	workbench.showModal(new DownloadSelected(), "Download", {width: 440});
                                }
                            );
                        },
                        label: "下载选中的文件",
                        toolbarPath: "download"
                    },
                    {
                        id: "davinci.ui.addFiles",
                        label: "上传文件...",
                        iconClass:"uploadIcon",
                        run: function() {
                        	require(['./ui/Resource'], function(r) {
                        		r.addFiles();
                        	});
                        },
                        isEnabled: function(item) {
                            return !item || require('./ui/Resource').canModify(item);
                        },
                        toolbarPath: "download"
                    },
                    {
                        id: "davinci.ui.addFiles",
                        label: "上传并解压ZIP文件...",
                        iconClass:"uploadIcon",
                        run: function() {
                        	require(['./ui/Resource'], function(r) {
                        		r.addFilesZip();
                        	});
                        },
                        isEnabled: function(item) {
                            return !item || require('./ui/Resource').canModify(item);
                        },
                        toolbarPath: "download"
                    },
                    {
                        id: "userlibs",
                        iconClass: 'userLibIcon',
                        run: function() {
                            require(['./Workbench', './ui/UserLibraries'],
                                function(workbench, UserLibraries) {
                                    workbench.showModal(new UserLibraries(), "User Libraries", "width: 400px");
                                }
                            );
                        },
                        label: "管理库文件",
                        toolbarPath: "download"
                    },
                    {
                        id: "download",
                        iconClass: 'downloadApkIcon',
                        run: function() {
                            require(['./ui/Resource'],
                                function(Resource) {
                            		Resource.showCreateAndroidWidgetDialog();
                                }
                            );
                        },
                        label: "生成 Android apk",
                        toolbarPath: "download"
                    }
                ]
            }
        }
    ]
};

});