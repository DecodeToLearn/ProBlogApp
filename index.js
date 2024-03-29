const express = require("express");
const path = require("path");
const app = express();
app.use("/libs",express.static("node_modules"));
app.use("/static",express.static("public"));
app.use("/blogs/:blogid",function(req, res){
    res.sendFile(path.join(__dirname,"views/users","blog-details.html"));
});

app.use("/blogs",function(req, res){
    res.sendFile(path.join(__dirname,"views/users","blogs.html"));
});

app.use("/",function(req, res){
    res.sendFile(path.join(__dirname,"views/users","index.html"));
});


app.listen(3000,function(){
    console.log("listening on port 3000");
});