(function($) {
  var store = {
    getChannel: function(channel){
      return soundManager.createSound(this.get(channel));
    },
    set: function(key, value){
      return localStorage.setItem(key, this.serialize(value))
    },
    get: function (key) {
      return this.deserialize(localStorage.getItem(key))
    },
    serialize: function(value){
      return JSON.stringify(value)
    },
    deserialize: function(value) {
      if (typeof value != 'string') return undefined
      return JSON.parse(value)
    }
  };
  window.mixboy.store = store;
})(jQuery);