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


// Use the session middleware
// app.use(session({
//     resave: true,
//     saveUninitialized: false,
//     secret: 4444,
//     cookie: {maxAge: 30 * 24 * 60 * 60 * 1000}
// }));

// 只需要用express app的use方法将session挂载在‘/’路径即可，这样所有的路由都可以访问到session。
//可以给要挂载的session传递不同的option参数，来控制session的不同特性
// app.get('/', function(req, res, next) {
//     var sess = req.session;//用这个属性获取session中保存的数据，而且返回的JSON数据
//     if (sess.views) {
//         sess.views++;
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<p>欢迎第 ' + sess.views + '次访问       ' + 'expires in:' + (sess.cookie.maxAge / 1000) + 's</p>');
//
//         console.log('<p>欢迎第 ' + sess.views + '次访问       ' + 'expires in:' + (sess.cookie.maxAge / 1000) + 's</p>');
//         res.end();
//     } else {
//         sess.views = 1;
//         res.end('welcome to the session demo. refresh!')
//     }
// });
module.exports = app;



