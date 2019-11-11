const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  // port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  timeout: 0
});

db.connect(err => {
  if (err) {
    console.log('Database Error : ');
    console.log(err);
  } else {
    console.log('Connection to Database Succes 😃 ');
  }
});

module.exports = db;
