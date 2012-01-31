var mixboy = {
	showInfo: function (info) {
		var sound_container = $("#"+this.sID).parent();
		sound_container.find("time .current").html(this.position);
		sound_container.find("time .total").html(this.duration);
	}
};

window.mixboy = mixboy;