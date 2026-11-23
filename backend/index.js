const express = require ('express');
const rutaUsers = require ('./routes/user.routes');
const db = require('./config/database');
const app = express();

app.get('/api', (req, res) => {
   res.status(200).json('¡Bienvenidos!'); 
})

app.listen(3000, () => {
    console.log("Arrancado el proyecto en el puerto 3000.");
    
})
//Middlewares
app.use(express.json());
app.use('api/user', rutaUsers)