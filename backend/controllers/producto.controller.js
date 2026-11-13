const Producto = require("../models/producto.model")
const productos= require("../config/bbdd/productos")
const jwt = require("jsonwebtoken")

const insertAll = async (req,res) => {
    await Producto.insertMany(productos);
    return res.status(201).send("Todos los productos insertados correctamente");
}
const showAll = async (req,res) => {
    const result = await Producto.find();
    return res.status(202).send(result);
    
}

const findByTipo = async (req,res) => {
    const result = await Producto.find({tipo:req.params.tipo});
    return res.status(202).send(result);
}

const findProducto = async (req,res) => {
    const result= await Producto.find({
        nombre:{
            $regex: req.params.texto ,//busca coincidencias de texto
            $options: "i" //ignore case
        }
    });

    return res.status(200).send(result);
}

//buscar x talla ????

module.exports = {
    insertAll,
    showAll,
    findByTipo,
    findProducto
}