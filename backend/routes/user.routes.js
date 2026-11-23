const express = require('express');
const usuarioController = require('../controllers/user.controller');

const ruta= express.Router();

ruta.post('/crearUsuario', usuarioController.signUp)

ruta.get('/', (req, res) => {
    res.json({ mensaje: 'Ruta users funcionando' });
});

module.exports= ruta;