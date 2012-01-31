(function($) {
  soundManager.onready(function() {
    $("#mixer input.on-off").change(function(){
      var root = $(this).parents("li")
      var channel = root.attr("id");
      var sound = mixboy.store.getChannel(channel);

      isChecked = $(this).is(":checked") === true
      isChecked ? sound.play() : sound.pause();

      root.find("progress").toggle(isChecked);
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