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
		root.find("progress").toggle();

	},
    _keyHandler: function(e) {
      var oEvt = e?e:event;
      var sChar = String.fromCharCode(oEvt.keyCode).toLowerCase();
      if (typeof mixboy.keys[sChar] != 'undefined') soundManager.play(mixboy.keys[sChar]);
    }
};

window.mixboy = mixboy;
document.onkeydown = mixboy._keyHandler;