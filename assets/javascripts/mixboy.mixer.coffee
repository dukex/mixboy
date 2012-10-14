(($)->
  soundManager.onready ->
    soundManager.defaultOptions =
      whileplaying: window.mixboy.showInfo
      onplay: window.mixboy.onplay
      onpause: window.mixboy.onpause
      autoLoad: true

    $("#mixer input.on-off").change ->
      root = $(this).parents("li")
      channel = root.attr("id")
      sound = mixboy.store.getChannel(channel)

      isChecked = $(this).is(":checked") is on
      if isChecked then sound.play() else sound.stop()

    $("#mixer input.song").change ->
      root = $(this).parents("ul").parents("li")
      channel = root.attr("id")
      soundManager.destroySound(channel)
      window.mixboy.store.set channel,
        id: channel
        url: $(this).val()
        stream: true

      window.mixboy.keys[root.attr("rel")] = channel
      root.find(".on-off").trigger("change")

    $("#mixer input.volume").change ->
      root = $(this).parents("ul").parents("li")
      channel = root.attr("id")
      song = soundManager.getSoundById(channel)
      song.setVolume($(this).val())

    $("#mixer input.song").trigger("change")
    window.mixboy.mixer = mixer
)(jQuery)
