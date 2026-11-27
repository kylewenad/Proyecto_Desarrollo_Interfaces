const express = require('express');

const { verificarToken }= require('../middlewares/auth'); //Proteccion de rutas
const PedidoController = require('../controllers/pedido.controller')

const ruta = express.Router();

//Añadir pedidos
ruta.post('/crearPedido', verificarToken, PedidoController.crearPedido);

//Ver todos los pedidos
ruta.get('/', verificarToken, PedidoController.obtenerPedidos);
ruta.get('/idPedido/:idPedido', verificarToken, PedidoController.obtenerPedidoPorId);

//Modificar pedidos
ruta.post('/actualizarEstado/:idPedido', verificarToken, PedidoController.actualizarEstadoPedido);

//Eliminar pedido
ruta.post('/eliminarPedido/:idPedido', verificarToken, PedidoController.eliminarPedido);

module.exports = ruta;