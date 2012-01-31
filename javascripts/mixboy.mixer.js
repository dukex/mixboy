(function($) {
  soundManager.onready(function() {
    soundManager.defaultOptions.whileplaying = window.mixboy.showInfo;
    soundManager.defaultOptions.onplay = window.mixboy.onplay;

    $("#mixer input.on-off").change(function(){
      var root = $(this).parents("li")
      var channel = root.attr("id");
      var sound = mixboy.store.getChannel(channel);

      isChecked = $(this).is(":checked") === true
      isChecked ? sound.play() : sound.pause();
    });

    $("#mixer input.song").change(function(){
      var root = $(this).parents("ul").parents("li");
      var channel = root.attr("id");
      soundManager.destroySound(channel);
      window.mixboy.store.set(channel, {
        id: channel,
        url: $(this).val(),
        stream: true
      });
      window.mixboy.keys[root.attr("rel")] = channel
      root.find(".on-off").trigger("change");
    });

    $("#mixer input.volume").change(function(){
      var root = $(this).parents("ul").parents("li");
      var channel = root.attr("id");
      var song = soundManager.getSoundById(channel);
      song.setVolume($(this).val());
    });

    $("#mixer input.song").trigger("change");
    window.mixboy.mixer = mixer;
  });
})(jQuery);