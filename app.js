// Starting files
const express = require("express");
const bodyParser = require("body-parser");

const app = express();                // app is an instance of express

app.set('view engine', 'ejs');

app.get("/", function(req,res){

    var today = new Date();      //Javascript Date objects, new Date() will give the current date.
    var currentDay = today.getDay();
    var day = "";                            

switch (currentDay) {
    case 0: 
       day = "Sunday";        
        break;
    case 1: 
       day = "Monday";        
        break;
    case 2: 
        day = "Tuesday";        
        break;
    case 3: 
        day = "wednesday";        
        break;
    case 4: 
        day = "Thursday";        
        break;
    case 5: 
        day = "friday";        
        break;
    case 6: 
        day = "Saturday";        
        break;
       
    default:
        console.log("Error:current day is equal to: "+ currentDay );
        break;
}

    res.render("list", {kindOfDay:day});  
    // Here we're passing the value of "day" into a variable "kindOfDay" which has to match the variable we added in list.ejs file marker "<%= kindOfDay %>".
    // So this line will replace the value of entire marker with the value of "day".

});  



app.listen(3000 , function(){

    console.log("Server started at port 3000");
});