(function($) {
	soundManager.onready(function() {
		mixer = {}

		mixer["channel-1"] = soundManager.createSound({
		  id: 'channel-1',
		  url: 'audio/BackTrack.mp3',
		  stream: true,
		  whileplaying: mixboy.showInfo
		});

		mixer["channel-2"] = soundManager.createSound({
		  id: 'channel-2',
		  url: 'audio/PleaseMrPostman.mp3',
		  stream: true,
		  whileplaying: mixboy.showInfo
		});

		$("#mixer input").change(function(){
     		sound = mixboy.mixer[$(this).attr("id")];
      		$(this).is(":checked") == true ? sound.play() : sound.pause();
    	});

    	window.mixboy.mixer = mixer
	});
})(jQuery);