import ProductsCarousel from '../components/ProductsCarousel';
import '../styles/components/categorias.css';
import '../styles/components/hero.css';

import Mujer from '../assets/tacones_elegantes.jpg'
import Hombre from '../assets/zapatos_vestir_hombre.jpg'
import Infantil from '../assets/infantil.jpg'


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
            <button>COMPRAR NUEVA COLECCION</button>
          </div>
        </div>
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
   
    <ProductsCarousel />
    </main>

  );
}