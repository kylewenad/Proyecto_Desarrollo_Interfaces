const mongoose = require('mongoose');

//Para que haya mensajes entre cliente y empleados o administrador
const messageSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        senderRole: {
            type: String,
            required: true,
            enum: ["CLIENTE", "SOPORTE", "ADMINISTRADOR"]
        },
        text: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
        _id: true
    }
);


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
       // category: {
            //Añadir categorias posibles?
       // },
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