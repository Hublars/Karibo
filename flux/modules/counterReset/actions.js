var AppDispatcher = require('../../AppDispatcher'),
    appConstants  = require('../../appConstants');

var actions = {
  reset: function(item) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.RESET_COUNTER,
      data: item
    });
  }
};

module.exports = actions;
