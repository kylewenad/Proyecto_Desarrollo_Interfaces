import { useEffect, useState } from "react";
import "../styles/pedidos.css";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const pedidosGuardados =
      JSON.parse(localStorage.getItem("pedidos")) || [];

    setPedidos(pedidosGuardados);
  }, []);

  return (
    <div className="pedidos-container">
      <h1>Mis pedidos</h1>

      {pedidos.length === 0 ? (
        <p>No tienes pedidos realizados.</p>
      ) : (
        pedidos.map((pedido) => (
          <div className="pedido-card" key={pedido.id}>
            <div className="pedido-header">
              <div>
                <h3>Pedido #{pedido.id}</h3>
                <p>Fecha: {pedido.fecha}</p>
              </div>

              <span
                className={`estado ${pedido.estado
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {pedido.estado}
              </span>
            </div>

            {pedido.productos.map((producto) => (
              <div
                className="pedido-producto"
                key={`${pedido.id}-${producto.id}`}
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                />

                <div className="pedido-info">
                  <h4>{producto.nombre}</h4>

                  <p>Talla: {producto.talla}</p>
                  <p>Color: {producto.color}</p>
                  <p>Cantidad: {producto.cantidad || 1}</p>

                  <strong>
                    {producto.precio} €
                  </strong>
                </div>
              </div>
            ))}

            <div className="pedido-footer">
              <h3>Total: {pedido.total.toFixed(2)} €</h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
}