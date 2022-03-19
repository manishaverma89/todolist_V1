const express = require("express");
const bodyParser = require("body-parser");

const app = express();                // app is an instance of express

app.set('view engine', 'ejs'); //This line of code tells our app which is generated using express to use ejs as its "view engine". 

app.get("/", function(req,res){

    var today = new Date();      //Javascript Date objects, new Date() will give the current date.
    
                          
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    var day= today.toLocaleString("en-US",options);    
    res.render("list", {kindOfDay:day});  
   
});  



app.listen(3000 , function(){

    console.log("Server started at port 3000");
});