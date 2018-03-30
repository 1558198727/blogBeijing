var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');//cookie
var session = require('express-session');//引入session模块


// var redisStore = require("connect-redis")(express);
//系统默认路由
var index = require('./routes/index');
var users = require('./routes/users');

//自定义路由
var games = require('./routes/games');
var doc = require('./routes/doc');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(express.methodOverride());
var getRandom128 = function () {
    var length = 128;
    return Math.floor(Math.random() * Math.pow(36, length)).toString(36);
};
app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: getRandom128(),
    cookie: {maxAge: 30 * 24 * 60 * 60 * 1000}
}));

app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/games', games);
app.use('/doc', doc);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;



