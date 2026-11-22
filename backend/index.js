const express = require ('express');
const rutaUsers = require ('./routes/user.routes');
const app = express();

app.get('/', (req, res) => {
   res.status(200).json('¡Bienvenidos!'); 
})

app.listen(3000, () => {
    console.log("Arrancado el proyecto en el puerto 3000.");
    mongoose.connect('mongodb://127.0.0.1:27017/bbdd/users')
    .then(() => console.log("BBDD Funcionando"))
    .catch(() => console.log("La base de datos no funciona."))
})

//Middlewares
app.use(express.json());
app.use('api/user', rutaUsers)