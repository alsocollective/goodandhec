var app = {
	init: function() {
		app.nav.init();

		if (!app.detectMobile()) {
			app.youtube.init();
		} else {
			app.youtube.novideo();
		};
		app.overideSubmit();
		// if (app.videoLooper && !app.detectMobile()) { //&& false
		// 	app.videoLooper.init({
		// 		videos: ["lera3", "melissa1", "lera1"],
		// 		target: $("video")
		// 	})
		// } else {
		// 	app.videoLooper.removeVideo();
		// }


		/*if (ga) {
			app.analytics.init();
		}*/

		// setTimeout(function() {
		$("#overlay").addClass("fade")
		// setTimeout(function() {
		$("#overlay").remove();
		// }
		// 	, 1500)
		// }, 1000)

	},
	overideSubmit: function() {
		$("#mc-embedded-subscribe").click(function(event) {
			this.href = "http://goodandhec.us10.list-manage.com/subscribe?u=2c5eed12197d57d3af985c724&id=723e03d532&MERGE0=" + $("#mce-EMAIL").val();
		});
		$("#mce-EMAIL").keyup(function(event) {
			if (event.which == 13) {
				window.open("http://goodandhec.us10.list-manage.com/subscribe?u=2c5eed12197d57d3af985c724&id=723e03d532&MERGE0=" + $("#mce-EMAIL").val());
			}
		});
	},
	detectMobile: function() {
		// check the useragent this is a bit problematic... but hey...
		var testone = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
		// remove devices with huge screens such as smart tvs or others...
		var testtwo = window.matchMedia("only screen and (max-width: 760px)");
		// check if it's a touch screen
		var testthree = false
		try {
			document.createEvent("TouchEvent");
			testthree = true;
		} catch (e) {
			testthree = false;
		}
		return (testone && testtwo && testthree);
	}
};


/*app.analytics = {
	init: function() {
		$(".social a").click(app.analytics.social);
		$("#mc_embed_signup a").click(app.analytics.email);
		$("#toggleicon a").click(app.analytics.openwindow);
	},
	social: function(event) {
		console.log(this.id);
	},
	email: function(event) {
		console.log("email!!!");
		ga('send', 'event', 'category', 'action', 'label');
	},
	openwindow: function(event) {
		console.log("toggled open!");
		ga('send', {
			'hitType': 'pageview',
			'page': '/more-info',
			'title': 'More Information'
		});
	}

}*/