var AppDispatcher = require('../../AppDispatcher'),
    appConstants  = require('../../appConstants'),
    objectAssign  = require('react/lib/Object.assign'),
    EventEmitter  = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
    count: 0
};

var countUp = function(item) {
  _store.count += 1;
};

var store = objectAssign({}, EventEmitter.prototype, {

  getData: function() {
    return _store.count;
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeLitener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.actionType) {
    case appConstants.COUNT_UP:
      countUp(action.data);
      store.emit(CHANGE_EVENT);
      break;
    case appConstants.COUNT_DOWN:
      countUp(action.data);
      store.emit(CHANGE_EVENT);
      break;
    case appConstants.RESET_COUNTER:
      countUp(action.data);
      store.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = store;
