// Starting files
const express = require("express");
const bodyParser = require("body-parser");

const app = express();                // app is an instance of express


app.get("/", function(req,res){

    var today = new Date();      //Javascript Date objects, new Date() will give the current date.
                                 

 if (today.getDay()===0 || today.getDay===6){
     console.log("wow! Its a weekend");
 } else{
     res.send("God! I have to work");
 }
    

});                          



app.listen(3000 , function(){

    console.log("Server started at port 3000");
});