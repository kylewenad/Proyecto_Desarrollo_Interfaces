// 1. IMPORTACIONES
import { useState } from 'react'
import './App.css'
import './styles/global.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'


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

    <footer>
       
      <Footer/>
    </footer>
    
    </>
    
  )
  
}

