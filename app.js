const express = require('express');
const body_parser = require ('body-parser');
const mysql = require ('mysql');
const { engine } = require ('express-handlebars');

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/:id?', function(req, res) {
    //res.send("Essa é minha página inicial");
    //res.sendFile(__dirname+"/index.html"); 
    //res.render('index');
    //console.log(req.params.id);
    res.render('index',{id:req.params.id});
});

app.listen(3000, function(req,res){
    console.log('Servidor rodando')
});