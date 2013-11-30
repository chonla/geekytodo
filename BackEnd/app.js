
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/geekytodo');

GLOBAL.mongoose = mongoose;

var user = require('./routes/user');
var http = require('http');
var path = require('path');
var category = require('./routes/category');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.bodyParser());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', routes.index);
app.get('/api/users', user.list);
app.post('/api/users/signup', user.signup);
app.post('/api/users/signin', user.signin);

// Category API List

app.get('/api/categories/', category.list)
app.post('/api/category/', category.create)
// app.put('/api/category', category.update)


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
