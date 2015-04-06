app.nav = {
	init: function() {
		$("#toggleicon a").click(app.nav.toggleOverLay)
		$("#linktosecondpage a").click(app.nav.toggleOverLay)
	},
	toggleOverLay: function(event) {
		event.preventDefault();
		$("#subpage").toggleClass("open");
		$("body").toggleClass("closed");
		return false;
	}
}