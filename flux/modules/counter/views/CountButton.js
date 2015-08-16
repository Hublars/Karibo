var React = require('react');

var CountButton = React.createClass({

  render: function() {
    return (
      <button onClick={this.props.click}>{this.props.label}</button>
    )
  }
});

module.exports = CountButton;
