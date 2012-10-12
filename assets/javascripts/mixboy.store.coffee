(($)->
  store =
    getChannel: (channel)->
      return soundManager.createSound(this.get(channel))

    set: (key, value)->
      return localStorage.setItem(key, this.serialize(value))

    get: (key)->
      return this.deserialize(localStorage.getItem(key))

    serialize: (value)->
      return JSON.stringify(value)

    deserialize: (value)->
      return undefined if typeof value != 'string'
      return JSON.parse(value)


  window.mixboy.store = store
)(jQuery)
