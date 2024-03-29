var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');
var usuariosRoute = require('./routers/usuarios-router');
var conversacionesRoute = require('./routers/conversaciones-router');
var stickersRoute = require('./routers/stickers-router');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/usuarios',usuariosRoute);
app.use('/conversaciones',conversacionesRoute);
app.use('/stickers',stickersRoute);


app.listen(8888, ()=>{
    console.log('Servidor del backend levantado en 8888');
});