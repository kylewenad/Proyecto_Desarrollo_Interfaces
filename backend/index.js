//FALTA AÑADIR PEDIDOS Y TODO LO QUE SUPONE

const express = require ('express');
const rutaUsers = require ('./routes/user.routes');
const rutaTickets = require ('./routes/tickets.routes');
const rutaProductos = require ('./routes/productos.routes');
const db = require('./config/database');
const app = express();

try{
    process.loadEnvFile();
} catch (_) {

}

const PORT = process.env.PORT || 3000;

app.use(express.json());

//Usuarios, Ticket, Productos
app.use('/api/user', rutaUsers);
app.use('/api/tickets', rutaTickets);
app.use('/api/productos', rutaProductos);



app.get('/api', (req, res) => {
   res.status(200).json('¡Bienvenidos!'); 
})

app.listen(3000, () => {
    console.log("Arrancado el proyecto en el puerto 3000.");
    
})
