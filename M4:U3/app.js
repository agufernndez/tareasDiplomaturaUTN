var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// aca sigo poniendo las rutas para el resto de las paginas

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// aca sigo haciendo las rutas para las dif paginas

// aca van los get
app.get("/contactanos", function(req,res){
  res.send("Bienvenidos! Completa el formulario y en la brevedad nos comunicaremos con vos..")
})

app.get("/galeria", function(req,res){
  res.send("Te compartimos las mejores fotos de nuestro restaurat! Esperamos que te gusten tanto como a nosotros..")
})

app.get("/menu", function(req,res){
  res.send("Aca vas a poder ver todos nuestros platos!")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
