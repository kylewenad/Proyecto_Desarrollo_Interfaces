import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import logo from './assets/logoZapstep.jpg';

//function App() 

export default function App()
{ 
  return (
    <>
    <header>
      <img src={logo} alt="Logo del proyecto" className="img-fluid my-3" style={{ maxWidth: '300px' }} />
      
      <Navbar/>
    </header>
    <footer>
       <img src={logo} alt="Logo del proyecto" className="img-fluid my-3" style={{ maxWidth: '50px' }} />
      <Footer/>
    </footer>
    
    </>
    
  )
  
}