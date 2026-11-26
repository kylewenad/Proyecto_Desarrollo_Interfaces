const express = require ('express');
const rutaUsers = require ('./routes/user.routes');
const rutaTickets = require ('./routes/tickets.routes');
const db = require('./config/database');
const app = express();

try{
    process.loadEnvFile();
} catch (_) {

}

const PORT = process.env.PORT || 3000;

app.use(express.json());

//Usuarios
app.use('/api/user', rutaUsers)

//Ticket
//app.use('/api/tickets', rutaTickets)


//Productos


app.get('/api', (req, res) => {
   res.status(200).json('¡Bienvenidos!'); 
})

app.listen(3000, () => {
    console.log("Arrancado el proyecto en el puerto 3000.");
    
})
