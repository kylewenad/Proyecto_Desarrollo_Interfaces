const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password:{
            type: String,
            required: true,
            select: false
        },
        rol: {
            type: String,
            trim: true,
            enum: ["CLIENTE", "EMPLEADO", "ADMINISTRADOR"],
            default: "CLIENTE"
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Usuario = mongoose.model("usuario", userSchema);

module.exports = Usuario;