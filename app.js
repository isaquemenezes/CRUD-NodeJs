const express = require ('express');
const body_parser = require ('body-parser');
const mysql = require ('mysql');
const express_handlebars = require ('express-handlebars');

const app=express();

//Routes / Templates
app.get("/", function(req, res){
    //res.send("Página Inicial!");
    res.sendFile(__dirname+"/index.html");
});


app.listen(3000, function(req,res){
    console.log('Servidor rodando')
});