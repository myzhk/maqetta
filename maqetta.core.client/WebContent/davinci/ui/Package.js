define(["dojo/_base/declare",
        "./Download",
        "./Resource",
        "dojo/i18n!./nls/ui",
        "dojo/text!./templates/downloadSelected.html"
],function(declare, Download, ResourceUI, uiNLS, templateString){

	return declare([Download], {
		templateString: templateString,

		_buildUITable: function(){
			this._files = ResourceUI.getSelectedResources();
			var uiArray = ["<div class='downloadSelectedHeader'>" + "just test" + "</div>",
			               "<div class='downloadSelectedList'>"];

			
		},

		_getResources: function(){
			return this._files.map(function(item){ return item.getPath();});
		},

		_getLibs: function(){
			return [];
		}
	});
});