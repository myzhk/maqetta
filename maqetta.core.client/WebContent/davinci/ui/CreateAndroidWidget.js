define(["dojo/_base/declare",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetBase",
        "dijit/_WidgetsInTemplateMixin",
        "davinci/library",
        "dijit/Dialog",
        "dijit/ProgressBar",
        'dojo/io/iframe',
        "../Runtime",
        "dojox/grid/EnhancedGrid",
        "dojox/grid/enhanced/plugins/IndirectSelection",
        "dojo/data/ItemFileWriteStore",
        "system/resource",
        "dojo/promise/all",
        "dojo/parser",
        "davinci/Workbench",
        "davinci/ve/RebaseDownload",
        "dojo/i18n!./nls/ui",
        "dojo/i18n!dijit/nls/common",
        "dojo/text!./templates/CreateAndroidWidget.html",
        "davinci/Theme",
        "dijit/form/Button",
        "dijit/form/ValidationTextBox",
        "dijit/form/TextBox"
],function(declare, _TemplatedMixin, _WidgetBase, _WidgetsInTemplateMixin, Library, Dialog, ProgressBar, Iframe, Runtime, EnhancedGrid, IndirectSelection, ItemFileWriteStore, Resource, all, parser, Workbench, RebaseDownload, uiNLS, commonNLS, templateString, Theme){
	return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
		templateString: templateString,
		
		widgetsInTemplate: true,
		_widgetId : null,
		_widgetName : null,
		_androidTargetGridDiv : null,
		_selectedFilesListDiv : null,
		
		postMixInProperties: function() {
			this._projectName = Workbench.getProject();
			dojo.mixin(this, uiNLS);
			dojo.mixin(this, commonNLS);
			this.inherited(arguments);
			
		},

		buildRendering: function(){
			this.inherited(arguments);
			this._buildUITable();
		},
		
		_buildUITable: function() {
			this._handles = [];
			var uiArray = [
			    dojo.replace("<table cellspacing='5' cellpadding='5' width='100%' class='androidPlatform'>" +
			    		"<tr>" +
			    			"<td class='header'>安卓平台</td>" +
			    			"<td class='header'>version</td>" +
			    			"<td class='header'>选择</td>" +
			    		"</tr>" +
			    		"<tr><td colspan='4'><hr></hr></td></tr>", uiNLS)];
			/* build UI table */
				uiArray = uiArray.concat([
				    "<tr>" + 
				    "<td class='columna'>" + "Android 2.2" + "</td>",
					"<td class='columnb' align='center'><input type='radio' data-dojo-type='dijit/form/RadioButton' checked name='version' value='22'></input></td>",
					"</tr>" +
					"<tr>" + 
				    "<td class='columna'>" + "Android 2.3" + "</td>",
					"<td class='columnb' align='center'><input type='radio' data-dojo-type='dijit/form/RadioButton' name='version' value='23'></input></td>",
					"</tr>" +
					"<tr>" + 
				    "<td class='columna'>" + "Android 4.0" + "</td>",
					"<td class='columnb' align='center'><input type='radio' data-dojo-type='dijit/form/RadioButton' name='version' value='40'></input></td>",
					"</tr>" +
					"<tr>" + 
				    "<td class='columna'>" + "Android 4.1" + "</td>",
					"<td class='columnb' align='center'><input type='radio' data-dojo-type='dijit/form/RadioButton' name='version' value='41'></input></td>",
					"</tr>"
					]);
			
			uiArray.push("</table>");
			dojo.place(uiArray.join(""), this._tableDiv);

			// parse dijits
			parser.parse(this._tableDiv);
		},
		
		downloadAndroidApk : function(apkPath) {
			Iframe.send({
				url : "./cmd/downloadAndroidApk",
				content : {
					apkPath : apkPath
				}
			});
		},
		
		createAndroidApk: function(version) {
//			var userinfo = Runtime.getUserWorkspaceUrl();
//			alert(userinfo);
			var progressBarDialog = new dijit.Dialog({
				id : "progressBarDialog",
				title : "生成Android apk",
				content :  "<div>正在生成安装包,请稍候...</div>" + "<div style='width:400px' indeterminate='True'"
						+ " id='progressBar' dojoType='dijit.ProgressBar'></div>"
			});
			dojo.style(progressBarDialog.closeButtonNode, "visibility", "hidden");
			
			progressBarDialog.show();
			dojo.xhrGet({
				url : "./cmd/createAndroidApk",
				sync : false,
				content : {
					SdkVersion : version,
				},
				handleAs : "json",
				load : function(response, ioArgs) {
					progressBarDialog.destroyRecursive(false);
					if (response != null && response["apkPath"] != null) {
						davinci.ui.Resource.downloadAndroidApk(response["apkPath"]);
					}
				},
				error : function(response, ioArgs) {
					window.alert("Error");
				}
			});
		},
		
		
		
		okButton : function() {
			/**
			 * 此处所选中的文件传送至Android服务器的指定目录， 然后再调用生成android Widget的批处理文件，
			 * 执行批处理之后，将生成的apk文件的地址返回到一个新的窗口
			 */
			var checkedButtons = dojo.query('[name=version]').filter(function(radio){return radio.checked;});
			this.createAndroidApk(checkedButtons[0].value);
			//alert(checkedButtons[0].value);
			this.onClose();
		},
		cancelButton : function() {
			this.onClose();
		}
		
		
		
	});
});