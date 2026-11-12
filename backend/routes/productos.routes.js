const express = require('express');
const productoController = require('../controllers/producto.controller')
const ruta = express.Router();

ruta.get('/insertarTodos',productoController.insertAll);


module.exports= ruta;