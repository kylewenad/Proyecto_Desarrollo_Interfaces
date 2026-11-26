import { useEffect, useState } from "react";
import "../styles/pedidos.css";

export default function Pedidos() {

  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {

    const usuario = JSON.parse(
      localStorage.getItem("usuario")
    );

    const todosLosPedidos =
      JSON.parse(localStorage.getItem("pedidos")) || [];

    const misPedidos = todosLosPedidos.filter(
      pedido =>
        pedido.usuario === (usuario?.email || usuario?.nombre)
    );

    setPedidos(misPedidos);

  }, []);

  return (
    <div className="pedidos-container">

      <h1>Mis pedidos</h1>

      {pedidos.length === 0 ? (

        <p>No tienes pedidos realizados.</p>

      ) : (

        pedidos.map(pedido => (

          <div className="pedido-card" key={pedido.id}>

            <h3>Pedido #{pedido.id}</h3>

            <p>Fecha: {pedido.fecha}</p>

            <p>
              Estado: <strong>{pedido.estado}</strong>
            </p>

            {pedido.productos.map((producto, index) => (

              <div key={index}>

                <h4>{producto.nombre}</h4>

                <p>Talla: {producto.talla}</p>

                <p>Color: {producto.color}</p>

                <p>Cantidad: {producto.cantidad || 1}</p>

              </div>

            ))}

            <h3>
              Total: {Number(pedido.total).toFixed(2)} €
            </h3>

          </div>

        ))

      )}

    </div>
  );
}