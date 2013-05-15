define({ root:
{
		/*Currently this file is also used for davinci.review/WebContent/review.html*/
		//pagedesigner.html
		"designer":"设计人,",
		"welcome":"欢迎",//also in review.html
		"loadingMaqetta":"&nbsp;正在努力加载 BUPT Visual Editor...",
		startupError: "启动BUPT Visual Editor 失败: ${0}",
		"logOff":"注销",//also in review.html
		"unsupportedBrowser":"浏览器不被支持",
		"unsupportedNote":"BUPT Maqetta 支持 Firefox 4, Chrome 5, Safari 5.1 或更高版本. 如果您想继续使用不被支持的浏览器, 点击 \"继续.\"",
		"buttonContinue":"继续",
		"pageDesignerTitle":"BUPT Visual Editor Designer",
		"maqettaUser":"BUPT Visual Editor 用户",
		"localhostUser":"本地用户",
		"sessionTimedOut":"会话超时",
		"sessionTimedOutMsg": "当前会话超时, 请重新<a href='${hrefLoc}'>登录</a>. (10秒钟内将自动跳转)",
		
		//preview.html
		"devicePreviewError":"Maqetta device previewer error. Must supply URL parameter 'file='",
		"devicePreviewPreviewing":"Previewing:",
		
		//davinci.review/WebContent/review.html
		"help":"帮助",
		"tutorials":"教程",
		"aboutMaqetta":"关于BUPT Visual Editor",
		"review":"审阅及评论,",
		"reviewPageTitle":"BUPT Visual Editor 评论板",
		
		//davinci/Runtime.js
		"careful":"Warning: You are about to leave Maqetta.",
		"errorLoadingPlugin":"error loading plugin ${0}, response=${1}",
		"errorLoadingPlugins":"error loading plugins",
		"multipleFilesUnsaved":"${0} (NOTE: This is one of ${1} files with unsaved changes.)",
		"idleSessionMessage": "Your session will timeout in ${seconds} seconds, click anywhere in the page to continue using Maqetta.",
		
		//davinci/Workbench.js
		"fileHasUnsavedChanges":"保存更改到 ${0}?",
		"perspectiveNotFound":"perspective not found: ${0}",
		"scopeNotDefined":"scope not defined for action: ${0}",
		"funcNotDefined":"function not defined for action: ${0}",
		"serverConnectError":"<h3>Error connecting to the Maqetta Server.</h3><br><div>Please click here to <a href='${redirectUrl}'>return to Maqetta</a><div><div>Error description: ${error}</div>"
}
});
