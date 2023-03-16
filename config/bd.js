let mysql = require('mysql2');
require("dotenv").config()
const url = require('url');

const dbUrl = process.env.DATABASE_URL; // assuming this is where you have stored the DSN
const params = url.parse(dbUrl);

const connection = mysql.createConnection({
  host: params.hostname,
  port: params.port,
  user: params.auth.split(':')[0],
  password: params.auth.split(':')[1],
  database: params.pathname.slice(1)
});

connection.connect(function(err) {
  if (err) {
      console.log('Connexion error ' + err + ' ' + err.code);
      return;
  }
  console.log('connexion  ok!');
});

module.exports = connection
