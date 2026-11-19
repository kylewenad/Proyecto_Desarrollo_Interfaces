import React, { useState, useEffect, useRef } from 'react';

import botaFashion from '../assets/bota_fashion.png';
import classicBrown from '../assets/classic_brown.png';

export default function ProductsCarrousel() {

const [page, setPage] = useState(0);

    const trackRef = useRef(null); //const track = document.querySelector(".products__track")

    const logos = [
    { id: 1, src: botaFashion, alt: 'Referente 1' },
    { id: 2, src: classicBrown, alt: 'Referente 2' },
    { id: 3, src: botaFashion, alt: 'Referente 3' },
    { id: 4, src: botaFashion, alt: 'Referente 4' },
    { id: 5, src: botaFashion, alt: 'Referente 5' },
  ];
  
 // const logos = document.querySelectorAll(".products__logo")
// Calcular cuántos elementos son visibles según la pantalla
    const getVisible = () => {
        return window.innerWidth >= 768 ? 4 : 1;
    };

    const maxPage = logos.length - getVisible();

    // Funciones de navegación
    const handleNext = () => {
        setPage((prevPage) => (prevPage >= maxPage ? 0 : prevPage + 1));
    };

    const handlePrev = () => {
        setPage((prevPage) => (prevPage <= 0 ? maxPage : prevPage - 1));
    };
    //Equivalente en .js
    //const nextBtn = document.querySelector(".next")
    //const prevBtn = document.querySelector(".prev")

    useEffect(() => {
    if (trackRef.current) {
      const firstLogo = trackRef.current.querySelector('.products__logo');
      if (firstLogo) {
        const logoWidth = firstLogo.offsetWidth;
        trackRef.current.style.transform = `translateX(${-logoWidth * page}px)`;
      }
    }
    }, [page]);

    // 4. useEffect para el intervalo automático y el listener de la ventana
  useEffect(() => {
    // Autoplay cada 3 segundos
    const interval = setInterval(() => {
      setPage((prevPage) => (prevPage >= maxPage ? 0 : prevPage + 1));
    }, 3000);

    // Manejar el redimensionado de pantalla
    const handleResize = () => {
      setPage(0);
    };
    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar el componente (vital en React)
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [maxPage]);



    return (
    
        <section className="products py-5">
      <h2 className="products__title text-center fw-bold">
        RESPALDADOS POR LOS REFERENTES EN CIBERSEGURIDAD
      </h2>
      <p className="products__subtitle text-center text-muted mb-4">
        Colaboramos con los principales referentes en ciberseguridad ofensiva y defensiva
      </p>

      <div className="products__container position-relative overflow-hidden mx-auto" style={{ maxWidth: '900px' }}>
        {/* Botón Anterior */}
        <button 
          className="products__btn prev btn btn-dark position-absolute top-50 start-0 translate-middle-y z-3" 
          onClick={handlePrev}
        >
          &#10094;
        </button>

        <div className="products__carousel overflow-hidden">
          {/* Usamos ref en lugar de document.querySelector */}
          <div 
            className="products__track d-flex" 
            ref={trackRef}
            style={{ transition: 'transform 0.3s ease-in-out' }}
          >
            {logos.map((logo) => (
              <div 
                className="products__logo flex-shrink-0 p-2 text-center" 
                key={logo.id}
                style={{ width: window.innerWidth >= 768 ? '25%' : '100%' }}
              >
                <img src={logo.src} alt={logo.alt} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>

        {/* Botón Siguiente (¡Ojo al className en lugar de class!) */}
        <button 
          className="products__btn next btn btn-dark position-absolute top-50 end-0 translate-middle-y z-3" 
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </section>
)
}