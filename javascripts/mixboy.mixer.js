(function($) {
  soundManager.onready(function() {
    $("#mixer input.on-off").change(function(){
      channel = $(this).parents("li").attr("id")
      sound = mixboy.store.getChannel(channel);
      $(this).is(":checked") == true ? sound.play() : sound.pause();
    });

    $("#mixer input.song").change(function(){
      channel = $(this).parents("li").attr("id");

      soundManager.destroySound(channel);
      window.mixboy.store.set(channel, {
        id: channel,
        url: $(this).val(),
        stream: true
      });

      $(this).parents("li").find(".on-off").trigger("change");
    });

    $("#mixer input.volume").change(function(){
      channel = $(this).parents("li").attr("id");
      var song = soundManager.getSoundById(channel);
      song.setVolume($(this).val());
    });

    $("#mixer input.song").trigger("change");
    window.mixboy.mixer = mixer;
  });
})(jQuery);