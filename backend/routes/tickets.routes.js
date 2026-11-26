const express = require('express');

const { verificarToken }= require('../middlewares/auth'); //Para proteger todas las rutas.
const ticketController = require('../controllers/ticket.controller'); //Metodos creados en controller

const ruta= express.Router();

//Crear ticket
ruta.post('/crearTicket', verificarToken, ticketController.crearTicket);

//Obtener tickets
ruta.get('/', verificarToken, ticketController.findAll);
ruta.get('/idTicket/:id', verificarToken, ticketController.findByIdTicket);
ruta.get('/filtrar', verificarToken, ticketController.filtrarTickets);

//Modificar tickets
ruta.post('/agregarMensaje', verificarToken, ticketController.addMessage);
ruta.post('/modificarTicket', verificarToken, ticketController.actualizarTicket);

//Eliminar tickets
ruta.delete('/eliminarTicket', verificarToken, ticketController.deleteTicket);

module.exports = ruta;