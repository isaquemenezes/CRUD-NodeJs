const express = require('express');
const body_parser = require ('body-parser');
const mysql = require ('mysql');
const { engine } = require ('express-handlebars');
const { application } = require('express');

const urlEncodeParser=body_parser.urlencoded({extended:false});

const sql=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306
});
sql.query("use nodejs");

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

//Link de arquivos externos 1 opção
//app.use("/css", express.static('css'));
//app.use("/js", express.static('js'));
//app.use("/images", express.static('img'));


app.get('/', function(req, res) {
    //res.send("Essa é minha página inicial");
    //res.sendFile(__dirname+"/index.html"); 
    //res.render('index');
    //console.log(req.params.id);
    res.render('index');
});

//Link por rotas
app.get("/main",function(req,res){
    res.sendFile(__dirname+'/js/main.js');
});

app.get("/style",function(req,res){
    res.sendFile(__dirname+'/css/style.css');
});

//Inserir dados
app.get('/registrar',function(req,res) {
    res.render('registrar');
});

//Rota post controllerRegister
app.post('/controllerRegister',urlEncodeParser,function(req,res){
    //console.log(req.body.name);
    sql.query(
            "INSERT INTO user values (?,?,?)",
            [
                req.body.id,
                req.body.name,
                req.body.age
            ]);
    res.render('controllerRegister',{name:req.body.name});

})

app.listen(3000, function(req,res){
    console.log('Servidor rodando')
});