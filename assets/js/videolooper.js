app.videoLooper = {
	SETTINGS: {},
	init: function(options) {
		app.videoLooper.SETTINGS = $.extend({
			videos: [],
			target: $("video"),
			track: 1,
			fadeIn: "fade-in",
			firstPlayer: true
		}, options);

		$(app.videoLooper.SETTINGS.target).bind("error", app.videoLooper.error);

		app.videoLooper.start();
	},
	start: function() {
		// Start the first video playing
		app.videoLooper.SETTINGS.target[0].play();
		$(app.videoLooper.SETTINGS.target[0]).addClass("playing fade-in");

		setTimeout(function() {
			app.videoLooper.nextTrack();
		}, (app.videoLooper.SETTINGS.target[0].duration * 1000) - 4000)
	},
	nextTrack: function() {
		// remove zindex from current video
		var old = $("#video-wrapper .playing");
		old.removeClass("playing");

		// start playing next video
		next = old.siblings("video");
		next[0].play()
		// add playing class to next video (z-index)
		// fade in next video
		next.addClass("playing fade-in")

		// after fade in of video...
		setTimeout(function() {
			// load next video
			var title = app.videoLooper.SETTINGS.videos[app.videoLooper.SETTINGS.track];
			app.videoLooper.loadNextVideo(old[0], title);
			app.videoLooper.incramentTrack();

			// fade out current
			old.removeClass("fade-in");
		}, 3000)

		// get durration of video
		var durration = (next[0].duration * 1000) - 4000;
		if (!durration || durration < 5000) {
			durration = 5000;
		}

		// setup the next video
		setTimeout(function() {
			app.videoLooper.nextTrack();
		}, durration)
	},
	loadNextVideo: function(video, title) {
		// we check what formats the browser accepts
		if (Modernizr.video && Modernizr.video.webm) {
			video.setAttribute("src", "http://bohdananderson.com/media/" + title + ".webm");
		} else if (Modernizr.video && Modernizr.video.ogg) {
			video.setAttribute("src", "http://bohdananderson.com/media/" + title + ".ogg");
		} else if (Modernizr.video && Modernizr.video.h264) {
			video.setAttribute("src", "http://bohdananderson.com/media/" + title + ".mp4");
		}
		video.load();
	},
	incramentTrack: function() {
		// we loop through all the videos
		app.videoLooper.SETTINGS.track += 1;
		if (app.videoLooper.SETTINGS.track >= app.videoLooper.SETTINGS.videos.length) {
			app.videoLooper.SETTINGS.track = 0;
		}
	},
	fadeIn: function(event) {
		$(this.parentNode.parentNode).addClass(app.videoLooper.SETTINGS.fadeIn);
	},
	error: function(event) {
		console.log(event);
	},
	removeVideo: function(event) {
		$("video").remove();
	}
}

app.alert = function(event) {
	console.log(event);
}