const Usuario = require("../models/user.model" ) ;
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcrypt");

class UsuarioController{
    
    //Crear usuario
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

    //Inicio sesión
    async login(req,res){

        const result = await Usuario.findOne({email: req.body.email}).select("+password");
        const isCorrectPassword = result ? await bcrypt.compare(req.body.password, result.password) : false;
            
        if(!result || !isCorrectPassword){
            return res.status(404).send("Credenciales incorrectas.")
        }
            
        const token = jwt.sign({
            username: result.username,
            email: result.email,
            rol: result.rol
        },
        // LO QUE NO SE DEBE HACER:
        "micontraseñasecreta, esperoquenadiemelolea",
       {
            expiresIn: "1h" //si no escribes nada, es para siempre
        }
        // (debería estar en las variables de entorno)
    ) 
        console.log(token);
        return res.status(200).json(
            {mensaje: "Inicio de sesión correcto.","token": token});
       
    }

    //Eliminar usuario
     async deleteUser(req, res){

        const result = await Usuario.find();

        const authHeader = req.headers.authorization;
    
        console.log(authHeader);
    
        const token = authHeader.split(" ")[1]
    
         console.log(token);

        const datos = jwt.verify(token,"micontraseñasecreta, esperoquenadiemelolea");
    
        console.log(datos);

        if (datos.rol === "ADMIN"){
            Usuario.delete({username: req.body.username});
            return res.status(200).json("Usuario eliminado")
        }
        return res.status(400).json("NO ESTA BIEN HECHOOOOOOOOOO")

    }

}


module.exports = new UsuarioController();