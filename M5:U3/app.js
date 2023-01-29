var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var pool = require('./models/bd');

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

app.use('/', indexRouter);
app.use('/users', usersRouter);

// CONSULTAS a la base de datos
// SELECT
// pool.query('select * from empleados').then(function (resultados) {
//   console.log(resultados);
// });

// INSERT / en la consola va a aparecer que lo agrego PERO no aparece toda la lista de empleados, sino que va a aparecer en la base de datos de php admin
// let obj = {
//   nombre: 'Juan Ignacio',
//   apellido: 'Garaygorta',
//   trabajo: 'kinesiologo',
//   edad: '27',
//   salario: 2000,
//   mail: 'juangaray0@gmail.com'
// }

// pool.query('insert into empleados set ?', [obj]).then(function (resultados) {

//   console.log(resultados)
// });

// UPDATE / idem anterior, el cambio se ve en la base de datos. en la consola dice que se coincidio el id, se cambio blabla
// let id = 24;
// let obj2 = {
//   nombre: 'Agustina',
//   apellido: 'Fernandez',
//   trabajo: 'Programadora',
//   salario: 1800,
//   mail: 'lic.fernandezagustina@gmail.com'
// }

// pool.query('update empleados set ? where id_emp=?', [obj2, id]).then(function(resultados) {
//   console.log(resultados)
// });

// DELETE
// let id = 25 lo borre, lo comente y puse el 26 para tambien borrarlo porque queria borrar 25 y 26
let id = 26;
pool.query('delete from empleados where id_emp=?', id).then(function (resultados) {
  console.log(resultados)
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
