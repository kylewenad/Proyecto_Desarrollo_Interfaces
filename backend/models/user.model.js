const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username:{
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
            required: true,
            trim: true,
            enum: ["CLIENTE", "SOPORTE", "ADMINISTRADOR"]
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = mongoose.model("usuario", userSchema);

module.exports = User;