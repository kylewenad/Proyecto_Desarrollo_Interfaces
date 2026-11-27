const express = require('express');

const { verificarToken }= require('../middlewares/auth'); //Proteccion de rutas
const ProductoController = require('../controllers/producto.controller')

const ruta = express.Router();

//Añadir productos
ruta.post('/crearProducto', verificarToken, ProductoController.addProduct)

//Obtener productos
ruta.get('/', ProductoController.findAll);
ruta.get('/categoria/:categoria', ProductoController.findByCategoria); // filtrar por categoría. 
ruta.get('/precio/:min/:max', ProductoController.findByPrecioMinMax);//precio entre ambos extremos
ruta.get('/stock/:cantidad', ProductoController.findByStock);// stock superior a la cantidad indicada. 
ruta.get('/buscar/:texto', ProductoController.findByTexto);//nombre que contenga el texto, sin distinguir mayúsculas. 
ruta.get('/ordenados/precio', ProductoController.ordenarPorPrecio);//ordenar por precio ascendente. 

//Modificar productoF------------------>ALTA  MODIFICAR  TALLA 
ruta.post('/modificarProducto', verificarToken, ProductoController.updateProduct);

//Eliminar producto 
ruta.delete('/eliminarProducto', verificarToken, ProductoController.deleteProduct);

module.exports = ruta;