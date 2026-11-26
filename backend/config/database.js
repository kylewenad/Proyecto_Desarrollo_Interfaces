const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Usuario = require('../models/user.model');
const Ticket = require('../models/ticket.model');
const tickets = require('../data/tickets')
//const productos = require("../data/productos");
//const Producto = require("../models/product.model");

mongoose.connect('mongodb://localhost:27017/zapstep_db')
    .then(async() => {
        console.log('MongoDB conectado');
    
        //Comprobar que el usuario administrador existe, en caso contrario, crearlo
        const adminExist = await Usuario.findOne({
            email: "admin@zapstep.com"
        });
    
        if (!adminExist) {
        const passwordEncriptada = await bcrypt.hash("admin123", 6);

        await Usuario.create({
            username: "admin",
            email: "admin@zapstep.com",
            password: passwordEncriptada,
            rol: "ADMINISTRADOR"
        });

        console.log("Administrador creado");
        }

        //Comporbar que los productos existen, en caso contrario, cargarlos en la base de datos
        /*const productsExist = await Producto.findOne();
        
        if (productsExist === 0) {
            await Producto.insertMany(productos);
            console.log("Productos cargados");
        } else {
            console.log("Los productos ya existen");
        }*/

        //Comprobar que los tickets existen, en caso contrario, cargarlos en la base de datos
        const ticketExist = await Ticket.findOne();

        if(!ticketExist){
            await Ticket.insertMany(tickets);
            console.log("Tickets cargados en la base de datos de Zapstep.")
        }else{
            console.log("Los productos estan cargados en la base de datos.")
        }
    })
    .catch((error) => {
        console.error('Error de conexión:', error);
    });