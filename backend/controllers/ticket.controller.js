const mongoose = require('mongoose');
const Ticket = require('../models/ticket.model');
const Usuario = require('../models/user.model');

const ESTADOS_VALIDOS = ['ABIERTO', 'EN_PROGRESO', 'RESUELTO', 'CERRADO'];
const PRIORIDADES_VALIDAS = ['BAJA', 'MEDIA', 'ALTA', 'URGENTE'];

class TicketController{

// Crear ticket
    async crearTicket (req, res) {
        try {
            const { subject, category, text } = req.body;

            if (!subject || !category || !text) {
                return res.status(400).json({
                    error: 'El asunto, la categoría y el mensaje inicial son obligatorios.'
                });
            }

            const userId = req.user.id;
            const emailCliente = req.user.email;
            const rolUsuario = req.user.rol;

            if (!userId || !emailCliente || !rolUsuario) {
                return res.status(401).json({ error: 'No se pudo obtener datos del cliente.' });
            }

            const lastTicket = await Ticket.findOne().sort({ idTicket: -1 }).select("idTicket");
            const nextIdTicket = lastTicket?.idTicket ? lastTicket.idTicket + 1 : 1;

            const ticket = new Ticket({
                idTicket: nextIdTicket, 
                cliente: userId,
                email: emailCliente,
                subject: subject,
                category: category.trim().toUpperCase(),
                messages: [
                    {
                        sender: userId,
                        senderRole: rolUsuario,
                        text: text.trim()
                    }
                ],
                statusHistory: [
                    {
                        oldStatus: null,
                        newStatus: 'ABIERTO',
                        changedBy: userId
                    }
                ]
            });

            const ticketCreado = await ticket.save();

            return res.status(201).json({
                mensaje: 'Ticket creado correctamente.',
                datos: ticketCreado
            });
        
        } catch (error) {
    
            console.error('Fallo al crear el ticket:', error);
            return res.status(500).json({ error: 'Error interno del servidor al crear el ticket.' });
        }
    };

// Mostrar tickets (todos para personal, solo propios para CLIENTE)
    async findAll (req, res) {
        try {
            const filtro = {};

            if (req.user.rol === 'CLIENTE') {
                filtro.cliente = req.user.id;
            }

            const resultado = await Ticket.find(filtro)
                .populate('cliente', 'username email rol')
                .sort({ createdAt: -1 });

            return res.status(200).json({
                mensaje: 'Tickets encontrados.',
                total: resultado.length,
                resultados: resultado
            });
            
        } catch (error) {
            console.error('Fallo al buscar los tickets:', error);
            return res.status(500).json({ error: 'Error interno del servidor al buscar los tickets.' });
        }
    };

// Buscar ticket por ID
    async findByIdTicket(req, res) {
        try {
            const { id } = req.params;
            const emailActual = req.user.email;
            const rolActual = req.user.rol;
            console.log(id);
            console.log(req.user.rol)
            if(!id){
                return res.status(400).json({error: "Ticket no es valido."})
            }

            const ticketResultado = await Ticket.findOne({idTicket: id});
       
            if (!ticketResultado) {
                return res.status(404).json({ error: 'Ticket no encontrado.' });
            }
            
            if(ticketResultado.email === emailActual || rolActual === "ADMINISTRADOR") {
                return res.status(200).json({
                mensaje: 'Ticket encontrado.',
                datos: ticketResultado
                });
            }                
                
            return res.status(403).json({ error: 'No tienes permiso para ver este ticket.' });
            
        } catch (error) {
            console.error('Fallo al buscar el ticket por ID:', error);
            return res.status(500).json({ error: 'Error interno del servidor al buscar el ticket.' });
        }
    };

// Añadir mensaje a un ticket
    async addMessage(req, res)  {
        try {
           
            const { idTicket, text } = req.body;
            console.log(req.body);
            const emailActual = req.user.email;
            const rolActual = req.user.rol;

            if(!idTicket){
                return res.status(400).json({error: "Ticket no es valido."})
            }

            if ( !text || !text.trim()) {
                return res.status(400).json({ error: 'El texto del mensaje es obligatorio.' });
            }

            const ticketResultado = await Ticket.findOne({idTicket: idTicket});

            if (!ticketResultado) {
                return res.status(404).json({ error: 'Ticket no encontrado.' });
            }
            
            if(ticketResultado.email === emailActual || rolActual === "ADMINISTRADOR") {
                ticketResultado.messages.push({
                    sender: req.user.id,
                    senderRole: req.user.rol,
                    text: text.trim()
                });

            const resultado = await ticketResultado.save();

            return res.status(200).json({
                mensaje: 'Mensaje añadido correctamente.',
                datos: resultado
            });
        }
        } catch (error) {
            console.error('Fallo al añadir mensaje al ticket:', error);
            return res.status(500).json({ error: 'Error interno del servidor al añadir el mensaje.' });
        }
    };

// Filtro combinado por query params
    async filtrarTickets(req, res) {
        try {
            const filtro = {};

            if (req.user.rol === 'CLIENTE') {
                filtro.cliente = req.user.id;
            }

            if (req.query.status) {
                const estado = req.query.status.toUpperCase();
                if (!ESTADOS_VALIDOS.includes(estado)) {
                    return res.status(400).json({ error: 'El estado indicado no es válido.' });
                }
                filtro.status = estado;
            }

            if (req.query.priority) {
                const prioridad = req.query.priority.toUpperCase();
                if (!PRIORIDADES_VALIDAS.includes(prioridad)) {
                    return res.status(400).json({ error: 'La prioridad indicada no es válida.' });
                }
                filtro.priority = prioridad;
            }

            if (req.query.category) {
                filtro.category = new RegExp(req.query.category, 'i');
            }

            const resultado = await Ticket.find(filtro)
                .populate('cliente', 'username email rol')
                .sort({ createdAt: -1 });

            return res.status(200).json({
                mensaje: 'Tickets encontrados con los filtros indicados.',
                total: resultado.length,
                resultados: resultado
            });
        } catch (error) {
            console.error('Fallo al filtrar los tickets:', error);
            return res.status(500).json({ error: 'Error interno del servidor al filtrar los tickets.' });
        }
    };

// Actualizar estado y/o prioridad
    async actualizarTicket(req, res) {
        try {
    
            const { idTicket, status, priority } = req.body;
            const rolActual = req.user.rol;

            if(!idTicket){
                return res.status(400).json({error: "Ticket no es valido."})
            }


            if (priority !== undefined && rolActual !== 'ADMINISTRADOR') {
                return res.status(403).json({
                    error: 'Solo un ADMINISTRADOR puede cambiar la prioridad del ticket.'
                });
            }

            const ticket = await Ticket.findOne({idTicket: idTicket});

            if (!ticket) {
                return res.status(404).json({ error: 'Ticket no encontrado.' });
            }

            if (status !== undefined) {
                const nuevoEstado = status.toUpperCase();
                if (!ESTADOS_VALIDOS.includes(nuevoEstado)) {
                    return res.status(400).json({ error: 'El estado indicado no es válido.' });
                }

                if (ticket.status !== nuevoEstado) {
                    ticket.statusHistory.push({
                        oldStatus: ticket.status,
                        newStatus: nuevoEstado,
                        changedBy: req.user.id
                    });
                    ticket.status = nuevoEstado;
                }
            }

            if (priority !== undefined) {
                const nuevaPrioridad = priority.toUpperCase();
                if (!PRIORIDADES_VALIDAS.includes(nuevaPrioridad)) {
                    return res.status(400).json({ error: 'La prioridad indicada no es válida.' });
                }
                ticket.priority = nuevaPrioridad;
            }

            const resultado = await ticket.save();

            return res.status(200).json({
                mensaje: 'Ticket actualizado correctamente.',
                datos: resultado
            });
        } catch (error) {
            console.error('Fallo al actualizar el ticket:', error);
            return res.status(500).json({ error: 'Error interno del servidor al actualizar el ticket.' });
        }
    };

// Eliminar ticket
    async deleteTicket(req, res) {
        try {
            const { idTicket } = req.body;
            const rolActual = req.user.rol;

             if(!idTicket){
                return res.status(400).json({error: "Ticket no es valido."})
            }
           
            
            if(rolActual !== "ADMINISTRADOR"){
                return res.status(405).json({ error: "Debes ser Administrador para eliminar el ticket."})
            }

            const resultado = await Ticket.findOneAndDelete({idTicket: idTicket});

            return res.status(200).json({mensaje: 'Ticket eliminado correctamente.'});

        } catch (error) {
            console.error('Fallo al buscar el ticket por ID:', error);
            return res.status(500).json({ error: 'Error interno del servidor al buscar el ticket.' });
        }
    };
}
module.exports = new TicketController();