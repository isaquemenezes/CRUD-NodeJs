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
