var React       = require('react'),
    ResetButton = require('./views/ResetButton'),
    actions = require('./actions');

var ControlView = React.createClass({

  reset: function() {
    actions.reset({});
  },

  render: function() {
    return (
      <section id='counterReset'>
        <ResetButton label='Reset' click={this.reset} />
      </section>
    );
  }
});

module.exports = ControlView;
