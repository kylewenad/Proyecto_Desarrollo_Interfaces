const Producto = require("../models/producto.model")
const productos= require("../config/bbdd/productos")
const jwt = require("jsonwebtoken")

const insertAll = async (req,res) => {
    await Producto.insertMany(productos);
    return res.status(201).send("Todos los productos insertados correctamente");
}

module.exports = {
    insertAll
}