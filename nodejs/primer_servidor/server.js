//importaciones de librerias
const express = require('express');
const cors = require("cors");

//Objetos de librerias y constatentes globales
const app = express();
const port = 3000;

//configuraciones de la aplicacion
app.use(cors());
app.use(express.json());

//-----------------------------------------------------------------
//------------------------- Rutas ---------------------------------
//Ruta index
app.get('/', ( req, res ) => {
    res.json({ user: 'jerry' })
});

//Ruta login
app.post('/login', (req, res) => {
    res.json({ logged: true })
});

//Creacion del escuchador de peticiones
app.listen( port, () => {
    console.log("Servidor iniciado");
});