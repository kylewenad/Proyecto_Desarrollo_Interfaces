// 1. IMPORTACIONES
import { useState } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

import './App.css';
import './styles/global.css';

export default function App() {
  return (
<Routes> 
      <Route path="/Home" element={<Home />} />
      
      
      
      <Route path="/About" element={<About />} /> 
      <Route path="/Login" element={<Login />} /> 
</Routes>
)
}
























/*
/*direccion donde se encuentran las paginas de la web 

import NewArrivals from './src/pages/NewArrivals';
import AboutUs from './src/pages/AboutUs';
import Register from './src/pages/Register';
import Login from './src/pages/Login';
import Profile from './src/pages/Profile';


import './App.css';
import './styles/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx'
import hero from './assets/Designer.png';
import ProductsCarrousel from './components/ProductsCarrousel';
*/
// 2. COMPONENTE PRINCIPAL
//function App(

// 3. ESTRUCTURA VISUAL (JSX)
// 4. EXPORTACIÓN
/*export default function App()
{ 
  return (
    <>
    <header>
      <Navbar/>
    </header>

   <BrowserRouter>
        <Routes> 

        <Route path="/Home" element={<Home />} />
  
        </Routes>
    </BrowserRouter>
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
  
}*/

