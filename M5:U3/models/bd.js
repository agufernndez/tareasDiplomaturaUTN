let mysql = require('mysql');
let util = require('util');

var pool = mysql.createPool({
    connectionLimit:10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    // en mac hay que: poner aca port:8889, poner stop en mamp, poner start y npm start.
    port: 8889
});

pool.query = util.promisify(pool.query);

module.exports = pool;


