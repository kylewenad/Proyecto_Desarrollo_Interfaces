const Producto = require("../models/producto.model")

class ProductoController{

//Mostrar datos
    async findAll(req, res) {
    
        try {
        const resultado = await Producto.find();
        
        res.status(200).json({
            mensaje: "Productos encontrados.",
            total: resultado.length,
            resultados: resultado
        });

    } catch (error) {
        
        console.error("Fallo al buscar los datos:", error);
        return res.status(500).json({ error: "Error interno del servidor al buscar todos los productos." });
    }
}

//Mostrar productos por categoria
    async findByCategoria (req, res) {
    try{

        const filtroCategoria = req.params.categoria;
        const regex = new RegExp(filtroCategoria, 'i');
        const resultado = await Producto.find({categoria: regex});
           
        return res.status(200).json({
            mensaje: "Productos con la categoria encontradas.",
            total: resultado.length,
            resultados: resultado
        });

    } catch (error) {
        
        console.error("Fallo al buscar la categoria en los datos:", error);
        return res.status(500).json({ error: "Error interno del servidor al buscar por categoria." });
    
    }
    
}

//Mostrar productos entre un rango de precios
    async findByPrecioMinMax(req, res) {
    try{

        const precioMin = Number(req.params.min);
        const precioMax = Number(req.params.max);
        
        if (isNaN(precioMin) ||isNaN(precioMax)) {
            return res.status(400).json({ 
                error: "El precio indicado no es válido." });
        }

        const resultado = await Producto.find({ 
            precio: { $gte: precioMin, $lte: precioMax } 
        });

        return res.status(200).json({
            mensaje: "Productos con el rango de precio indicados encontrados.",
            total: resultado.length,
            resultados: resultado
        });   
                
    } catch (error) {

        console.error("Fallo interno en el servidor:", error);
        return res.status(500).json({ error: "Error interno del servidor." });
    
    }
}

//Mostrar productos por stock
    async findByStock(req, res) {  
    
    try{

        const stockSuperior = Number(req.params.cantidad);
        console.log(stockSuperior); 

        if (isNaN(stockSuperior)) {

            return res.status(400).json({ error: "El stock indicado no es un número válido." });
        
        }

        const resultado = await Producto.find({ "stock.cantidad": { $gt: stockSuperior } });
            
        return res.status(200).json({
            mensaje: "Productos encontrados con el stock superior al indicado.",
            total: resultado.length,
            resultados: resultado
        });
                  
                
    } catch (error) {

        console.error("Fallo interno en el servidor:", error);
        return res.status(500).json({ error: "Error interno del servidor." });
    
    }
}
/*
const findByTexto = async (req, res) => {
    
    try{

        const textoBusqueda = req.params.texto;
        const regex = new RegExp(textoBusqueda, 'i');
        const resultado = await Producto.find({
            $or: [
                { nombre: regex },
                { descripcion: regex },
                { categoria: regex },
                { marca: regex}
            ]
        });

        return res.status(200).json({
            mensaje: "Productos que contienen el texto buscado encontrados.",
            total: resultado.length,
            resultados: resultado
        
        });
    
    } catch (error) {
        
        console.error("Fallo interno en el servidor:", error);
        return res.status(500).json({ error: "Error interno del servidor." });

    }
}

const ordenarPorPrecio = async (req, res) => {
    
    try{
        // .sort({ precio: 1 }) -> Orden ascendente (de más barato a más caro)
        // .sort({ precio: -1 }) -> Orden descendente (de más caro a más barato)
        const resultado = await Producto.find().sort({precio: 1})
        return res.status(200).json({
            mensaje: "Productos ordenados por precio ascendente.",
            resultados: resultado
        });
    
    } catch (error) {
    
        console.error("Fallo interno en el servidor:", error);
        return res.status(500).json({ error: "Error interno del servidor." });    
    
    }
}

;*/
}

module.exports = new ProductoController();