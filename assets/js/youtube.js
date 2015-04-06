app.youtube = {
	init: function(video) {
		app.youtube.setSizes();
		$(window).resize(app.youtube.setSizes);
		app.youtube.imageRotate.removeImageRotate();
	},
	player: null,
	height: null,
	width: null,
	setSizes: function() {
		var e = $("#video-wrapper"),
			t = $("#youtube-container iframe");
		app.youtube.height = e.height();
		app.youtube.width = e.width();
		var n = 16 / 9,
			r = app.youtube.width / app.youtube.height;
		var i = app.youtube.width,
			s = app.youtube.height;
		translate3d = null;
		if (r > n) {
			app.youtube.height = app.youtube.width * (9 / 16);
			translate3d = "translate3d(0px, " + (s - app.youtube.height) + "px, 0px)"
		} else {
			app.youtube.width = app.youtube.height * (16 / 9);
			translate3d = "translate3d(" + (i - app.youtube.width) / 2 + "px, 0px, 0px)"
		}
		console.log(t[0], app.youtube.height, app.youtube.width);
		t.css({
			height: app.youtube.height,
			width: app.youtube.width,
			"-webkit-transform": translate3d,
			"-moz-transform": translate3d,
			"-ms-transform": translate3d,
			"-o-transform": translate3d,
			transform: translate3d
		})
	},
	novideo: function() {
		$("#youtube-container iframe").remove();
		// $("#youtube-container").attr("style", "background-image:url(/assets/img/still.jpg)")
		app.youtube.imageRotate.init("#mobileimages >div");
	},
	imageRotate: {
		SETTINGS: {
			parent: null,
			count: 0
		},
		init: function(id) {
			app.youtube.imageRotate.SETTINGS.parent = $(id);
			app.youtube.imageRotate.SETTINGS.divs = app.youtube.imageRotate.SETTINGS.parent.find("div");
			app.youtube.imageRotate.SETTINGS.count = app.youtube.imageRotate.SETTINGS.divs.length;
			setInterval(app.youtube.imageRotate.toggleNext, 8000);
		},
		toggleNext: function() {
			if (app.youtube.imageRotate.SETTINGS.count == 0) {
				app.youtube.imageRotate.SETTINGS.count = app.youtube.imageRotate.SETTINGS.divs.length - 1;
				app.youtube.imageRotate.SETTINGS.divs.removeClass("hide");
			} else {
				$(app.youtube.imageRotate.SETTINGS.divs[app.youtube.imageRotate.SETTINGS.count]).toggleClass("hide");
				--app.youtube.imageRotate.SETTINGS.count;
			}
		},
		removeImageRotate: function(event) {
			$("#mobileimages").remove();
		}
	}
}