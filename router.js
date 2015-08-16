var express    = require('express'),
    React      = require('react'),
    jsx        = require('node-jsx').install(),
    //Page     = React.createFactory(require('./public/classes/Page')),
    Page       = require('./flux/Page.js'),
    component  = React.createElement(Page),
    router     = express.Router();

router.get('/', function(req, res) {

  var markup = React.renderToString(component);

  res.render('bodyView', {
    markup: markup
  });
});

module.exports = router;
