var React = require('react'),
    Page  = require('./flux/Page.js');

function render() {
  var container = document.getElementById('mainSection');
  var component = React.createElement(Page);
  React.render(component, container);
}

render();
