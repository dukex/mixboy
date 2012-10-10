var mixboy = {
  keys: {},
  showInfo: function () {
    var root = $('#'+this.sID);
    var progress = (this.position * 100)/this.duration;
    root.find("progress").attr("value", progress);
    root.find(".on-off").attr("checked", true)
  },
  onplay: function(){
    var root = $('#'+this.sID);
    root.find("progress").show();
  },
  onpause: function(){
    var root = $('#'+this.sID);
    root.find(".on-off").attr("checked", false)
  },
  _keyHandler: function(e) {
    var oEvt = e?e:event;
    var sChar = String.fromCharCode(oEvt.keyCode).toLowerCase();

    if (typeof mixboy.keys[sChar] != 'undefined'){
      var song = soundManager.getSoundById(mixboy.keys[sChar]);
      if(oEvt.type == "keydown"){
        song.play();
        window.mixboy.store.set("status-channel-"+sChar, {withShift: oEvt.shiftKey})
      } else {
        statusChannel = window.mixboy.store.get("status-channel-"+sChar)
        withShift = statusChannel && statusChannel.withShift
        if(!withShift){
          song.stop();
          window.mixboy.store.set("status-channel-"+sChar, {withShift: oEvt.shiftKey})
        }
      }
      $("#channel-"+sChar+"-on-off").attr("checked", !!song.playState)
    } else if(oEvt.shiftKey){
      $("#channel input.on-off:checked").each(function(i, channel_el){
        var root = $(channel_el).parents("li")
        var channel = root.attr("rel");
        window.mixboy.store.set("status-channel-"+channel, {withShift: true})
      })
    }
  }
};

window.mixboy = mixboy;
document.onkeydown = mixboy._keyHandler;
document.onkeyup = mixboy._keyHandler;
