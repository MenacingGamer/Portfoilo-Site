const express = require('express')
const app = express()



app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/colorGame", function(req, res){
    res.render("colorGame");
});

app.get("/colorPlayer", function(req, res){
    res.render("colorPlayer");
});

app.get("/game", function(req, res){
    res.render("game");
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
//  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("your server is running"); 
//  });