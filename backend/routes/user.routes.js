const express = require('express');
const usuarioController = require('../controllers/user.controller');

const ruta= express.Router();

ruta.get('/', (req, res) => {
    res.json({ mensaje: 'Ruta users funcionando' });
});

ruta.post('/crearUsuario', usuarioController.signUp);
ruta.get('/login', usuarioController.login);
ruta.delete('/eliminarUsuario', usuarioController.deleteUser);


module.exports= ruta;