var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"MYDB",
  port:"3306"

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

