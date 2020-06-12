var express=require('express');
var app=express();
//var bodyParser=require('body-parser');
app.use(express.static("public"));
// app.use(bodyParser.urlenconded({extended:true}));
 app.set("view engine","ejs");

 app.get("/",function(req,res){
     res.render('prime');
 });

 app.listen(200,function(){
  console.log("started");
 });