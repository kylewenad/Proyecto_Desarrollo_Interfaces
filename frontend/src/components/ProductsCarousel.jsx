import React, { useState, useEffect, useRef } from 'react';
import '../styles/components/carousel.css';

import botaFashion from '../assets/bota_fashion.png';
import classicBrown from '../assets/classic_brown.png';
import runningMax from '../assets/running_max.jpg'
import casualStreet from '../assets/casual_st.jpg'
import sportsRunner from '../assets/sports_runner.jpg'
/*div className="carousel">
      <button>izquierda</button>
      <img src={botaFashion} alt="" className="carousel_img"/>
      
      
      <img src={casualStreet} alt="" class="carousel_img"/>
      
      
      <button>derecha</button>
    
    </div>*/
export default function ProductsCarousel() {
return(
  <>
  <section className="carousel__section">
   
    <h2>NUEVO</h2>
    <div className="carousel">
      <button className="carousel__btn prev">&#10094;</button>
      <img src={classicBrown} alt="" class="carousel_img"/>
      <img src={runningMax} alt="" class="carousel_img"/>
        <img src={sportsRunner} alt="" class="carousel_img"/>
      <button className="carousel__btn next">&#10095;</button>
    
    </div>
  </section>
  </>
)
}