const mongoose = require('mongoose');
const Contador = require('../models/contador.model');
const Pedido = require('../models/pedido.model');
const Product = require('../models/producto.model');

const ESTADOS_VALIDOS = ['PENDIENTE', 'PAGADO', 'ENVIADO', 'CANCELADO'];

async function obtenerSiguienteId(nombreSecuencia) {
    const contador = await Contador.findOneAndUpdate(
        { _id: nombreSecuencia },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );
    return contador.seq;
}

async function revertirDescuentos(descuentos) {
    for (const d of descuentos) {
        await Product.updateOne(
            { _id: d.productoId, 'stock.talla': d.talla },
            { $inc: { 'stock.$.cantidad': d.cantidad } }
        ).catch(() => {});
    }
}

class PedidoController {
    async crearPedido(req, res) {
        const descuentos = [];

        try {
            const usuarioId = req.user?.id || req.user?._id || req.body?.usuario;
            if (!usuarioId || !mongoose.Types.ObjectId.isValid(usuarioId)) {
                return res.status(400).json({ error: 'Usuario no válido o faltante.' });
            }

            const lista = Array.isArray(req.body?.productos) ? req.body.productos : [req.body];
            if (lista.length === 0) {
                return res.status(400).json({ error: 'Debes enviar al menos un producto.' });
            }

            const productosPedido = [];
            let total = 0;

            for (const item of lista) {
                const productoId = Number(item?.producto ?? item?.productoId);
                const talla = Number(item?.talla);
                const cantidad = Number(item?.cantidad ?? 1);

                if (
                    !Number.isFinite(productoId) || productoId <= 0 ||
                    !Number.isFinite(talla) || talla <= 0 ||
                    !Number.isFinite(cantidad) || cantidad <= 0
                ) {
                    await revertirDescuentos(descuentos);
                    return res.status(400).json({ error: 'Datos de producto, talla o cantidad no válidos.' });
                }

                const productoActualizado = await Product.findOneAndUpdate(
                    {
                        _id: productoId,
                        stock: {
                            $elemMatch: {
                                talla: talla,
                                cantidad: { $gte: cantidad }
                            }
                        }
                    },
                    {
                        $inc: { 'stock.$.cantidad': -cantidad }
                    },
                    { new: true }
                );

                if (!productoActualizado) {
                    await revertirDescuentos(descuentos);
                    return res.status(409).json({
                        error: `Stock insuficiente o talla ${talla} no disponible para el producto ${productoId}.`
                    });
                }

                descuentos.push({ productoId, talla, cantidad });

                const precioUnitario = Number(productoActualizado.precio);
                if (!Number.isFinite(precioUnitario) || precioUnitario < 0) {
                    await revertirDescuentos(descuentos);
                    return res.status(400).json({ error: `Precio no válido en el producto ${productoId}.` });
                }

                total += precioUnitario * cantidad;

                productosPedido.push({
                    producto: productoActualizado._id,
                    talla,
                    cantidad,
                    precioUnitario
                });
            }

            const nuevoId = await obtenerSiguienteId('pedido');

            const pedidoCreado = await Pedido.create({
                _id: nuevoId,
                usuario: usuarioId,
                productos: productosPedido,
                total,
                estado: 'PENDIENTE'
            });

            return res.status(201).json({
                mensaje: 'Pedido creado correctamente.',
                datos: pedidoCreado
            });
        } catch (error) {
            await revertirDescuentos(descuentos);
            console.error('Error al crear pedido:', error);
            return res.status(500).json({ error: 'Error interno al crear el pedido.' });
        }
    }

    async obtenerPedidos(req, res) {
        try {
            const filtro = {};
            const usuarioId = req.user?.id || req.user?._id;

            if (req.user && req.user.rol !== 'admin' && usuarioId) {
                filtro.usuario = usuarioId;
            } else if (req.query?.usuario && mongoose.Types.ObjectId.isValid(req.query.usuario)) {
                filtro.usuario = req.query.usuario;
            }

            if (req.query?.estado && ESTADOS_VALIDOS.includes(req.query.estado)) {
                filtro.estado = req.query.estado;
            }

            const pedidos = await Pedido.find(filtro)
                .populate('usuario')
                .populate('productos.producto')
                .sort({ _id: -1 });

            return res.status(200).json({ datos: pedidos });
        } catch (error) {
            console.error('Error al obtener pedidos:', error);
            return res.status(500).json({ error: 'Error interno al obtener los pedidos.' });
        }
    }

    async obtenerPedidoPorId(req, res) {
        try {
            const id = Number(req.params.id);
            if (!Number.isFinite(id) || id <= 0) {
                return res.status(400).json({ error: 'ID de pedido no válido.' });
            }

            const pedido = await Pedido.findById(id)
                .populate('usuario')
                .populate('productos.producto');

            if (!pedido) {
                return res.status(404).json({ error: 'Pedido no encontrado.' });
            }

            return res.status(200).json({ datos: pedido });
        } catch (error) {
            console.error('Error al obtener pedido por ID:', error);
            return res.status(500).json({ error: 'Error interno al obtener el pedido.' });
        }
    }

    async actualizarEstadoPedido(req, res) {
        try {
            const id = Number(req.params.id);
            if (!Number.isFinite(id) || id <= 0) {
                return res.status(400).json({ error: 'ID de pedido no válido.' });
            }

            const nuevoEstado = req.body?.estado;
            if (!nuevoEstado || !ESTADOS_VALIDOS.includes(nuevoEstado)) {
                return res.status(400).json({
                    error: `Estado no válido. Valores permitidos: ${ESTADOS_VALIDOS.join(', ')}.`
                });
            }

            const pedido = await Pedido.findById(id);
            if (!pedido) {
                return res.status(404).json({ error: 'Pedido no encontrado.' });
            }

            if (pedido.estado === nuevoEstado) {
                return res.status(409).json({ error: `El pedido ya está en estado ${nuevoEstado}.` });
            }

            if (nuevoEstado === 'CANCELADO' && pedido.estado !== 'CANCELADO') {
                for (const item of pedido.productos || []) {
                    await Product.updateOne(
                        { _id: item.producto, 'stock.talla': item.talla },
                        { $inc: { 'stock.$.cantidad': item.cantidad } }
                    );
                }
            }

            pedido.estado = nuevoEstado;
            await pedido.save();

            return res.status(200).json({
                mensaje: 'Estado del pedido actualizado correctamente.',
                datos: pedido
            });
        } catch (error) {
            console.error('Error al actualizar estado del pedido:', error);
            return res.status(500).json({ error: 'Error interno al actualizar el pedido.' });
        }
    }

    async eliminarPedido(req, res) {
    try {
        const id = Number(req.params.id);
        if (!Number.isFinite(id) || id <= 0) {
            return res.status(400).json({ error: 'ID de pedido no válido.' });
        }

        const pedido = await Pedido.findById(id);
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido no encontrado.' });
        }

       // if (pedido.estado !== 'CANCELADO') {
         //   for (const item of pedido.productos || []) {
           //     await Product.updateOne(
             //       { _id: item.producto, 'stock.talla': item.talla },
            //        { $inc: { 'stock.$.cantidad': item.cantidad } }
            //    );
         //   }
      //  }

        await Pedido.findByIdAndDelete(id);

        return res.status(200).json({
            mensaje: 'Pedido eliminado correctamente.'
        });
    } catch (error) {
        console.error('Error al eliminar pedido:', error);
        return res.status(500).json({ error: 'Error interno al eliminar el pedido.' });
    }
}
}

module.exports = new PedidoController();