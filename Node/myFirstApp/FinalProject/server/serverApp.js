const express=require('express');
const app=express();
var url=require('url');
const cors=require('cors');
const db_con=require('./database');
const path=require('path');
const bodyparser=require('body-parser');

var urlencodedParser=bodyparser.urlencoded({extended:false});

app.use(express.static(path.join(__dirname,'../','client')));
 

app.get("/", function (req, res) {
    res.sendFile(__dirname + "../client/index.html");
   
  });
var corsOptions={
    origin:'*',
    optionsSuccessStatus: 200
};

app.post("/getAll",urlencodedParser,cors(corsOptions),(req,res)=>{
    let qdata=req.body.word;
    db_con.lookDefinition(qdata,req,res);
});
app.listen(5008,()=>{
    console.log('server is running....')
});