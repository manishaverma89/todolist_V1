// Starting files
const express = require("express");
const bodyParser = require("body-parser");

const app = express();                // app is an instance of express


app.get("/", function(req,res){

    var today = new Date();      //Javascript Date objects, new Date() will give the current date.
                                 

 if (today.getDay()===0 || today.getDay===6){
     req.write("wow! Its a weekend");
 } else{
    res.sendFile(__dirname + "/index.html");
 }
    

});     

// res.sendFile() is used to send a html file.




app.listen(3000 , function(){

    console.log("Server started at port 3000");
});