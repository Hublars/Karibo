var React       = require('react'),
    CountButton = require('./views/CountButton'),
    store   = require('./store'),
    actions = require('./actions');

var ControlView = React.createClass({

  getInitialState: function() {
    return {
      count: store.getData()
    }
  },

  componentDidMount: function() {
    store.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    store.removeChangeListener(this.onChange);
  },

  countUp: function() {
    actions.countUp({ value: 1 });
  },

  countDown: function() {
    actions.countDown({ value: 1 });
  },

  onChange: function() {
    this.setState({
      count: store.getData()
    })
  },

  render: function() {
    return (
      <section id='counter'>
        <CountButton label='Count Up' click={this.countUp} />
        <CountButton label='...or Down' click={this.countDown} />
        <h3>Count: {this.state.count}</h3>
      </section>
    );
  }
});

module.exports = ControlView;
