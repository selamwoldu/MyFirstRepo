var mysql = require('mysql');
var express = require('express');
const router = express.Router();
const path = require('path');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "entries",
    port: 3306
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

  });

 
  router.get('/', function (req, res) {
   
   res.sendFile(path.join(__dirname, '/dict.html'));

  });

  router.post('/find', function (req, res) {
    var words = req.body.word;
    console.log(words + " dddddddddddddddddd")
   
    var sql = "SELECT wordtype, definition FROM entries WHERE word = '"+words+"'" ;
  
    con.query(sql,function (err, data, fields) {
        if (err) throw err;
      console.log(data);
    
     
      res.status(200).send(data);
    
  });

 });

 module.exports = router;
 
