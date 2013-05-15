define({ root:
{
		//SwitchingStyleView.js
		"common":"Common",
		"widgetSpecific":"小工具",
		"events":"事件",
		"layout":"布局",
		"showMinMax":"显示最小/最大",
		"padding":"内边距",
		"margins":"外边距",
		"showtrbl":"显示 t/r/b/l",
		"background":"背景",
		"border":"边框",
		"showDetails":"详细信息",
		"fontsAndText":"字体/文本",
		"shapesSVG":"矢量图形",
		"properties":"属性",
		
		//StatesView.js
		"Scenes":"场景",
		"States":"状态",
		"ActiveScene":"此场景当前可见",
		"AppStateFocus":"This application state is the target for application-state-specific visibility or styling changes",
		"InitialScene":"此场景将在程序开始运行时被显示",
		
		//DeviceActions.js
		"chooseDeviceSilhouette":"选择一个设备轮廓: ",
		"filesHasUnsavedChanges":"文件 '${0}' 有未保存的改动, 请\"保存\" 改动后再继续选择设备轮廓.",
		
		//SelectAncestorAction.js
		"selectAncestorTitle":"选择祖先",
		"selectAncestorLabel":"选择祖先 (最近祖先优先):",
		
		//actions/AddState.js, ManageStates.js, ModifyState.js, RenameState.js, StateContainer.js
		"createNewState":"Create New State",
		"updateCurrentState":"Update Current State",
		"createLabel":"创建",
		"updateLabel":"更新",
		"modifyState":"Modify State",
		"modifyLabel":"更新",
		"stateLabel":"Name",
		"enterStateName":"请输入状态名.",
		"stateNameExists":"状态名 '${name}' 已经存在. 请输入一个不同的状态名.",
		"renameState":"重命名状态",
		"renameLabel":"重命名",
		"cancelLabel":"取消",
		"newStateLabel":"新名字:",
		"manageStates":"管理小工具在不同状态下的可见性",
		"manageStatesCheckLabel":"检查:",
		"manageStatesCheckCurrentStateOnly":"当前状态",
		"manageStatesCheckAll":"所有",
		"manageStatesUncheckAll":"无",
		"manageStatesCheckBackgroundOnly":"只有背景",
		"manageStatesAllVisibleFromBackground":"(Visible from Background)",
		"manageStatesSomeVisibleFromBackground":"(Some visible from Background)",
		"manageStatesSomeVisibleSomeHidden":"(Some visible, some hidden)",
		"initialStateCheckBoxLabel":"Initial state at document load time",
		"EnableApplicationStates":"Enable/disable application states",
		"EnableAsStateContainerDescription":"Setting the check box below and clicking OK will allow custom application states to be defined on the currently selected widget.",
		"DisableAsStateContainerDescription":"Unsetting the check box below and clicking OK will disallow custom application states on the currently selected widget.",
		"DisableAsStateContainerDataLoss":"Any existing interactivity based on existing application states will be lost.",
		"EnableAsStateContainerWidgetLabel":"Application states are enabled on this widget",
		"EnableApplicationStatesCurrentWidget":"Currently selected widget",
		"EnableApplicationStatesCurrentStates":"Current application states",
		"EnableApplicationStatesNone":"(none)",
		"NewWidgetsCurrentStateTitleBackground":"Toggle whether new widgets go to Background or selected state (current value: Background)",
		"NewWidgetsCurrentStateTitleCurrentState":"Toggle whether new widgets go to Background or selected state (current value: selected state)",
		
		//input/RichTextInput.js
		"richTextInputHelp":"Provides Rich Text (word processor-like) editing of HTML.",
		
		//input/SmartInput.js
		"smartInputHelp1":"If you use any markup characters (&lt;,&gt;,&amp;), you need to specify whether the text represents literal (plain) text or HTML markup that should be parsed (using an innerHTML assignment).",
		"smartInputHelp2":"Text represents literal (plain) text.",
		"loading":"Loading...",
		"htmlMarkup":"HTML markup",
		
		//widgets/Cascade.js
		"creatingStyleRules":"Creating Style Rules with app.css",
		"propChangeCannotComplete":"This property change cannot be completed because the operation attempts to modify a read-only theme CSS file.",
		"toChangeProperty":"To change this property, one technique is to add a class to this widget (at top of Properties palette)  and then open up the CSS Details pane to target a style rule within your app.css file, as described at ${0}.",
		"errorModifyingValue":"Error modifying value",
		"changeWillModify":"This change will modify one of the CSS style rules defined within a 'CSS theme' and will therefore probably impact other widgets on a global basis.",
		"insteadOfChanging":"Instead of changing the theme CSS files, it is usually better to add a class to this widget (at the top of the Properties palette) and then open up the CSS Details pane to target a style rule within your app.css file, as described at ${0}.",
		"okToProceed":"OK to proceed with this change?",
		"valueIsOverriden":"This value is overriden and can not be changed.",
		"applyToWhich":"Apply to which style rule:",
		"onlyApplyToState":" Only apply to current state (${0})",
		"newRule":"[class: ${0} - New rule in ${1}] ",
		"newThemeRule":"[theme: - New rule in ${0}] ",
		"existingRule":"[class: ${0} - Existing rule in ${1}] ",
		"line":" line: ${0})",
		"propUndefined":"undefined",
		
		//widgets/BackgroundDialog.js
		//background-image type dropdown
		"bgdType_emptystring":"",	// For all languages, must be an empty string
		"bgdType_none":"none",
		"bgdType_url":"image",	// In English, value='url' but displayValue='image'
		"bgdType_linear":"linear gradient",
		"bgdType_radial":"radial gradient",
		"bgdType_other":"other",
		//File picker launch button
		"bgdPickFile":"Choose...",
		//stops
		"bgdStop":"Stop",
		"bgdAddStop":"Add a new gradient stop after this stop",
		"bgdRemoveStop":"Remove this gradient stop",
		"bgdBackgroundColor": "background-color:",
		"bgdBackgroundImageType": "background-image type:",
		"bgdImageUrl": "Image URL:",
		"bgdUrl": "URL:",
		"bgdColorStops": "Color stops:",
		"bgdColor": "color",
		"bgdPosition": "position",
		"bgdOptions": "Options:",
		"bgdAngle": "Angle:",
		"bgdPosition2": "Position:",
		"bgdShape": "Shape:",
		"bgdExtent": "Extent:",
		"bgdBackgroundRepeat": "background-repeat:",
		"bgdBackgroundPosition": "background-position:",
		"bgdBackgroundSize": "background-size:",
		"bgdBackgroundOrigin": "background-origin:",
		"bgdBackgroundClip": "background-clip:",
		"bgdBackgroundImageValue": "'background-image' value:",
		"bgdTemplate": "Template:",
		
		//widgets/ColorPicker.js
		"colorPicker":"Color picker...",
		"removeValue":"Remove Value",
		"selectColor":"选择颜色",
		
		//widgets/WidgetToolBar.js
		"toolBarFor":"for: ",
		"noSelection":"(no selection)",
		"toolBarClass":"class:",
		"toolBarId":"ID:",
		"idAlreadyUsed": "This id is already used by another widget",
		
		//tools/CreateTool.js
		"noValidParents":"No valid parents at this position",
		"willBeChildOf":"Will become a child of:",
		"candidateParents":"Candidate parents:",
		"toChangePress":"To change, press numbers",

		//VisualThemeEditor.js
		"vteWarningTitle": "Theme Version Warning",
		"vteWarningMessage": "Theme version does not match Maqetta version this could produce unexpected results. We suggest recreating the custom theme using the current version of Maqetta and deleting the existing theme.",
		"vteWarningUnsuportedBrowserTitle": "Unsupported brower",
		"vteWarningUnsuportedBrowserMessage": "Editing mobile themes is only supported on webkit browsers, we sugguest using Chrome or Safari to customize mobile themes.",
		"vteWarningToolkitMessage": "Theme version does not match workspace library version this could produce unexpected results. We suggest recreating the custom theme using the current version of Maqetta and deleting the existing theme.",
		"vteErrorTitle": "Theme Version Error",
		"vteErrorMessage": "Theme version is not supported by this version of Maqetta. You must recreating custom theme using the current version of Maqetta and deleting the existing theme..",
		
		//ve.plugin.js
		//Labels for ComboButton for source vs split-h vs split-v
		"SourceComboButton-source":"源代码",
		"SourceComboButton-splitHorizontal":"水平分屏",
		"SourceComboButton-splitVertical":"垂直分屏",
		// Labels for DropdownButton for flow vs absolute
		"LayoutDropDownButton-flow":"流式布局",
		"LayoutDropDownButton-absolute":"绝对布局"
}
});
