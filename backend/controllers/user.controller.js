const Usuario = require("../models/user.model");
const mongoose = require('mongoose');
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcrypt");

const ROLES = ["CLIENTE", "EMPLEADO", "ADMINISTRADOR"];

class UsuarioController{
    
    //Crear usuario
    async signUp(req,res)  {
        
        try{
            //Campos necesarios para la creación de usuario
            const { username, email, password} = req.body;
            
            //Si alguno de los campos necesarios están vacíos, lanza un error.
            if(!username || !email || !password) {
                return res.status(400).json({error: "Usuario, email y contraseña obligatorias."})
            }

            const passwordEncriptado = await bcrypt.hash(req.body.password, 10);

            const usuario = new Usuario({
                username: username.trim(), //trim para quitar espacios innecesarios
                email: email.trim().toLowerCase(),  //toLowerCase para poner todo en minusculas
                password: passwordEncriptado,
                rol: "CLIENTE",
            })   
                
                const usuarioCreado = await usuario.save();
                
                console.log("Usuario registrado corerctamente:", usuarioCreado);
                
                //Todo correcto.
                return res.status(201).json({mensaje: "Usuario resgistrado correctamente 😊👍",
                    usuario: {
                        id: usuarioCreado._id,
                        username: usuarioCreado.username,
                        email: usuarioCreado.email,
                        rol: usuarioCreado.rol
                    }
                });
    
        } catch (error) {
            if (error.code === 11000){ //error que detecta mongoose al registrar
                return res.status(409).json({mensaje: "El usuario o el email ya están registrados."})
            }

            if (error.name === 'ValidationError') { //error que detecta mongoose al resgistrar
                return res.status(400).json({message: "Datos de usuario no válidos."});
            }
            console.error("Fallo al crear usuario.", error);
            return res.status(500).json({ error: "Error interno del servidor al insertar." });
        }      
            
    }

    //Inicio sesión
    async login(req,res){

        try {
            //Campos necesarios para el inicio de sesión
            const {email, password} = req.body;

            if(!email || !password) {
                return res(400).json({error: "Email y contraseña necesarios."})
            }

            const result = await Usuario.findOne({email: email.trim().toLowerCase()}).select("+password"); // "+" Para forzar que incluya la contraseña
            
            //Comprobación de la contraseña introducida con la contraseña de la base de datos
            const isCorrectPassword = result ? await bcrypt.compare(password, result.password) : false;

            //Si el email o la contraseña no equivalen a algun usuario de la base de datos lanza un error.
            if(!result || !isCorrectPassword){
                return res.status(401).json({error: "Credenciales incorrectas"});
            }

            //Token temporal para poder navegar por la web en ruta privada
            const token = jwt.sign({
                username: result.username,
                email: result.email,
                rol: result.rol
            },
                process.env.JWT_SECRET,
            { 
                expiresIn: "1h"
            })

            return res.status(200).json({
                mensaje: "Inicio de sesión correcto",
                token,
                usuario: {
                    id: result._id,
                    username: result.username,
                    email: result.email,
                    rol: result.rol,
                },
            });

        } catch(error){
            console.error("Error al iniciar sesión", error);
            return res.status(500).json({error: "Error al iniciar sesión."});
        } 

    }
        
            
     //Obtener Datos de usuario    
    async getProfile(req, res){

        try{ 
            const result = await Usuario.findOne({email: req.body.email}).select("-password"); //Singo "-" en password para que excluya ese campo
                if (!result){
                    return res.status(404).json({error: "Usuario no encontrado"});
                }
            return res.status(200).json({mensaje: "Usuario encontrado.",
                    usuario: {
                    id: result._id,
                    username: result.username,
                    email: result.email,
                    rol: result.rol,
                }
            });

        }catch (error){
            console.error("Error al obtener el perfil:", error);
            return res.status(500).json({error: "Error al obtener el perfil"});
        }
    }
    

    //Eliminar usuario
     async deleteUser(req, res){

        try {
            //Verificar que eres administrador para poder eliminar al usuario.
            if(req.user.rol !== "ADMINISTRADOR"){
                return res.status(403).json({error: "No tienes permisos de administrador."})
            }

            //El campo nombre de usuario es obligatorio
            const {username} = req.body;
            if(!username){
                return res.status(400).json({error: "El nombre de usuario es obligatorio."})
            }
            
            //Buscar al usuario que se quiere eliminar
            const eliminado = await Usuario.findOneAndDelete({ username: username.trim() });
            
            // Evitar que el administrador autenticado se elimine a sí mismo
            if (req.user.username && req.user.username === username.trim()) {
                return res.status(400).json({
                error: "No puedes eliminar tu propio usuario.",
                });
            }

            //Si no se encuentra el usuario al que se quiere eliminar, lanza un error.
            if (!eliminado) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            return res.status(200).json({mensaje: "Usuario eliminado."});
        
        } catch (error) {
            
            console.error("Error al eliminar usuario:", error);
            return res.status(500).json({error: "Error al eliminar usuario."});
        }
        
    }

    //Cambiar rol usuario
    async cambiarRolUsuario(req, res){

        try{            
            //Campos necesarios del usuario que se quiere cambiar
            const { id } = req.params;
            const { rol } = req.body; 
            
            //Comprobar que el id existe
            if(!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({error: "ID de usuario no válido."});
            }

            //Comprobar que el rol sea válido
            if(!rol || !ROLES.includes(rol)){
                return res.status(400).json({error: "Rol no válido."});
            }
            
            //Si el administrador quiere cambiar de rol, no puede.
            if(!req.user.id === id && rol !== "ADMINISTRADOR"){
                return res.status(400).json({error: "No puedes cambiar tu rol de administrador."})
            }

            //Busca el usuario que se quiere eliminar
            const usuarioActualizado = await Usuario.findByIdAndUpdate(id, {rol}, {new: true, runValidators: true});

            //Si el usuario no se encuentra, lanza un error
            if(!usuarioActualizado){
                return res.status(400).json({error: "Usuario no encontrado."})
            }

            //Si todo bien, realiza el cambio de rol
            return res.status(200).json({
                mensaje: "Rol de usuario cambiado correctamente",
                user: {
                    id: usuarioActualizado._id,
                    username: usuarioActualizado.username,
                    email: usuarioActualizado.email,
                    rol: usuarioActualizado.rol
                }
            })


        } catch (error) {
            console.error("Error al cambiar el rol", error);
            return res.status(500).json({error: "Error interno al actualizar el rol."});
        }
    }

}


module.exports = new UsuarioController();