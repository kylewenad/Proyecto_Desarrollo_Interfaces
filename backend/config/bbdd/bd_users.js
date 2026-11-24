const mongoose = require("mongoose");
const Usuario = require("../models/user.model");

try {
  process.loadEnvFile();
} catch (_) {}

async function promoverAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const email = "correo-del-usuario@ejemplo.com";

    const actualizado = await Usuario.findOneAndUpdate(
      { email: email.trim().toLowerCase() },
      { rol: "ADMINISTRADOR" },
      { new: true }
    );

    console.log(actualizado ? `Promovido a ADMINISTRADOR: ${actualizado.username}` : "Usuario no encontrado");
  } finally {
    await mongoose.disconnect();
  }
}

promoverAdmin();