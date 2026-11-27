const mongoose = require('mongoose'); //Base de datos
const bcrypt = require('bcrypt'); // Encriptar contraseñas

const Usuario = require('../models/user.model');
const Ticket = require('../models/ticket.model');
const Producto = require("../models/producto.model");

const tickets = require('../data/tickets')
const productos = require("../data/productos");

//Conexion con base de datos
mongoose.connect('mongodb://localhost:27017/zapstep_db')
    .then(async() => {
        console.log('MongoDB conectado');
    
    //Comprobar que el usuario administrador existe, en caso contrario, crearlo
        const adminExist = await Usuario.findOne({
            email: "admin@zapstep.com"
        });
    
        if (!adminExist) {
        const passwordEncriptada = await bcrypt.hash(req.body.password, 6);

        await Usuario.create({
            username: "admin",
            email: "admin@zapstep.com",
            password: passwordEncriptada,
            rol: "ADMINISTRADOR"
        });

        console.log("Administrador creado");
        }

    //Comprobar que los productos existen en la base de datos, en caso contrario, cargarlos.
        const productsExist = await Producto.findOne();
        console.log(productsExist)
        if (productsExist === null) {
            await Producto.insertMany(productos);
            console.log("Productos cargados");
        } else {
            console.log("Los productos ya existen");
        }

    //Comprobar que los tickets existen en la base de datos, en caso contrario, cargarlos.
        const ticketExist = await Ticket.findOne();

        if(!ticketExist){

            if(!tickets){

                return res.status(401).json({error: "No existe ningun ticket creado."});

            }
            await Ticket.insertMany(tickets);
            console.log("Tickets cargados correctamente en la base de datos de Zapstep.");
        
        }else{
            console.log("Los tickets estan cargados en la base de datos.")
        }

    })

    .catch((error) => {
        console.error('Error de conexión:', error);
});