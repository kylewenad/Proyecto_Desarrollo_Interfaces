const express = require('express');
const usuarioController = require('../controllers/user.controller');
const { verificarToken }= require('../middlewares/auth');


const ruta= express.Router();

ruta.get('/', (req, res) => {
    res.json({ mensaje: 'Ruta users funcionando' });
});

ruta.post('/crearUsuario', usuarioController.signUp);
ruta.post('/login', usuarioController.login);

ruta.get('/profile', verificarToken,usuarioController.getProfile);
ruta.delete('/eliminarUsuario', verificarToken, usuarioController.deleteUser);

ruta.patch("/:id/rol", verificarToken, usuarioController.cambiarRolUsuario)

module.exports= ruta;