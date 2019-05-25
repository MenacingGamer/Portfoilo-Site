const express = require('express')
const app = express()
const port = 3000


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



app.listen(port, () => console.log(`Example app listening on port ${port}!`))