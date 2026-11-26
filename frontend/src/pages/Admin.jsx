import '../styles/Admin.css'
import { useEffect, useState } from "react";

export default function Admin() {

    const [consultas, setConsultas] = useState([]);
    const [pedidos, setPedidos] = useState([]);
    const [estadosTemporales, setEstadosTemporales] = useState({});

    // Cargar consultas y pedidos
    useEffect(() => {

        const consultasGuardadas =
            JSON.parse(localStorage.getItem("consultas")) || [];

        const pedidosGuardados =
            JSON.parse(localStorage.getItem("pedidos")) || [];

        setConsultas(consultasGuardadas);
        setPedidos(pedidosGuardados);

    }, []);

    // Cambiar estado de un pedido
    // Seleccionar un estado sin guardarlo todavía
const seleccionarEstado = (id, nuevoEstado) => {
    setEstadosTemporales(actuales => ({
        ...actuales,
        [id]: nuevoEstado
    }));
};

// Guardar definitivamente el estado
const cambiarEstado = (id) => {

    const nuevoEstado = estadosTemporales[id];

    if (!nuevoEstado) return;

    const pedidosActualizados = pedidos.map(pedido =>
        pedido.id === id
            ? { ...pedido, estado: nuevoEstado }
            : pedido
    );

    setPedidos(pedidosActualizados);

    localStorage.setItem(
        "pedidos",
        JSON.stringify(pedidosActualizados)
    );

    setEstadosTemporales(actuales => {
        const nuevos = { ...actuales };
        delete nuevos[id];
        return nuevos;
    });

};

    return (

        <main className="admin">

            <h1>Panel de administración</h1>

            {/* GESTIÓN DE PEDIDOS */}

            <section>

                <h2>Gestión de pedidos</h2>

                {pedidos.length === 0 ? (

                    <p>No hay pedidos registrados.</p>

                ) : (

                    pedidos.map(pedido => (

                        <div className="pedido-admin-card" key={pedido.id}>

                            <h3>Pedido #{pedido.id}</h3>

                            <div className="pedido-admin-info">

                                <p>
                                    <strong>Usuario:</strong>{" "}
                                    {pedido.usuario || "Usuario desconocido"}
                                </p>

                                <p>
                                    <strong>Fecha:</strong> {pedido.fecha}
                                </p>

                                <p>
                                    <strong>Total:</strong>{" "}
                                    {Number(pedido.total).toFixed(2)} €
                                </p>

                                <p>
                                    <strong>Estado actual:</strong>{" "}
                                    {pedido.estado}
                                </p>

                            </div>

                            <h4>Productos</h4>

                            {pedido.productos.map((producto, index) => (

                                <div
                                    className="pedido-admin-producto"
                                    key={`${pedido.id}-${producto.id}-${index}`}
                                >

                                    <img
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                        width="80"
                                    />

                                    <div>

                                        <h4>{producto.nombre}</h4>

                                        <p>Talla: {producto.talla}</p>

                                        <p>Color: {producto.color}</p>

                                        <p>
                                            Cantidad: {producto.cantidad || 1}
                                        </p>

                                        <p>Precio: {producto.precio} €</p>

                                    </div>

                                </div>

                            ))}

                            <div className="pedido-admin-estado">

                                <label>Actualizar estado:</label>

                                <select
                                    value={
                                        estadosTemporales[pedido.id] ?? pedido.estado
                                    }
                                    onChange={(e) =>
                                        seleccionarEstado(pedido.id, e.target.value)
                                    }
                                >
                                    <option value="Pendiente">Pendiente</option>
                                    <option value="Confirmado">Confirmado</option>
                                    <option value="Enviado">Enviado</option>
                                    <option value="Entregado">Entregado</option>
                                    <option value="Cancelado">Cancelado</option>
                                </select>

                                <button
                                    className="guardar-estado-btn"
                                    onClick={() => cambiarEstado(pedido.id)}
                                    disabled={
                                        !estadosTemporales[pedido.id] ||
                                        estadosTemporales[pedido.id] === pedido.estado
                                    }
                                >
                                    Guardar estado
                                </button>

                            </div>
                            

                        </div>

                    ))

                )}

            </section>


            {/* GESTIÓN DE CONSULTAS */}

            <section>

                <h2>Gestión de consultas</h2>

                {consultas.length === 0 ? (

                    <p>No hay consultas registradas.</p>

                ) : (

                    consultas.map((consulta, index) => (

                        <div className="consulta-card" key={index}>

                            <h3>Consulta #{index + 1}</h3>

                            <div className="consulta-info">

                                <p>
                                    <strong>Usuario:</strong>{" "}
                                    {consulta.usuario}
                                </p>

                                <p>
                                    <strong>Asunto:</strong>{" "}
                                    {consulta.asunto}
                                </p>

                                <p>
                                    <strong>Fecha:</strong>{" "}
                                    {consulta.fecha}
                                </p>

                            </div>

                            <div className="consulta-mensaje">

                                <h4>Mensaje</h4>

                                <p>{consulta.mensaje}</p>

                            </div>

                            <div className="consulta-estado">

                                <label>Estado:</label>

                                <select defaultValue="Pendiente">

                                    <option value="Pendiente">
                                        Pendiente
                                    </option>

                                    <option value="En proceso">
                                        En proceso
                                    </option>

                                    <option value="Resuelta">
                                        Resuelta
                                    </option>

                                </select>

                            </div>

                        </div>

                    ))

                )}

            </section>

        </main>
    );
}
