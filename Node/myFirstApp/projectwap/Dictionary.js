var mysql = require('mysql');
var express = require('express');
const cors=require('cors');
const app = express();

             const path = require('path');
var bodyParser = require("body-parser");

const dictionaryRouter = require('./word')
app.use(bodyParser.urlencoded({ extended: false }));
var port = 3002;
app.use(cors());

  app.use(express.json());
app.use(express.static("assests"))


 app.use("/", dictionaryRouter)
  
  
app.listen(port,()=> console.log(`runs on port ${port}`));