var express = require('express'),
    exphbs  = require('express-handlebars'),
    router  = require('./router'),
    app     = express();

app.start = function(port, dirname) {

  app.use(express.static(dirname + '/public'));

  app.engine('.hbs', exphbs({
    defaultLayout: 'docLayout',
    extname: '.hbs'
  }));

  app.set('view engine', '.hbs');
  app.set('views', dirname + '/views');

  app.use('/', router);

  var server  = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
  });
}

module.exports = app;
