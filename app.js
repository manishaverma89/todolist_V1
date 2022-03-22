const express = require("express");
const bodyParser = require("body-parser");

const app = express();                // app is an instance of express

let items= ["buy food","cook food","Eat Food"];
app.set('view engine', 'ejs'); //This line of code tells our app which is generated using express to use ejs as its "view engine". 

app.use(bodyParser.urlencoded({extended:true})); 
                     
app.use(express.static("public"));      //public folder is created to add sattic files like css,javascript,images


app.get("/", function(req,res){

    let today = new Date();      //Javascript Date objects, new Date() will give the current date.
    
                          
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    let day= today.toLocaleString("en-US",options);    
    res.render("list", {kindOfDay:day , newListItems: items});  
   
});  

app.post("/",function(req,res){
    let item = req.body.itemName;
    items.push(item);
    // console.log("Item Name is:"+ item);
    res.redirect("/");
});



app.listen(3000 , function(){

    console.log("Server started at port 3000");
});