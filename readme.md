# Treinamento em Node js
## CRUD em Node js
### Pacotes
1. npm install --save express
2. npm install --save nodemon
3. npm install --save mysql
4. npm install --save body-parser
5. npm install --save express-handlebars

6. npm install --save sequelize
6.1 npm install --save-dev sequelize-cli

#### Iniciar 
npx sequelize-cli init

#### Para criar as nossas migrations vamos rodar os seguintes comandos:
npx sequelize-cli model:generate --name User --attributes name:string,password:string,email:string,balance:float

npx sequelize-cli model:generate --name Pokemon --attributes name:string,price:float,image:string,userId:integer

#### Roda migration
npx sequelize-cli db:migrate

## Para enviar nossa aplicação do NodeJS para o ar seguiremos as seguintes etapas:
1 - Crie sua conta no Heroku
2 - Após efetuar o login clique em "Create New App" e dê um nome único ao seu app
3 - Insira os dados do seu cartão de crédito (não haverá cobrança).
4 - Baixe e instale o Heroku Cli
5 - Baixe o Mysql Workbench
6 - Baixe o Git

## Configurando o banco de Dados
Na página inicial do Heroku acesse Configurar Add-ons >> Find More Add-ons e pesquise por ClearDB e Clique em Instalar.

Posteriormente acesse a página inicial do ClearDB e insira o nome do seu app criado lá no início da aula.

Para pegar os dados do banco de dados acesse Settings >> Review Config Bar. Ele vai gerar um código, desse código a primeira parte é o user, a segunda é a senha, após o arroba temos o servidor e depois da barra o banco de dados.

Após separar os dados do banco de dados iremos colar esses dados no arquivo app, mais ou menos igual ao exemplo abaixo:

const sql=mysql.createPool({
    user: "b926229695df71",
    password: "bbaf5bc2",
    host: "us-cdbr-iron-east-03.cleardb.net",
    database: "heroku_31db7131297b26"
});

Repare que no código acima utilizamos o método createPool, isso pois ele é mais estável online.

Posteriormente vamos abrir nosso terminal (iniciar >> cmd), acessar a raíz do projeto e iniciar:

cd c:/wamp64/www
npm init

Preencha com os dados do seu projeto.

Você vai reparar que ele vai criar o arquivo package.json. Abra esse arquivo e edite o seguinte:

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
},

Acesse novamente a página inicial do Heroku e acesse o link deploy. Nessa página ele traz todos os comandos que devemos utilizar no Heroku Cli.

heroku login
git init
heroku git:clone -a webdesign-em-foco
git add .
git commit -am "make it better"
git push heroku master

Por fim, precisamos setar a porta pra que o Heroku utilize a porta interna do servidor online. Ficará assim no nosso app.js:

let port=process.env.PORT || 3000;
app.listen(port,function(req,res){console.log('Servidor está rodando!');});