const express = require('express');
const body_parser = require ('body-parser');
const mysql = require ('mysql');
const { engine } = require ('express-handlebars');
const { application } = require('express');

const urlEncodeParser=body_parser.urlencoded({extended:false});

/*/Off-line
const sql=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306
});*/

const sql=mysql.createPool({
    host:'us-cdbr-east-05.cleardb.net',
    user:'b0ddc482081a83',
    password:'77014741',
    database:'heroku_d39c5f2392c5997'
});

//Port Pro heroku
//let port=process.env.PORT || 3000;

//sql.query("use nodejs");

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

//Link de arquivos externos 1 opção
app.use("/css", express.static('css'));
app.use("/js", express.static('js'));

app.use("/images", express.static('images'));

//Routes and Templates
app.get('/', function(req, res) {
    //res.send("Essa é minha página inicial");
    //res.sendFile(__dirname+"/index.html"); 
    res.render('index');
    //console.log(req.params.id);
    //res.send('Hi Heroku');  //Teste do heroku 
});

/*
** Link por rotas

app.get("/main",function(req,res){
    res.sendFile(__dirname+'/js/main.js');
});

app.get("/style",function(req,res){
    res.sendFile(__dirname+'/css/style.css');
});
*/



//Inserir dados
app.get('/registrar',function(req,res) {
    res.render('registrar');
});

//Rota Select
app.get('/select/:id?',function(req,res) {
    if (req.params.id) 
    {
        sql.getConnection(function(err,connection){
            connection.query("select * from user where id=?",[req.params.id],function(err,results,filelds){
                res.render('select',{data:results});
            });
        });

        /*sql.query("select * from user where id=?",[req.params.id],function(err,results,filelds){
            res.render('select',{data:results});
        });*/
       
    } else {
        //Config Db Servidor heroku
        sql.getConnection(function(err,connection){
            connection.query("select * from user order by id asc", function(err,results,filelds){
                res.render('select',{data:results});
            });
        });

        /*sql.query("select * from user order by id asc", function(err,results,filelds){
            res.render('select',{data:results});
        });*/
    }
});

/*
//Rota del
app.get('/deletar/:id', function(req,res){
    sql.query("delete from user where id=?",[req.params.id]);
    res.render('deletar');
});

//Rota Update
app.get('/update/:id',urlEncodeParser, function(req,res){
    sql.query("select * from user where id=?",
            [req.params.id], function(err,results,fields){
                res.render('update',{
                    id:req.params.id, 
                    name:results[0].name, 
                    age:results[0].age
        });
    });
    
});

app.post('/controllerEdit',urlEncodeParser,function(req,res){
    sql.query("update user set name=?,age=? where id=?",[
        req.body.name,
        req.body.age,
        req.body.id
    ]);
    res.render('controllerEdit');
})

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

});

*/
app.listen(3000, function(req,res){
    console.log('Servidor rodando')
});