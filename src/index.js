const express= require ('express');
const engine= require('ejs-mate');
const path =require('path');

//inicializaciones

const app=express();

//settings

app.engine('ejs',engine);
app.set ('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


//routes

app.use(require('./routes/'));

//static files

app.use(express.static(path.join(__dirname,'public')));

// start server

app.listen(3000,function (){
    console.log ('Server on port 3000');
})