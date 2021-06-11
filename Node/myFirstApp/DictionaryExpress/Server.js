var express = require('express');
var app = express();
var mysql = require('mysql');
var cors = require('cors')

app.use(cors())

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'entries'
});

connection.connect();

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/JS'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/search', function(req, res) {
    connection.query("SELECT e.wordtype, e.definition FROM entries.entries e where e.word='" + req.query.key + "'", function(err, rows, fields) {
        if (err) throw err;
        var data = [];
        for (i = 0; i < rows.length; i++) {
            data.push(i + 1 + '(' + rows[i].wordtype + ') :: ' + rows[i].definition);
        }
        res.end(JSON.stringify(data));
    });
});

var server = app.listen(3002, function() {
    console.log("We have started our server on port 3000");
});