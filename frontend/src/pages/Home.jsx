import ProductsCarousel from '../components/ProductsCarousel';
import '../styles/components/categorias.css';
import '../styles/components/hero.css';
import '../styles/home.css';
import { Link } from 'react-router-dom';

import Mujer from '../assets/tacones_elegantes.jpg'
import Hombre from '../assets/zapatos_vestir_hombre.jpg'
import Infantil from '../assets/infantil.jpg'

import nikeLogo from '../assets/nike.png'
import JomaLogo from '../assets/joma.png'
import LouisVLogo from '../assets/lv.png'


export default function Home() {
  return (
    <main>

      <section className="hero">
        <div className="hero_content">         
          <h1 className="hero_title">
            ELEVATED STEPS.
            UNCOMPROMISING STYLE.
          </h1>
          <div className="hero_btn">
            <a href="#nueva-coleccion">
              <button>COMPRAR NUEVA COLECCION</button>
            </a>
          </div>
        </div>
      </section>

      <section className="bienvenida">

          <h2>BIENVENIDO A ZAPSTEP</h2>

          <p>
              Descubre nuestro catálogo exclusivo de calzado para hombre, mujer e infantil.
              En ZapStep combinamos diseño, calidad y comodidad para ofrecer colecciones
              adaptadas a cada estilo. Además, colaboramos con reconocidas marcas del mundo
              de la moda para crear propuestas únicas inspiradas en las últimas tendencias.
          </p>

      </section>

      <section className='categorias'>
        <h2>CATEGORIAS</h2>
        <div className="contenedor_categorias"> 
          <div className="categoria">
            <img src={Mujer} alt="categoria mujer"/>
            <h3>MUJER</h3>
          </div>
         

          
          <div className="categoria">
            <img src={Hombre} alt="categoria hombre"/>
            <h3>HOMBRE</h3>
          </div>
          

          
          <div className="categoria">
            <img src={Infantil} alt="categoria infantil"/>
            <h3>INFANTIL</h3>
          </div>
          
        </div>
      </section>

      <section className="ventajas">

    <h2>¿POR QUÉ ELEGIR ZAPSTEP?</h2>

    <div className="ventajas-grid">

        <div className="ventaja">
            <h3>🚚 Envío Rápido</h3>
            <p>Entregas en 24/48 horas en toda España.</p>
        </div>

        <div className="ventaja">
            <h3>⭐ Calidad Premium</h3>
            <p>Materiales cuidadosamente seleccionados.</p>
        </div>

        <div className="ventaja">
            <h3>👟 Máximo Confort</h3>
            <p>Diseños pensados para acompañarte cada día.</p>
        </div>

    </div>

</section>
   
   <section id='nueva-coleccion'>
      <ProductsCarousel />
    </section>

    <section className="colaboraciones">

    <h2>COLABORACIONES</h2>

    <p>
        Trabajamos junto a marcas reconocidas del sector para crear
        colecciones inspiradas en las últimas tendencias de la moda y
        el deporte.
    </p>

    <div className="logos">
        <img src={nikeLogo} alt="Nike" />
        <img src={LouisVLogo} alt="louis vuitton" />
        <img src={JomaLogo} alt="Joma" />
    </div>

</section>

    <section className="mini-about">

    <h2>NUESTRA HISTORIA</h2>

    <p>
        Desde nuestros inicios, en ZapStep trabajamos para ofrecer
        calzado que combine diseño, durabilidad y comodidad para toda
        la familia.
    </p>

    <Link to="/about">
      <button>SABER MÁS</button>
    </Link>

</section>
    </main>

  );
}