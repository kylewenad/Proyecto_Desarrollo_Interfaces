import '../styles/Admin.css'
import { useEffect, useState } from "react";

export default function Admin() {
    //creamos los estados 
    const [consultas, setConsultas] = useState([]);//sirve para guardar los mensajes de los usarios
    const [pedidos, setPedidos] = useState([]);//sirve para guardar los pedidos realizados 
    const [estadosTemporales, setEstadosTemporales] = useState({});//Sirve para guardar temporalmente los nuevos estados que el administrador selecciona para los pedidos, antes de pulsar el botón de guardar.

    // Cargar consultas y pedidos
    useEffect(() => {

        const consultasGuardadas =
            JSON.parse(localStorage.getItem("consultas")) || [];// busca elemento con clave consultas, convertido en texto JSON || si no encontramos nada array vacio

        const pedidosGuardados =
            JSON.parse(localStorage.getItem("pedidos")) || [];

        setConsultas(consultasGuardadas);//guarda los datos en estados
        setPedidos(pedidosGuardados);

    }, []);// se ejecuta cuando el componente se monta

    // Cambiar estado de un pedido
    // Seleccionar un estado sin guardarlo todavía
const seleccionarEstado = (id, nuevoEstado) => {
    setEstadosTemporales(actuales => ({ //función flecha , representa estado actual
        ...actuales, //... operador spread , copia todo lo que tenemos guardado
        [id]: nuevoEstado //guardamos el estado selecionado usando el id del pedido como clave
    }));
};

// Guardar definitivamente el estado
const cambiarEstado = (id) => { //identifica el pedido que queremos guardar

    const nuevoEstado = estadosTemporales[id]; //buscamos el estado temporal

    if (!nuevoEstado) return; // comprobamos si existe nuevo estado

    const pedidosActualizados = pedidos.map(pedido => //map - recorre un array y crea uno nuevo con los resultados
        pedido.id === id // comprueba que el id del pedido coincide con el que queremos actualizar
            ? { ...pedido, estado: nuevoEstado } //operador ternario: si el id coincide copiamos todos los datos del pedido y cambiamos el estado
            : pedido // si el id no coincide el pedido se queda igual
    );

    setPedidos(pedidosActualizados); // actualizamos el estado de pedidos con el nuevo array

    localStorage.setItem( //guardamos los cambios en localstorage
        "pedidos",
        JSON.stringify(pedidosActualizados)
    );

    setEstadosTemporales(actuales => { //limpiar el estado temporal
        const nuevos = { ...actuales }; // creamos copia del obj actuaal
        delete nuevos[id]; //elimnamos estado temporal
        return nuevos; // decolvemos obj actualizado
    });

};

    return (

        <main className="admin">

            <h1>Panel de administración</h1>

            <section>

                <h2>Gestión de pedidos</h2>

                {pedidos.length === 0 ? (

                    <p>No hay pedidos registrados.</p> //si el array esta vacio

                ) : (

                    pedidos.map(pedido => ( // si hay pedidos recorremos el array y mostramos cada uno

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

                            {pedido.productos.map((producto, index) => ( // recorremos lo que hay dentro de cada pedido

                                <div
                                    className="pedido-admin-producto"
                                    key={`${pedido.id}-${producto.id}-${index}`} // clave el pedido + el producto + la pos del producto
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

                                <select //crea menu desplegable
                                    value={ //busca si hay estado temporal , sino muestra el estado actual
                                        estadosTemporales[pedido.id] ?? pedido.estado
                                    }
                                    onChange={(e) => //evento que se ejecuata cuando se cambia de opcion
                                        seleccionarEstado(pedido.id, e.target.value) 
                                    }
                                >
                                    <option value="Pendiente">Pendiente</option> 
                                    <option value="Confirmado">Confirmado</option>
                                    <option value="Enviado">Enviado</option>
                                    <option value="Entregado">Entregado</option>
                                    <option value="Cancelado">Cancelado</option>
                                </select>

                                <button //para guaradar un estado temporal 
                                    className="guardar-estado-btn"
                                    onClick={() => cambiarEstado(pedido.id)}
                                    disabled={ // desactiva el btn cuando no es necesario guaradar
                                        !estadosTemporales[pedido.id] || //no hay estado temporal o
                                        estadosTemporales[pedido.id] === pedido.estado // estado temporal = estado actual
                                    }
                                >
                                    Guardar estado
                                </button>

                            </div>
                            

                        </div>

                    ))

                )}

            </section>

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
