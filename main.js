requery.config ({
	paths : {
		jquery : 'jquery-3.2.1.min',
		jqueryUI: 'http://code.jquery.com/ui/1.10.4/jquery-ui'
	}
});

require (['jquery','window'], function ($, w) {
	$("#a").click(function () {
		new w.Window().alert({
			title: "提示",
 			content:"welcome !", 
			handler4AlertBtn: function () {
			  alert("you click the alert button");
		  }
		  handler4ClosetBtn: function () {
		  	alert("you click the close button");
		  }
			width:300,
			height:150,
			y:50,
			hasCloseBtn: true,
			skinClassName: "window_skin_a",
			text4AlertBtn: "OK",
			dragHandle: ".window_header"
		});
	});
});