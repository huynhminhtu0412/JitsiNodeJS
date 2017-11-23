// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
var testDirname = __dirname + "JitsiNodeJS";
// //Setup handlebar layout and partials directory
// var handlebars = require('express-handlebars').create(
//     {   defaultLayout:'main',
//         layoutsDir: path.join(testDirname, "/views/layouts"), //Set layout directory
//         partialsDir: path.join(testDirname, "/views/partials"), //Set partial directory
//         extname: 'handlebars'
//     });
//
//
//
// var index = require('./routes/index');2

// var users = require('./routes/users');
// var app = express();
//
// app.engine('handlebars',handlebars.engine); //handlebar engine
//
// app.set('views', path.join(testDirname, 'views'));
//
//
// //app.set('port', process.env.PORT || 1900);
//
// //route to home page
// app.get('/', function(req,res) {
//     res.render('home');
// });
//
// //route to about page
// app.get('/about', function(req,res) {
//     res.render('about');
// });
//
// app.use(function(req,res,next){
//     console.log("Looking for URL: " + req.url );
//     next();
// });
//
// app.get('/junk',function(req,res,next){
//     console.log('Tried to access /junk');
//     throw new Error('Junk does\'t exist');
// });
//
// app.use(function(err,req,res,next) {
//     console.log('Error: ' + err.message);
//     next();
// });
//
// // app.use(function(req,res) {
// //     res.type('text/html');
// //     res.status (404);
// //     res.render('404');
// // })
//
// app.use(function (err, req, res, next) {
//     console.error(err.stack);
//     res,status(500);
//     res.render('505');
// })
//
//
//
// //Display message
// app.listen(app.get('port'), function(){
//   console.log("Express started on http://localhost:" + app.get('port'));
// });
//
// // view engine setup
// app.set('view engine', 'handlebars');
//
// //Setup public folder for images..etc
// app.use(express.static(__dirname + '/public'));
//
// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', index);
// app.use('/users', users);
//
//
//
//
// module.exports = app;

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
var handlebars = require('express-handlebars').create(
    {   defaultLayout:'main',
        layoutsDir: path.join(testDirname, "/views/layouts"), //Set layout directory
        partialsDir: path.join(testDirname, "/views/partials"), //Set partial directory
        extname: 'handlebars'
    });
app.engine('handlebars',handlebars.engine); //handlebar engine

app.set('views', path.join(__dirname, 'views'));
//deploy khong chay dc thi bo comment dong duoi
// t di an khong lat no dong cua @@ bb ok

// app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
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

module.exports = app;
