import { useState } from 'react';
import AppRoutes from './routes/AppRoutes';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import './styles/variables.css';

export default function App() {
  return (
    <>
  <Navbar/>

  <p>Esta página solo es la plantilla para el resto de páginas.</p>

  <AppRoutes/>
  <Footer/>
</>
)
}