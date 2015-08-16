var React                     = require('react'),
    CounterControlView        = require('./modules/counter/ControlView'),
    CounterDisplayControlView = require('./modules/counterDisplay/ControlView'),
    CounterResetControlView = require('./modules/counterReset/ControlView');

var Page = React.createClass({

  render: function() {
    return (
      <div>
        <CounterControlView />
        <CounterResetControlView />
        <CounterDisplayControlView />
      </div>
    );
  }
});

module.exports = Page;
