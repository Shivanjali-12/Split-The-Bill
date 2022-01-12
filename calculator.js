const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended : true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    var n1= Number(req.body.rupees);
    var n2= Number(req.body.number);
    var result = n1/n2 ;
    res.send("Amount per head is : " + result + " Rupees");
});

app.listen(3000, function(){
    console.log("Server started at port 3000");
});