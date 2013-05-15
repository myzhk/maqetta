define([
	"davinci/css!./resources/Comment.css"
], function() {

return {
	id: "davinci.review",
	"davinci.view": [
		{
			id: "comment",
			title: "Comments",
			viewClass: "davinci/review/view/CommentView",
            iconClass: "paletteIcon paletteIconComments"
		},
		{
			id: "reviewNavigator",
			title: "评审",
			viewClass: "davinci/review/view/CommentExplorerView",
            iconClass: "paletteIcon paletteIconReviews"

		},
		{
			id: "state",
			title: "States",
			viewClass: "davinci/ve/views/StatesView",
            iconClass: "paletteIcon paletteIconStates"
		}
	],
	"davinci.perspective": {
		id: "review",
		title: "Review",
		views: [
            {
                viewID: "davinci.ve.Palette",
                position: "left",
                hidden: true
            },
            {
                viewID: "davinci.ui.outline",
                position: "left",
                hidden: true
            },
            {
                viewID: "davinci.ve.style",
                position: "right"
            },
            {
                viewID: "davinci.ui.comment",
                position: "right",
                selected: true
            },
            {
                viewID: "davinci.ve.states",
                position: "right-bottom"
            },
            {
                viewID: "davinci.ui.navigator",
                position: "left-bottom"
            },
            {
                viewID: "davinci.review.reviewNavigator",
                position: "left",
                selected: true
            }
		]
	},
	"davinci.editor": [
		{
			id: "CommentReviewEditor",
			name: "评审编辑器",
			extensions: "rev",
			isDefault: true,
			editorClass: "davinci/review/editor/ReviewEditor",
			editorClassName: "ReviewEditor",
			palettePerspective: "davinci.review.review",
	        expandPalettes: ["right"]
		}
	],
	"davinci.fileType": [
		{
			extension: "rev",
			iconClass: "reviewFileIcon",
			type: "text"
		}
	],
	"davinci.actionSets": [
		{
			id: "editorActionsReview",
			visible: true,
			actions: [
				{
					id: "newReview",
					action: "davinci/review/actions/PublishAction",
	                iconClass: "newOpenMenuItem newReviewMenuItem",
					label: "评审...",
					menubarPath: "davinci.new/newTheme"
				}
			]
		},
		{
			id: "reviewExplorerActions",
			visible: true,
			actions: [
				{
					id: "davinci.review.view",
					label: "打开",
					action: "davinci/review/actions/ViewFileAction",
					//iconClass: "viewActionIcon reviewFileIcon",
					menubarPath: "newfile"
				},
				{
					id: "davinci.review.edit",
					label: "编辑...",
					action: "davinci/review/actions/EditVersionAction",
					//iconClass: "viewActionIcon editVersionIcon",
					menubarPath: "newfile"
				},
				{
					id: "davinci.review.open",
					label: "开始",
					action: "davinci/review/actions/OpenVersionAction",
					//iconClass: "viewActionIcon openVersionIcon",
					menubarPath: "newfile"
				},
				{
					id: "davinci.review.close",
					label: "停止...",
					action: "davinci/review/actions/CloseVersionAction",
					//iconClass: "viewActionIcon closeVersionIcon",
					menubarPath: "newfile"
				},
				{
					id: "davinci.review.delete",
					label: "删除...",
					action: "davinci/review/actions/DeleteVersionAction",
					//iconClass: "viewActionIcon deleteVersionIcon",
					menubarPath: "newfile",
					keyBinding: {charOrCode: [dojo.keys.DELETE, dojo.keys.BACKSPACE]}
				},
				{
					id: "davinci.review.restart",
					label: "重新发布...",
					action: "davinci/review/actions/RestartVersionAction",
					menubarPath: "newfile"
				}
			]

		}
	],
	"davinci.actionSetPartAssociations": [
		{
			targetID: "davinci.review.editorActionsReview",
			parts: ["davinci.ui.editorMenuBar"]
		  },
		{
			targetID: "davinci.review.reviewExplorerActions",
			parts: ["davinci.review.reviewNavigator"]
		}
	],
	"davinci.annotationActions": {
		editorContribution: {
			actions: [
				{
					id: "arrow",
					label: "绘制箭头",
					iconClass: "davinciAnnotationIcon davinciAnnotationIconArrow",
					action: "davinci/review/actions/ArrowAction",
					toolbarPath: "annotationtools"
				},
				{
					id: "rect",
					label: "绘制矩形",
					iconClass: "davinciAnnotationIcon davinciAnnotationIconRect",
					action: "davinci/review/actions/RectAction",
					toolbarPath: "annotationtools"
				},
				{
					id: "ellipse",
					label: "绘制椭圆",
					iconClass: "davinciAnnotationIcon davinciAnnotationIconEllipse",
					action: "davinci/review/actions/EllipseAction",
					toolbarPath: "annotationtools"
				},
				{
					id: "textAnnotation",
					label: "绘制文本",
					iconClass: "davinciAnnotationIcon davinciAnnotationIconText",
					action: "davinci/review/actions/TextAction",
					toolbarPath: "annotationtools"
				},
				{
				    id: "deleteAnnotation",
				    iconClass: "davinciAnnotationIcon davinciAnnotationIconDelete",
				    label: "删除标记",
				    action: "davinci/review/actions/DeleteAnnotationAction",
				    toolbarPath: "annotationtools_delete",
				    keyBinding: {charOrCode: [dojo.keys.DELETE, dojo.keys.BACKSPACE]}
				}
			]
		}
	},
    "davinci.editorActions": {
        editorContribution: {
            targetID: "davinci.review.CommentReviewEditor",
            actions: [
                {
                    id: "ReviewToolBarText",
                    type: "davinci/review/widgets/ReviewToolBarText",
                    toolbarPath: "ReviewToolBarText"
                }
            ]
        }
    }

};

});