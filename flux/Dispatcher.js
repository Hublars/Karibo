var callbacks = [];

var Dispatcher = {

  register: function(callback) {
    
    callbacks.push(callback);
  },

  dispatch: function(payload) {
    //console.log('dispatcher payload');
    //console.log(payload);
    for (var i = 0; i < callbacks.length; i++) {
      //console.log('callbacks[i]');
      //console.log(callbacks[i]);
      callbacks[i](payload);
    }
  }
}

module.exports = Dispatcher;
