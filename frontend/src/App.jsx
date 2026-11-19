// 1. IMPORTACIONES
import { useState } from 'react'
import './App.css'
import './styles/global.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import hero from './assets/Designer.png'
import ProductsCarrousel from './components/ProductsCarrousel'

// 2. COMPONENTE PRINCIPAL
//function App() 

// 3. ESTRUCTURA VISUAL (JSX)
// 4. EXPORTACIÓN
export default function App()
{ 
  return (
    <>
    <header>
      <Navbar/>
    </header>

   
    <section className="hero">
        <div className="hero_content" img src={hero} >
            <h1 className="hero_title">
                ELEVATED STEPS.
                UNCOMPROMISING STYLE.
            </h1>
            <div className="hero_btn">
            <button>COMPRAR NUEVA COLECCION</button>
            </div>
        </div>
    </section>

   
      <ProductsCarrousel/>


  

    <footer>
       
      <Footer/>
    </footer>
    
    </>
    
  )
  
}

