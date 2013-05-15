define([
    "require"
//  "../Workbench"
], function(require) {

return {
    id: "davinci.ve",
    "davinci.view": [
        {
            id: "Palette",
            title: "控件库",
            viewClass: "davinci/ve/palette/HtmlWidgets",
            iconClass: "paletteIcon paletteIconWidgets"
        },
        {
            id: "states",
            title: "场景",
            viewClass: "davinci/ve/views/StatesView",
            iconClass: "paletteIcon paletteIconStates"
        },
        /*
         * { id:"datastores", title:"DataStores", viewClass: "davinci/ve/views/DataStoresView" },
         */
        {
            id: "object",
            title: "对象",
            viewClass: "davinci/ve/views/ObjectView"
        },

        /* a style view that allows switching between other style views via the toolbar */

        {
            id: "style",
            title: "",	// Tab titles for property tabs are generated programmatically
            viewClass: "davinci/ve/views/SwitchingStyleView"
        }
    ],

    "davinci.perspective": [
        {
            id: "pageDesign",
            title: "页面设计",
            views: [
                {
                    viewID: "davinci.ve.Palette",
                    position: "left",
                    selected: true
                },
                {
                    viewID: "davinci.ui.outline",
                    position: "left"
                },
                {
                    viewID: "davinci.ve.style",
                    position: "right"
                },
                {
                    viewID: "davinci.ui.comment",
                    position: "right",
                    hidden: true
                },
                {
                    viewID: "davinci.ve.states",
                    position: "right-bottom",
                    selected: true
                },
                {
                    viewID: "davinci.ui.navigator",
                    position: "left-bottom",
                    selected: true
                },
                {
                    viewID: "davinci.review.reviewNavigator",
                    position: "left-bottom"
                }
            ]
        }
    ],

    "davinci.editor": [
        {
            id: "HTMLPageEditor",
            name: "HTML Visual Editor",
            extensions: ["html","htm", "php"],
            isDefault: true,
            // TODO implement icon : "",
            editorClass: "davinci/ve/PageEditor",
            palettePerspective: "davinci.ve.pageDesign",
            expandPalettes: ["left"]
        }
    ],
    "davinci.actionSets": [       //右键菜单
        {
            id: "cutCopyPaste",
            visible: true,
            actions: [
                {
                    label: "剪切",
                    keySequence: "M1+X",
                    iconClass: "editActionIcon editCutIconSmall",
                    action: "davinci/ve/actions/CutAction",
                    menubarPath: "davinci.edit/cut"
                },
                {
                    label: "复制",
                    keySequence: "M1+C",
                    iconClass: "editActionIcon editCopyIconSmall",
                    action: "davinci/ve/actions/CopyAction",
                    menubarPath: "davinci.edit/cut"
                },
                {
                    keySequence: "M1+V",
                    iconClass: "editActionIcon editPasteIconSmall",
                    label: "粘贴",
                    action: "davinci/ve/actions/PasteAction",
                    menubarPath: "davinci.edit/cut"
                },
                {
                    keySequence: "DEL",
                    iconClass: "editActionIcon editDeleteIconSmall",
                    label: "删除",
                    action: "davinci/ve/actions/DeleteAction",
                    menubarPath: "davinci.edit/cut"
                },
                {
                    iconClass: "editActionIcon selectParentIconSmall",
                    label: "选择父节点",
                    action: "davinci/ve/actions/SelectParentAction",
                    menubarPath: "davinci.edit/cut"
                },
                {
                    iconClass: "editActionIcon selectAncestorIconSmall",
                    label: "选择祖先节点...",
                    action: "davinci/ve/actions/SelectAncestorAction",
                    menubarPath: "davinci.edit/cut"
                },
                {
                    iconClass: "editActionIcon unselectAllIconSmall",
                    label: "取消选择所有",
                    action: "davinci/ve/actions/UnselectAllAction",
                    menubarPath: "davinci.edit/cut"
                },
                {
                    iconClass: "editActionIcon",
                    label: "包裹于 &lt;A&gt;中",
                    action: "davinci/ve/actions/SurroundAction",
                    surroundWithTagName:'a',
                    menubarPath: "davinci.edit/cut"
                },
                {
                    iconClass: "editActionIcon",
                    label: "包裹于 &lt;DIV&gt;中",
                    action: "davinci/ve/actions/SurroundAction",
                    surroundWithTagName:'div',
                    menubarPath: "davinci.edit/cut"
                },
                {
                    iconClass: "editActionIcon",
                    label: "包裹于 &lt;SPAN&gt;中",
                    action: "davinci/ve/actions/SurroundAction",
                    surroundWithTagName:'span',
                    menubarPath: "davinci.edit/cut"
                },
                {
                    iconClass: "editActionIcon moveToFrontIconSmall",
                    label: "移至最前",
                    action: "davinci/ve/actions/MoveToFrontAction",
                    menubarPath: "davinci.edit/cut"
                },
                {
                    iconClass: "editActionIcon moveForwardIconSmall",
                    label: "向前移动",
                    action: "davinci/ve/actions/MoveForwardAction",
                    menubarPath: "davinci.edit/cut"
                },
                {
                    iconClass: "editActionIcon moveBackwardIconSmall",
                    label: "向后移动",
                    action: "davinci/ve/actions/MoveBackwardAction",
                    menubarPath: "davinci.edit/cut"
                },
                {
                    iconClass: "editActionIcon moveToBackIconSmall",
                    label: "移至最底层",
                    action: "davinci/ve/actions/MoveToBackAction",
                    menubarPath: "davinci.edit/cut"
                },
                {
                iconClass: "editActionIcon",
                label: "管理状态...",
                action: "davinci/ve/actions/ManageStates",
                menubarPath: "davinci.edit/cut"
            	}/*,
                {
                    iconClass: "editActionIcon",
                    label: "Application States...",
                    action: "davinci/ve/actions/EnableApplicationStates",
                    menubarPath: "davinci.edit/cut"
                }*/
            ]
        }
    ],
    "davinci.viewActions": [
        {
            viewContribution: {
                targetID: "davinci.ve.outline",
                actions: [
                    {
                        id: "design",
                        iconClass: 'designModeIcon editActionIcon',
                        radioGroup: "displayMode",
                        method: "switchDisplayMode",
                        // initialValue : true,
                        label: "小工具",
                        toolbarPath: "displayMode"
                    },
                    {
                        id: "source",
                        iconClass: 'sourceModeIcon editActionIcon',
                        method: "switchDisplayMode",
                        radioGroup: "displayMode",
                        label: "源代码",
                        toolbarPath: "displayMode"
                    }
                ]
            }
        },
        {
            viewContribution: {
                targetID: "davinci.ve.states",
                actions: [
					{
						id: "addState",
						iconClass: 'viewActionIcon addStateIcon',
						action: "davinci/ve/actions/AddState",
						label: "添加状态",
						toolbarPath: "states1"
					},
					{
						id: "removeState",
						iconClass: 'viewActionIcon removeStateIcon',
						action: "davinci/ve/actions/RemoveState",
						label: "移除状态",
						toolbarPath: "states1"
					},
					{
						id: "modifyState",
						iconClass: 'viewActionIcon modifyStateIcon',
						action: "davinci/ve/actions/ModifyState",
						label: "修改状态",
						toolbarPath: "states1"
					},
					{
						id: "manageStates",
						className: "manageStatesButton",
						iconClass: 'viewActionIcon manageStatesIcon',
						action: "davinci/ve/actions/ManageStates",
						label: "对于当前选中的小工具,管理其在不同状态下的可见性",
						toolbarPath: "states1"
					},
					{
						id: "NewWidgetsCurrentState",
						className: "newWidgetsCurrentStateButton",
						iconClass: 'viewActionIcon newWidgetsCurrentStateIcon',
						action: "davinci/ve/actions/NewWidgetsCurrentState",
						label: "将新的小工具放置于当前状态或背景状态",
						toolbarPath: "states2"
					},
					{
						id: "highlightBaseWidgets",
						className: "highlightBaseWidgetsButton",
						iconClass: 'viewActionIcon highlightBaseWidgetsIcon',
						action: "davinci/ve/actions/HighlightBaseWidgets",
						label: "在默认状态下，高亮显示背景状态的小工具",
						toolbarPath: "states2"
					}

                ]

            }
        }
    ],
    "davinci.actionSetPartAssociations": [
        {
            targetID: "davinci.ve.cutCopyPaste",
            parts: [
                "davinci.ve.visualEditor", "davinci.ve.VisualEditorOutline"
            ]
        }
    ],
    "davinci.editorActions": {
        editorContribution: {
            targetID: "davinci.ve.HTMLPageEditor",
            actions: [
              {
                  id: "savecombo",
                  className: "maqLabelButton",
                  showLabel: true,
                  label: "保存",
                  toolbarPath: "save",
                  type:'ComboButton',
                  run: function() {
                      require(['../Workbench'], function(workbench) {
                      		require("../ui/Resource").save();
                      });
                  },
                  isEnabled: function(context) {
                      return require('../Workbench').getOpenEditor();
                  },
                  menu:[
                     {
                          iconClass: 'saveIcon',
                          run: function() {
                          		require("../ui/Resource").save();
                          },
                          isEnabled: function(context) {
                              return require('../Workbench').getOpenEditor();
                          },
                          label: "保存",
                  		keyBinding: {accel: true, charOrCode: "s", allowGlobal: true}
                      },
                      {
                          iconClass: '保存为图标',
                          run: function() {
                              require("../ui/Resource").saveAs('html');
                          },
                          isEnabled: function(context) {
                              return require('../Workbench').getOpenEditor();
                          },
                          label: "另存为...",
                  		keyBinding: {accel: true, shift: true, charOrCode: "s", allowGlobal: true}
                      },
                      {
                          id: "saveasdijit",
                          iconClass: 'saveAsDijitIcon',
                          run: function(){
                              return require(['davinci/de/resource'], function(r){
                                	r.createDijiFromNewDialog();
                              })
                          },
                          isEnabled: function(context) {
                              return require('../Workbench').getOpenEditor();
                           },
                           label: "另存为小工具"
                       },
                  ]
              },
  				{
                	id: "undo",
                    iconClass: 'editActionIcon undoIcon',
                    action: "davinci/actions/UndoAction",
                    label: "撤销",
                    //showLabel: true,
                    toolbarPath: "undoredo",
                    keyBinding: {accel: true, charOrCode: "z"}
                },
                {
                    id: "redo",
                    iconClass: 'editActionIcon redoIcon',
                    action: "davinci/actions/RedoAction",
                    //showLabel: true,
                    label: "重做",
                    toolbarPath: "undoredo",
                    keyBinding: {accel: true, shift: true, charOrCode: "z"}
                },
				{
				    id: "cut",
				    label: "剪切",
				    iconClass: "editActionIcon editCutIcon",
				    action: "davinci/ve/actions/CutAction",
				    toolbarPath: "cutcopypaste",
				    keyBinding: {accel: true, charOrCode: "x"}
				
				},
				{
				    id: "copy",
				    label: "复制",
				    iconClass: "editActionIcon editCopyIcon",
				    action: "davinci/ve/actions/CopyAction",
				    toolbarPath: "cutcopypaste",
				    keyBinding: {accel: true, charOrCode: "c"}
				},
                {
                    label: "Paste",
                    iconClass: "editActionIcon editPasteIcon",
                    action: "davinci/ve/actions/PasteAction",
                    toolbarPath: "cutcopypaste",
                    keyBinding: {accel: true, charOrCode: "v"}
                },
				{
                    id: "delete",
                    iconClass: "editActionIcon editDeleteIcon",
                    label: "删除",
                    action: "davinci/ve/actions/DeleteAction",
                    toolbarPath: "delete",
                    keyBinding: {charOrCode: [dojo.keys.DELETE, dojo.keys.BACKSPACE]}
                },
                {
                    id: "openBrowser",
                    iconClass: 'openBrowserIcon',
                    className: 'davinciFloatRight openBrowser',
                    run: function() {
                        require(['../Workbench'], function(workbench) {
                            var editor = workbench.getOpenEditor();
                            if (editor && editor.resourceFile) {
                                editor.previewInBrowser();
                            } else {
                                console.error("ERROR. Cannot launch browser window. No editor info.");
                            }
                        });
                    },
                    label: "在浏览器中预览",
                    toolbarPath: "undoredo",
                    keyBinding: {accel: true, charOrCode: "0", allowGlobal: true}
                },
                {
                    id: "documentSettings",
                    iconClass: 'documentSettingsIcon',
                    className: 'documentSettings davinciFloatRight',
                    label: "文档设置",
                    toolbarPath: "undoredo",
                    type:'DropDownButton',
                    menu:[
                       {
                           id: "theme",
                           iconClass: 'selectThemeIcon',
                           className: "davinciFloatRight",
                           action: "davinci/actions/SelectThemeAction",
                           label: "切换主题"
                        },
                       {
                           id: "chooseDevice",
                           iconClass: 'deviceIcon',
                           className: "davinciFloatRight",
                           action: "davinci/ve/actions/ChooseDeviceAction",
                           label: "选择设备"
                       },
                       {
                           id: "rotateDevice",
                           iconClass: 'rotateIcon',
                           className: "davinciFloatRight",
                           action: "davinci/ve/actions/RotateDeviceAction",
                           label: "旋转设备"
                       },
                       {
                           iconClass: "editActionIcon",
                           label: "选择父节点",
                           action: "davinci/ve/actions/SelectParentAction"
                       },
                       {
                           iconClass: "editActionIcon",
                           label: "选择祖先节点r...",
                           action: "davinci/ve/actions/SelectAncestorAction"
                       },
                       {
                           iconClass: "editActionIcon",
                           label: "取消选择所有",
                           action: "davinci/ve/actions/UnselectAllAction"
                       },
                       {
                           iconClass: "editActionIcon",
                           label: "移至最前",
                           action: "davinci/ve/actions/MoveToFrontAction"
                       },
                       {
                           iconClass: "editActionIcon",
                           label: "向前移动",
                           action: "davinci/ve/actions/MoveForwardAction"
                       },
                       {
                           iconClass: "editActionIcon",
                           label: "向后移动",
                           action: "davinci/ve/actions/MoveBackwardAction"
                       },
                       {
                           iconClass: "editActionIcon",
                           label: "移至最底层",
                           action: "davinci/ve/actions/MoveToBackAction"
                       },
                       {
                           iconClass: "editActionIcon",
                           label: "包裹于 &lt;A&gt;中",
                           action: "davinci/ve/actions/SurroundAction",
                           surroundWithTagName:'a'
                       },
                       {
                           iconClass: "editActionIcon",
                           label: "包裹于 &lt;DIV&gt;中",
                           action: "davinci/ve/actions/SurroundAction",
                           surroundWithTagName:'div'
                       },
                       {
                           iconClass: "editActionIcon",
                           label: "包裹于 &lt;SPAN&gt;中",
                           action: "davinci/ve/actions/SurroundAction",
                           surroundWithTagName:'span'
                       },
                       {
                           iconClass: "editActionIcon",
                           label: "管理状态...",
                           action: "davinci/ve/actions/ManageStates",
                           menubarPath: "davinci.edit/cut"
                       	}/*,
                       {
                           iconClass: "editActionIcon",
                           label: "Application States...",
                           action: "davinci/ve/actions/EnableApplicationStates"
                       }*/
                    ]
                },
                {
                    id: "stickynote",
                    iconClass: 'stickynoteIcon',
                    action: "davinci/actions/StickyNoteAction",
                    label: "添加笔记",
                    toolbarPath: "stickynote"
                },
                {
                    id: "layout",
                    className: "maqLabelButton davinciFloatRight maqLayoutDropDownButton",
                    showLabel: true,
                    label: "流式布局",	// will be updated by code
                    toolbarPath: "undoredo",
                    type:'DropDownButton',
                    menu:[
                        {
                            label: "流式布局",
                            iconClass: "flowLayoutIcon",
                            method: "selectLayoutFlow"
                        },
                        {
                            label: "绝对布局",
                            iconClass: "absoluteLayoutIcon",
                            method: "selectLayoutAbsolute"
                        }
                   ]
                 },
                {
                    id: "sourcecombo",
                    className: "maqLabelButton davinciFloatRight maqSourceComboButton",
                    showLabel: true,
                    label: "源代码",
                    action: "davinci/ve/actions/ViewSourceAction",
                    toolbarPath: "undoredo",
                    type:'ComboButton',
                    menu:[
                       {
                            keyBinding: {accel: true, charOrCode: "2", allowGlobal: true},
                            iconClass: 'editActionIcon sourceModeIcon sourceMenuIcon',
                            action: "davinci/ve/actions/ViewSourceMenuAction",
                            label: "源代码"
                        },
                        {
                            keyBinding: {accel: true, charOrCode: "3", allowGlobal: true},
                            iconClass: 'editActionIcon splitVerticalIcon sourceMenuIcon',
                            action: "davinci/ve/actions/ViewSplitVMenuAction",
                            label: "垂直分屏"
                        },
                        {
                            keyBinding: {accel: true, charOrCode: "4", allowGlobal: true},
                            iconClass: 'editActionIcon splitHorizontalIcon sourceMenuIcon',
                            action: "davinci/ve/actions/ViewSplitHMenuAction",
                            label: "水平分屏"
                        }
                    ]
                },
                {
                    id: "design",
                    //iconClass: 'designModeIcon editActionIcon',
                    showLabel: true,
                    className: 'maqLabelButton davinciFloatRight maqDesignButton',
                    action: "davinci/ve/actions/ViewDesignAction",
                    label: "设计",
                    toolbarPath: "undoredo",
                    keyBinding: {accel: true, charOrCode: "1", allowGlobal: true}
                },
                {
                    id: "closeactiveeditor",
                    run: function() {
                        require(['../Workbench'], function(workbench) {
                            workbench.closeActiveEditor();
                        });
                    },
                    keyBinding: {accel: true, shift: true, charOrCode: "w", allowGlobal: true}
                },
                {
                    id: "showWidgetsPalette",
                    run: function() {
                    	var tab = dijit.byId("davinci.ve.Palette");
                    	if (tab) {
                    		var tabContainer = tab.getParent();
                    		// Select tab
                    		if (tabContainer) {
                    			tabContainer.selectChild(tab);
                    		}
                    	} 
                    },
                    keyBinding: {meta: true, charOrCode: "p", allowGlobal: true}
                }
            ]
        }
    },
    "davinci.preferences": [
        {
            name: "Visual Editor",
            id: "editorPrefs",
            category: "davinci.html.general",
            pane: "davinci/ve/prefs/HTMLEditPreferences",
            defaultValues: {
                "flowLayout": true,
                "snap": true,
				"showPossibleParents": false,
                "cssOverrideWarn": true,
                "absoluteWidgetsZindex": 900,
                "widgetPaletteLayout": "icons"
            }
        }
    ],
    "davinci.dnd": [
        {
            parts: [
                "davinci.ui.navigator"
            ],
            dragSource: function(object) {
                if (object.elementType == 'File') {
                    return (/gif|jpeg|jpg|png|svg|json/i).test(object.getExtension());
                }
            },
            dragHandler: "davinci/ve/palette/ImageDragSource"
        }
    ],
    "davinci.fileType": [
        {
            extension: "theme",
            iconClass: "themeFileIcon",
            type: "text"
        }
    ],
    "davinci.defaultEditorActions": {
			editorContribution: {
				actions: [
					{
						id: "save",
						run: function() {
							require('../Workbench').getOpenEditor().save();
						},
						isEnabled: function(context) {
							return true;
						},
		                className: "maqLabelButton",
		                showLabel: true,
						label: "保存",
						toolbarPath: "save",
						keyBinding: {accel: true, charOrCode: "s"}
					},
					{
						id: "undo",
					    iconClass: 'editActionIcon undoIcon',
					    action: "davinci/actions/UndoAction",
					    label: "撤销",
					    //showLabel: true,
					    toolbarPath: "undoredo",
					    keyBinding: {accel: true, charOrCode: "z"}
					},
					{
					    id: "redo",
					    iconClass: 'editActionIcon redoIcon',
					    action: "davinci/actions/RedoAction",
					    //showLabel: true,
					    label: "重做",
					    toolbarPath: "undoredo",
					    keyBinding: {accel: true, shift: true, charOrCode: "z"}
					}
				]
			}
		}
};

});