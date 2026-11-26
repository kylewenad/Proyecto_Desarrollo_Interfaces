const express = require('express');

const { verificarToken }= require('../middlewares/auth'); //Proteccion de rutas
const usuarioController = require('../controllers/user.controller'); // Metodos de controller

const ruta= express.Router();
//Obtener usuarios
ruta.get('/', verificarToken, usuarioController.findAll); 

//Crear usuario
ruta.post('/crearUsuario', usuarioController.signUp);
ruta.post('/login', usuarioController.login);

//Obtener usuario
ruta.get('/profile', verificarToken,usuarioController.getProfile);

//Modificar usuario
ruta.patch("/:id/rol", verificarToken, usuarioController.cambiarRolUsuario)

//Eliminar usuario
ruta.delete('/eliminarUsuario', verificarToken, usuarioController.deleteUser);


module.exports= ruta;