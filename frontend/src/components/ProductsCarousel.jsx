
import { useState } from 'react';
import '../styles/components/carousel.css';

import botaFashion from '../assets/botaK.avif';
import classicBrown from '../assets/classic_brown.png';
import runningMax from '../assets/rosa.jpg'
import heels from '../assets/heels.png'
import sportsRunner from '../assets/moca.jpg'

export default function ProductsCarousel() {
const imagenes = [
    classicBrown,
    runningMax,
    sportsRunner,
    heels,
    botaFashion
  ];

  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((indice + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((indice - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <section className="carousel__section">

      <h2>NUEVA COLECCIÓN OTOÑO 26'</h2>

      <div className="carousel">

        <button
          className="carousel__btn prev"
          onClick={anterior}
        >
          ❮
        </button>

        <img
          src={imagenes[indice]}
          alt="producto"
          className="carousel_img"
        />

        <button
          className="carousel__btn next"
          onClick={siguiente}
        >
          ❯
        </button>

      </div>

    </section>
  );
}