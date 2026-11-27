const mongoose = require('mongoose');
const { castObject } = require('./user.model');

const pedidoSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    productos: [
        {
            producto: {
                type: Number,
                ref: 'producto',
                required: true
            },
            talla: {
                type: Number,
                required: true
            },
            cantidad: {
                type: Number,
                required: true,
                min: 1
            },
            precioUnitario: {
                type: Number,
                required: true,
                min: 0
            }
        }
    ],
    total: {
        type: Number,
        required: true,
        min: 0
    },
    estado: {
        type: String,
        enum: ['PENDIENTE', 'PAGADO', 'ENVIADO', 'CANCELADO'],
        default: 'PENDIENTE'
    }
}, { timestamps: true });

module.exports = mongoose.model('Pedido', pedidoSchema);