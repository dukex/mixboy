mixboy =
  keys: {}

  showInfo: ()->
    root = $('#'+this.sID)
    progress = (this.position * 100)/this.duration
    root.find("progress").attr("value", progress)
    root.find(".on-off").attr("checked", true)

  onplay: ()->
    root = $('#'+this.sID)
    root.find("progress").show()

  onpause: ()->
    root = $('#'+this.sID)
    root.find(".on-off").attr("checked", false)

  _keyHandler: (e)->
    oEvt = if e then e else event
    sChar = String.fromCharCode(oEvt.keyCode).toLowerCase()

    if (typeof mixboy.keys[sChar] != 'undefined')
      song = soundManager.getSoundById(mixboy.keys[sChar])
      if(oEvt.type == "keydown")
        song.play()
        window.mixboy.store.set("status-channel-"+sChar, {withShift: oEvt.shiftKey})
      else
        statusChannel = window.mixboy.store.get("status-channel-"+sChar)
        withShift = statusChannel && statusChannel.withShift
        toPause = oEvt.ctrlKey
        if(!withShift && !toPause)
          song.stop()
          window.mixboy.store.set("status-channel-"+sChar, {withShift: oEvt.shiftKey})
        else if(toPause)
          song.pause()


      $("#channel-"+sChar+"-on-off").attr("checked", !!song.playState)
    else if(oEvt.shiftKey)
      $("#channel input.on-off:checked").each (i, channel_el)->
        root = $(channel_el).parents("li")
        channel = root.attr("rel")
        window.mixboy.store.set("status-channel-"+channel, {withShift: true})



window.mixboy = mixboy
$(document).ready ->
  $(document).live("keydown keyup", mixboy._keyHandler)
