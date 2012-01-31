var mixboy = {
	keys: {},
	showInfo: function () {
		var root = $('#'+this.sID);
		var progress = (this.position * 100)/this.duration;
		root.find("progress").attr("value", progress);
		root.find(".on-off").attr("checked", true)
	},
	onplay: function(){
		console.log(this)
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

		if(song.playState === 0 || song.paused === true){
			song.play();
		}else if(song.playState === 1 && song.paused === false){
			song.pause();
		}
      }
    }
};

window.mixboy = mixboy;
document.onkeydown = mixboy._keyHandler;