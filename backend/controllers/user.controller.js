const Usuario = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

class UsuarioController{
    async signUp(req,res)  {
        const passwordEncriptado = await bcrypt.hash(req.body.password,10);

        const usuario = new Usuario({
            username: req.body.username,
            password: passwordEncriptado,
            rol: req.body.rol
        })

        const result= await usuario.save();
        return res.status(201).send("Usuario resgistrado correctamente 😊👍");
    }
}

module.exports= new UsuarioController();