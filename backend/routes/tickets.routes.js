/*const express = require('express');
const usuarioController = require('../controllers/ticket.controller');
const { verificarToken }= require('../middlewares/auth');
const ticketController = require('../controllers/ticket.controller');

const ruta= express.Router();

ruta.get('/', (req, res) => {
    res.json({ mensaje: 'Ruta tickets funcionando' });
});

ruta.post('/crearTicket', ticketController.submitTicket);
/*ruta.post('/:id/messages', ticketController.addMessageToTicket);


ruta.get('/obtenerTickets', ticketController.getTickets);
ruta.get('/:id', ticketController.getTicketById);

ruta.post('/modificarTicket', ticketController.updateTicket);

ruta.delete('/eliminarTicket', ticketController.deleteTicket);
*/

module.exports = ruta;*/