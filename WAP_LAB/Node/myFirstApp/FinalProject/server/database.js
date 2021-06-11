
const mysql= require('mysql');

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'entries',
   
});

connection.connect((err)=>{
    if(err){
        throw err;
    } else{
        console.log('database is connected');
    }
    
});

exports.lookDefinition=function(value,request,response){
    let inval=mysql.escape(value);
    let sqlstr= "SELECT * FROM entries WHERE word="+inval;
   connection.query(sqlstr, function (err,result){
            if(err) throw err  
            response.json(result);
    });
    
 }
