const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/zapatos')
    .then(() => {
        console.log('MongoDB conectado');
    })
    .catch((error) => {
        console.error('Error de conexión:', error);
    });