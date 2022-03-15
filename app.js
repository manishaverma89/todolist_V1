// Starting files
const express = require("express");
const bodyParser = require("body-parser");

const app = express();                // app is an instance of express


app.get("/", function(req,res){

    var today = new Date();      //Javascript Date objects, new Date() will give the current date.
                                 

 if (today.getDay()===0 || today.getDay===6){
     req.write("wow! Its a weekend");
 } else{
     res.write("<p>It isn't the weekend.</p>")
     res.write("God! I have to work!");
     res.send();
 }
    

});     

// res.write() allows you to send over multiple pieces of data, here res.send() alone will not work.
// At the end of res.write(), res.send() is called.



app.listen(3000 , function(){

    console.log("Server started at port 3000");
});