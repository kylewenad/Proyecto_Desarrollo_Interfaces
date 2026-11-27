const Product = require("../models/producto.model")

async function obtenerSiguienteId(nombreSecuencia){
            const contador = await Contador.findOneAndUpdate(
                { _id: nombreSecuencia },
                { $inc: { seq: 1 } },
                { new: true, upsert: true }
            );
            return contador.seq;
        }



class ProductoController{

    
//Añadir productos
    async addProduct(req, res) {
        
        try{

            const { nombre, categoria, precio, talla, cantidad} = req.body;

            if(!nombre || !categoria || !precio || !talla || !cantidad){
                return res.status(400).json({
                    error: 'Nombre, categoría, precio, talla y cantidad son obligatorios.'
                });
            }

            const rolActual = req.user.rol;
            
            if (rolActual !== "ADMINISTRADOR"){
                return res.status(401).json({error: "Debes tener permisos de administrador para agregar un producto a la base de datos."})
            }

            const idProducto = await obtenerSiguienteId('producto');
            
            const nuevoProducto = new Product({
                _id: idProducto,
                nombre: nombre.trim(),
                categoria: categoria.trim().toUpperCase(),
                precio: precio,
                stock: [{
                    talla: talla,
                    cantidad: cantidad
                }    
                ]}
            )

            const productoGuardado = await nuevoProducto.save();

            return res.status(201).json({
                mensaje: 'Producto creado correctamente.',
                datos: productoGuardado
            });

        }catch (error){

            console.error('Fallo al crear el producto:', error);
            return res.status(500).json({ error: 'Error interno del servidor al crear el producto.' });

        }
    }

//Mostrar datos
    async findAll(req, res) {
    
        try {
        const resultado = await Product.find();
        
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
        const resultado = await Product.find({categoria: regex});
           
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

        const resultado = await Product.find({ 
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

        const resultado = await Product.find({ "stock.cantidad": { $gt: stockSuperior } });
            
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

//Buscar productos por texto
    async findByTexto(req, res) {
    
    try{

        const textoBusqueda = req.params.texto;
        const regex = new RegExp(textoBusqueda, 'i');
        const resultado = await Product.find({
            $or: [
                { nombre: regex },
                { descripcion: regex },
                { categoria: regex }
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

//Ordenar productos por precio
    async ordenarPorPrecio(req, res) {
    
    try{
        // .sort({ precio: 1 }) -> Orden ascendente (de más barato a más caro)
        // .sort({ precio: -1 }) -> Orden descendente (de más caro a más barato)
        const resultado = await Product.find().sort({precio: 1})
        return res.status(200).json({
            mensaje: "Productos ordenados por precio ascendente.",
            resultados: resultado
        });
    
    } catch (error) {
    
        console.error("Fallo interno en el servidor:", error);
        return res.status(500).json({ error: "Error interno del servidor." });    
    
    }
}

//Modificar producto
    async updateProduct(req, res) {
        try{

            //Campo Id de producto necesario para cambiar datos del producto
            const id = req.body;
            
            if(!id){
                return res.status(400).json({
                    error: 'Id del producto es obligatorios.'
                });
            }

            //Comprobar que el usuario que quiere modificar producto es administrador
            const rolActual = req.user.rol;
            
            if (rolActual !== "ADMINISTRADOR"){
                return res.status(401).json({error: "Debes tener permisos de administrador para modificar un producto a la base de datos."})
            }
            
            //Busca el producto(OBJETO) que se quiere actualizar por el id
            const productoActualizar = await Product.findOne({ _id: id});
            
            //Si el producto no se encuentra, lanza un error
            if(!productoActualizar){
                return res.status(400).json({error: "Producto no encontrado."})
            }

            const {nombre, categoria, precio, talla, cantidad} = req.body;
            console.log(categoria)

            if(nombre !== undefined) {
                productoActualizar.set("nombre", nombre);
            }
            
            if(categoria !== undefined) {
                productoActualizar.set("categoria", categoria);
            }

            if(precio !== undefined) {
                productoActualizar.set("precio", precio);
            }
            
            // Si se envía cantidad (y opcionalmente talla), actualizamos ese elemento de stock
            if (cantidad !== undefined) {
                const nuevaCantidad = Number(cantidad);
                if (!Number.isFinite(nuevaCantidad) || nuevaCantidad < 0) {
                    return res.status(400).json({
                        error: 'La cantidad debe ser un número mayor o igual que 0.'
                    });
                }
            }

            if (talla !== undefined) {
                const tallaNum = Number(talla);
                const itemStock = productoActualizar.stock.find((s) => s.talla === tallaNum);

                if (!itemStock) {
                    return res.status(404).json({
                        error: 'Esa talla no existe en el producto.'
                    });
                }

                    itemStock.cantidad = nuevaCantidad;
            
                } else if (productoActualizar.stock.length === 1) {
        // Si el producto solo tiene una talla y no mandan talla, se actualiza esa
                    productoActualizar.stock[0].cantidad = nuevaCantidad;
                } else {
                    return res.status(400).json({
                        error: 'Debes indicar la talla porque el producto tiene varias.'
                    });
                }
                //Si todo bien, realiza cambios en el producto                
                const productoActualizado = await productoActualizar.save();
                console.log(productoActualizado);
                
                return res.status(200).json({
                mensaje: "Producto cambiado correctamente",
                productoActualizado
            })
        }catch (error){

            console.error('Fallo al modificar el producto:', error);
            return res.status(500).json({ error: 'Error interno del servidor al modificar el producto.' });
        }
    }


    async deleteProduct(req, res) {
        try {
            const  id  = req.body;
            const rolActual = req.user.rol;

             if(!id){
                return res.status(400).json({error: "Producto no es valido."})
            }
           
            
            if(rolActual !== "ADMINISTRADOR"){
                return res.status(405).json({ error: "Debes ser Administrador para eliminar el producto."})
            }

            const resultado = await Product.findOne({_id: id});
            
            const eliminar = resultado.id;
            await Product.findByIdAndDelete(eliminar);

            return res.status(200).json({mensaje: 'Producto eliminado correctamente.'});

        } catch (error) {
            console.error('Fallo al buscar el producto por ID:', error);
            return res.status(500).json({ error: 'Error interno del servidor al buscar el producto.' });
        }
    };
}
module.exports = new ProductoController();