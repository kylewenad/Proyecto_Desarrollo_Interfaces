const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema(
    {
        idTicket:{
            type: Number,
            required: true,
            unique: true,
            trim: true
        },
        subject: {
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        category: {
            //Añadir categorias posibles?
        },
        priority: {
            type: String,
            required: true,
            enum: ["BAJA", "MEDIA", "ALTA"]
        },
        status:{
            type: String,
            required: true,
            enum: ["ABIERTO", "EN CURSO", "PENDIENTE", "RESUELTO", "CERRADO"],
            default: "ABIERTO"
        },
        relations: {
            type: String,
            required: true,
            trim: true,
            enum: ["CLIENTE", "SOPORTE", "ADMINISTRADOR"],
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Ticket = mongoose.model("ticket", ticketSchema);

module.exports = Ticket;