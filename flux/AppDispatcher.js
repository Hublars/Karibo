var Dispatcher    = require('./Dispatcher'),
    objectAssign  = require('react/lib/Object.assign');
    
var AppDispatcher = objectAssign({}, Dispatcher, {

  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
