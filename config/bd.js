let mysql = require('mysql2');
require("dotenv").config()
const url = require('url');

const dbUrl = process.env.DATABASE_URL; // dsn le
const params = url.parse(dbUrl);

const connection = mysql.createPool({
   host: params.hostname,   
   port: params.port,
   user: params.auth.split(':')[0],
   password: params.auth.split(':')[1],
   database: params.pathname.slice(1)
});

module.exports = connection
