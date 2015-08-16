var React       = require('react'),
    store   = require('./store');

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

  onChange: function() {
    this.setState({
      count: store.getData()
    })
  },

  render: function() {
    return (
      <section id='counterDisplay'>
        <h3>Total clicks: {this.state.count}</h3>
      </section>
    );
  }
});

module.exports = ControlView;
