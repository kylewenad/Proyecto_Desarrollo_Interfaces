const express = require('express');
const usuarioController = require('../controllers/user.controller');

const ruta= express.Router();

ruta.post('/crearUsuario',usuarioController.signUp)

module.exports= ruta;