const express = require('express');
const ProductoController = require('../controllers/producto.controller')

const ruta = express.Router();

ruta.get('/', ProductoController.findAll);
ruta.get('/categoria/:categoria', ProductoController.findByCategoria) // filtrar por categoría. 
ruta.get('/precio/:min/:max', ProductoController.findByPrecioMinMax);//precio entre ambos extremos
ruta.get('/stock/:cantidad', ProductoController.findByStock);// stock superior a la cantidad indicada. 


/*
FALTA COMPROBAR EL RESTO DE RUTAS Y AÑADIR: CREAR,  MODIFICAR, ELIMINAR 
ruta.get('/buscar/:texto', productoController.findByTexto);//nombre que contenga el texto, sin distinguir mayúsculas. 
ruta.get('/ordenados/precio', productoController.ordenarPorPrecio);//ordenar por precio ascendente. 

**/
module.exports = ruta;