import '../styles/cart.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  const [productos, setProductos] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  // Guardar los cambios del carrito
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(productos));
  }, [productos]);

  // Aumentar o reducir cantidad
  const cambiarCantidad = (id, cambio) => {
    setProductos((actuales) =>
      actuales
        .map((producto) => {
          if (producto.id === id) {
            return {
              ...producto,
              cantidad: Math.max(1, (producto.cantidad || 1) + cambio),
            };
          }
          return producto;
        })
    );
  };

  // Eliminar producto
  const eliminarProducto = (id) => {
    setProductos((actuales) =>
      actuales.filter((producto) => producto.id !== id)
    );
  };

  // Calcular total
  const total = productos.reduce(
    (suma, producto) =>
      suma + Number(producto.precio) * (producto.cantidad || 1),
    0
  );

  return (
    <div className="carrito-container">
      <h1>Mi carrito</h1>
      <p>Revisa tus productos antes de finalizar tu compra.</p>

      {productos.length === 0 ? (
        <div className="carrito-vacio">
          <h2>Tu carrito está vacío</h2>
          <p>¡Todavía no has añadido ningún zapato!</p>
          <button onClick={() => navigate("/Products")}>
            Descubrir productos
          </button>
        </div>
      ) : (
        <>
          <div className="carrito-lista">
            {productos.map((producto) => (
              <div className="carrito-producto" key={producto.id}>
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="carrito-imagen"
                />

                <div className="carrito-info">
                  <h3>{producto.nombre}</h3>

                  <p>Talla: {producto.talla}</p>
                  <p>Color: {producto.color}</p>

                  <strong>
                    {Number(producto.precio).toFixed(2)} €
                  </strong>

                  <div className="carrito-cantidad">
                    <button
                      onClick={() => cambiarCantidad(producto.id, -1)}
                    >
                      −
                    </button>

                    <span>{producto.cantidad || 1}</span>

                    <button
                      onClick={() => cambiarCantidad(producto.id, 1)}
                    >
                      +
                    </button>

                    <button
                      className="eliminar"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carrito-resumen">
            <h2>Resumen del pedido</h2>

            <div className="carrito-total">
              <span>Total:</span>
              <strong>{total.toFixed(2)} €</strong>
            </div>

            <button
              className="boton-pagar"
              onClick={() => {
                const usuario = JSON.parse(localStorage.getItem("usuario"));

                // Comprobar si ha iniciado sesión
                if (!usuario) {
                  navigate("/login");
                  return;
                }

                // Crear pedido
                const nuevoPedido = {
                  id: Date.now(),
                  usuario: usuario.email || usuario.nombre,
                  productos: productos,
                  estado: "Pendiente",
                  fecha: new Date().toLocaleDateString(),
                  total: total
                };

                const pedidosGuardados =
                  JSON.parse(localStorage.getItem("pedidos")) || [];

                pedidosGuardados.push(nuevoPedido);

                localStorage.setItem(
                  "pedidos",
                  JSON.stringify(pedidosGuardados)
                );

                localStorage.removeItem("carrito");
                setProductos([]);

                navigate("/pedidos");
              }}

            >
              Pagar
            </button>

            <button
              className="boton-comprar"
              onClick={() => navigate("/Products")}
            >
              Seguir comprando
            </button>
          </div>
        </>
      )}
    </div>
  );
}


