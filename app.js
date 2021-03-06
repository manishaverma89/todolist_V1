const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");


const app = express(); // app is an instance of express

const items = ["buy food", "cook food", "Eat Food"];
const workItems = [];
const officeItems = [];

app.set("view engine", "ejs"); //This line of code tells our app which is generated using express to use ejs as its "view engine".

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public")); //public folder is created to add sattic files like css,javascript,images

app.get("/", function (req, res) {
  const day = date.getDate();          // exports from date.js
  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
   
  const item = req.body.newItem;
  if(req.body.list === "Work-List"){
    workItems.push(item);
    res.redirect("/work")
  }
  else if(req.body.list === "Office-Work"){
    officeItems.push(item);
    res.redirect("/office");
  }
  else{
      items.push(item);
      res.redirect("/");
  }
  // console.log("Item Name is:"+ item);
  
});

// Work List

app.get("/work", function (req, res) {
  res.render("list", {listTitle: "Work-List" , newListItems:workItems});

});


//About Page
app.get("/about",function(req,res){
res.render("about");
});

// Office work
app.get("/office", function(req,res) {
res.render("list", {listTitle: "Office-Work", newListItems: officeItems});
});


app.listen(3000, function () {
  console.log("Server started at port 3000");
});
