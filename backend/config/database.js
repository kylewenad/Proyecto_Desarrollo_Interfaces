const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Usuario = require('../models/user.model')

mongoose.connect('mongodb://localhost:27017/zapstep_db')
    .then(async() => {
        console.log('MongoDB conectado');
    
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
    })
    .catch((error) => {
        console.error('Error de conexión:', error);
    });
    
    

    
    