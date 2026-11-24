import '../styles/about.css'

import historiaImg from '../assets/his.jpg';
import comodidadImg from '../assets/com.jpg';
import artesaniaImg from '../assets/artesa.jpg';
import disenoImg from '../assets/dis.jpg';

export default function About() {
  return (
     <>
   

      <section className="banner-about">
        <div className="banner-texto">
          <h1>
            SOBRE NOSOTROS:<br />
            CADA GRAN HISTORIA EMPIEZA<br />
            CON UN BUEN PASO
          </h1>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="historia">
        <div className="historia-imagen">
          <img src={historiaImg} alt="Historia Zapstep" />
        </div>

        <div className="historia-texto">
          <h2>NUESTRA HISTORIA</h2>
          <p>
            ZapStep nació con el objetivo de unir diseño, comodidad y calidad
            en cada paso. Desde nuestros comienzos hemos trabajado para crear
            calzado que se adapte a las necesidades del día a día sin renunciar
            al estilo y la elegancia.
          </p>
          <p>
            Nuestra filosofía se basa en ofrecer productos duraderos,
            confeccionados con materiales cuidadosamente seleccionados y
            pensados para proporcionar la mejor experiencia de uso posible.
            Cada colección es diseñada prestando atención a los pequeños
            detalles que marcan la diferencia.
        </p>
        </div>
      </section>

      {/* PILARES */}
      <section className="pilares">
        <h2>NUESTROS PILARES</h2>

        <div className="contenedor-pilares">
          <article className="pilar">
            <img src={comodidadImg} alt="Comodidad" />
            <h3>COMODIDAD INIGUALABLE</h3>
            <p>
            Nuestros zapatos están diseñados para acompañarte durante todo el
            día. Incorporan materiales ligeros, plantillas ergonómicas y
            acabados que proporcionan una sensación de confort en cada paso.
          </p>
          </article>

          <article className="pilar">
            <img src={artesaniaImg} alt="Artesanía" />
            <h3>ARTESANÍA PREMIUM</h3>
            <p>
            Combinamos tradición y tecnología para crear productos con un
            acabado excepcional. Cada modelo es elaborado con materiales de
            calidad que garantizan resistencia, durabilidad y estilo.
          </p>
          </article>

          <article className="pilar">
            <img src={disenoImg} alt="Diseño" />
            <h3>DISEÑO ATEMPORAL</h3>
             <p>
              Creamos colecciones que trascienden las tendencias pasajeras.
              Nuestro objetivo es ofrecer diseños elegantes y versátiles que
              puedan acompañarte en cualquier ocasión y durante muchos años.
            </p>
          </article>
        </div>
      </section>
      <section className="valores">
        <h2>NUESTRO COMPROMISO</h2>
        <p>
          En ZapStep creemos que cada paso cuenta. Por eso seleccionamos
          cuidadosamente nuestros materiales, apostamos por diseños actuales
          y desarrollamos productos capaces de combinar confort, calidad y
          personalidad. Nuestro compromiso es ofrecer una experiencia de
          compra excepcional y un calzado que acompañe a nuestros clientes en
          cada momento importante de sus vidas.
        </p>
        <p>
        A lo largo de nuestra trayectoria hemos trabajado en colaboraciones
        especiales con marcas reconocidas internacionalmente como Nike,
        participando en proyectos inspirados en la innovación, el diseño
        deportivo y las últimas tendencias del sector del calzado. Estas
        colaboraciones nos han permitido ampliar nuestra experiencia y
        ofrecer productos exclusivos que combinan el estilo característico
        de ZapStep con las tendencias más actuales del mercado.
      </p>

      <p>
        Seguimos creciendo con la misma ilusión que el primer día,
        explorando nuevas ideas, mejorando nuestros procesos y creando
        colecciones para hombre, mujer e infantil que reflejen nuestra
        pasión por la moda y la calidad.
      </p>
      </section>
    </>
  );
}