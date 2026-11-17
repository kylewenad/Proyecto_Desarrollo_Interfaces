const express = require('express');
const productoController = require('../controllers/producto.controller')
const ruta = express.Router();

ruta.get('/insertarTodos',productoController.insertAll);
ruta.get('/todos',productoController.showAll);
ruta.get('/buscarTipo/:tipo',productoController.findByTipo);
ruta.get('/buscarProducto/:nombre',productoController.findProducto);


module.exports= ruta;