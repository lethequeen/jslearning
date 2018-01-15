requery.config ({
	paths : {
		jquery : 'jquery-3.2.1.min'
	}
});

require (['jquery','window'], function ($, w) {
	$("#a").click(function () {
		new w.Window().alert("welcome !");
	});
});