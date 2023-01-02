var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');

// ROUTERS
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// aca coloco el codigo de express-session, ANTES de los routers, sino NO va a funcionar.
app.use(session({
  secret: "agustinafernandez2022",
  resave: false,
  saveUninitialized: true
}));

// usando los ROUTERS
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('/', (req, res) => {
  let conocido = Boolean(req.session.usuario);

  res.render('index', {
    title: 'Tarea sesiones en Express',
    conocido: conocido,
    usuario: req.session.usuario
  });
});

app.post('/ingresar', (req, res) => {
  if (req.body.usuario) {
    req.session.usuario = req.body.usuario
  }
  res.redirect('/')
});

app.get('/salir', (req, res) => {
  req.session.destroy();
  res.redirect('/')
});


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
