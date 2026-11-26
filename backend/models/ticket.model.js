const mongoose = require('mongoose');

//Historial de mensajes dentro del ticket
const messageSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'usuario',
            required: true
        },

        senderRole: {
            type: String,
            required: true,
            enum: ['CLIENTE', 'SOPORTE', 'ADMINISTRADOR']
        },

        text: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

//Estados del ticket y quién lo cambió
const statusHistorySchema = new mongoose.Schema(
    {
        oldStatus: {
            type: String
        },

        newStatus: {
            type: String,
            required: true
        },

        changedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'usuario',
            required: true
        }
    },
    {
        timestamps: true
    }
);
//Ticket
const ticketSchema = new mongoose.Schema(
    {
        idTicket: {
            type: Number,
            required: true,
            unique: true
        },

        cliente: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'usuario',
            required: true
        },

        empleadoAsignado: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'usuario',
            default: null
        },

        subject: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            required: true,
            enum: [
                'PEDIDOS',
                'DEVOLUCIONES',
                'PAGOS',
                'CUENTA',
                'PRODUCTOS',
                'OTROS'
            ]
        },
        priority: {
            type: String,
            enum: ['BAJA', 'MEDIA', 'ALTA'],
            default: 'MEDIA'
        },

        status: {
            type: String,
            enum: [
                'ABIERTO',
                'EN CURSO',
                'PENDIENTE',
                'RESUELTO',
                'CERRADO'
            ],
            default: 'ABIERTO'
        },

        messages: {
            type: [messageSchema],
            default: []
        },
        statusHistory: {
            type: [statusHistorySchema],
            default: []
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Ticket = mongoose.model('ticket', ticketSchema);

module.exports = Ticket;