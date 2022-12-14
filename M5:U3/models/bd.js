let mysql = require('mysql');
let util = require('util');

var pool = mysql.createPool({
    connectionLimit:10,
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DB_NAME
});

pool.query = util.promisify(pool.query);

module.exports = pool;



// host:'localhost',
//     user:'root',
//     password:'root',
//     database:'tareaM5:U2'

// MYSQL_HOST=localhost
// MYSQL_DB_NAME=tareaM5:U2
// MYSQL_USER=root
// MYSQL_PASSWORD=root

