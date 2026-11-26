const express = require('express');
const usuarioController = require('../controllers/user.controller');
const { verificarToken }= require('../middlewares/auth'); //Para proteger todas las rutas.
const ticketController = require('../controllers/ticket.controller');

const ruta= express.Router();

ruta.get('/', verificarToken, ticketController.findAll);
ruta.get('/idTicket/:id', verificarToken, ticketController.findByIdTicket);
ruta.get('/filtrar', verificarToken, ticketController.filtrarTickets);

ruta.post('/crearTicket', verificarToken, ticketController.crearTicket);
ruta.post('/agregarMensaje', verificarToken, ticketController.addMessage);
ruta.post('/modificarTicket', verificarToken, ticketController.actualizarTicket);

ruta.delete('/eliminarTicket', verificarToken, ticketController.deleteTicket);

module.exports = ruta;