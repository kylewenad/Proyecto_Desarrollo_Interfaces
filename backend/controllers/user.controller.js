const Usuario = require("../models/user.model" ) ;
const usuarios= require("../config/bbdd/bd_users");
const jwt = require ("jsonwebtoken");

class UsuarioController{
    async signUp(req,res)  {
        const passwordEncriptado = await bcrypt.hash(req.body.password, 10);

        const usuario = new Usuario({
            username: req.body.usuario,
            email: req.body.email,
            password: passwordEncriptado,
//rol: req.body.rol
        })

        const result= await usuario.save();
        return res.status(201).send("Usuario resgistrado correctamente 😊👍");
    } 
}
module.exports = new UsuarioController();