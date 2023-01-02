var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// ROUTERS ('controladores')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let contactanosRouter = require ('./routes/contactanos')
let galeriaRouter = require ('./routes/galeria')
let menuRouter = require ('./routes/menu')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// USANDO LOS ROUTERS
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contactanos', contactanosRouter);
app.use('/galeria', galeriaRouter);
app.use('/menu', menuRouter);



// ROUTING = app.metodo(('path', (req, res) => res.send("mensaje que aparece en la pantalla")});
// app.get("/contactanos", function(req,res){
//   res.send("Bienvenidos! Completa el formulario y en la brevedad nos comunicaremos con vos..")
// })

// app.get("/galeria", function(req,res){
//   res.send("Te compartimos las mejores fotos de nuestro restaurat! Esperamos que te gusten tanto como a nosotros..")
// })

// app.get("/menu", function(req,res){
//   res.send("Aca vas a poder ver todos nuestros platos!")
// })

// catch 404 and forward to error handlerno
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
