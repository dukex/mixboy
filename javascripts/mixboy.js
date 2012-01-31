var mixboy = {
	showInfo: function () {
		var root = $('#'+this.sID);
		var progress = (this.position * 100)/this.duration;
		root.find("progress").attr("value", progress);
	}
};

window.mixboy = mixboy;