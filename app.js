// Starting files
const express = require("express");
const https = require('https') ;      // to make https request

const bodyParser = require("body-parser");
const app = express();                // app is an instance of express


app.get("/",function(req,res){
    res.send("hello");         //this is what the server will response to the browser(or the user)at "/"
});



app.listen(3000 , function(){

    console.log("Server started at port 3000");
});