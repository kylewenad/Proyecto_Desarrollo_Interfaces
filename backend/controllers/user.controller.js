const Usuario = require("../models/user.model" ) ;
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcrypt");

class UsuarioController{
    async signUp(req,res)  {
        
        try{
            console.log(req.body);
            const passwordEncriptado = await bcrypt.hash(req.body.password, 10);

            const usuario = new Usuario({
                username: req.body.username,
                email: req.body.email,
                password: passwordEncriptado,
                rol: req.body.rol
            })   
                
                const result = await usuario.save();
                console.log("Usuario creado:", result);
                
                return res.status(201).send("Usuario resgistrado correctamente 😊👍");
    
        } catch (error) {

            console.error("Fallo al crear usuario.", error);
            return res.status(500).json({ error: "Error interno del servidor al insertar." });
        }      
            
    }


    async login(req,res){

        try{
            const result = await Usuario.findOne({email: req.body.email}).select("+password");
            const isCorrectPassword = restult ? await bcrypt.compare(req.body.password, result.password)
        }catch{

        }
    }
}


module.exports = new UsuarioController();