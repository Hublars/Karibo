var AppDispatcher = require('../../AppDispatcher'),
    appConstants  = require('../../appConstants');

var actions = {
  countUp: function(item) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.COUNT_UP,
      data: item
    });
  },
  countDown: function(item) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.COUNT_DOWN,
      data: item
    });
  }
};

module.exports = actions;
