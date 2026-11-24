import '../styles/contact.css'
export default function Contact() {
  return(
    <>
    
    <div className="contact">
      <h1>Contacto</h1>

      <p className="contact-intro">
        ¿Tienes alguna pregunta sobre nuestros productos, pedidos o
        colaboraciones? Estaremos encantados de ayudarte.
      </p>

      <div className="contact-container">

        <div className="contact-form">
          <h2>Envíanos un mensaje</h2>

          <form>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo electrónico" />
            <input type="text" placeholder="Asunto" />
            <textarea
              placeholder="Escribe tu mensaje..."
              rows="6"
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Información de contacto</h2>

          <p>
            <strong>Email:</strong> contacto@zapstep.com
          </p>

          <p>
            <strong>Teléfono:</strong> +34 600 123 456
          </p>

          <p>
            <strong>Dirección:</strong> Madrid, España
          </p>

          <p>
            <strong>Horario:</strong> Lunes a Viernes, 09:00 - 18:00
          </p>
        </div>
      </div>
    </div>
    </>
  
  );
}