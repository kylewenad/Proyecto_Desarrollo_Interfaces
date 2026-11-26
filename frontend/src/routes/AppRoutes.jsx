import { BrowserRouter, NavLink, Routes, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import About from '../pages/About';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Pedidos from '../pages/Pedidos';
import Carrito from '../pages/Cart';
import Admin from '../pages/Admin';

export default function AppRoutes() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/About" element={<About />} /> 
          <Route path="/Register" element={<Register />} /> 
          <Route path="/Login" element={<Login />} /> 

          <Route path="/Profile" element={<Profile />} />          
          <Route path="/Pedidos" element={<Pedidos />} />
          <Route path="/Carrito" element={<Carrito/>}/>
          <Route path="/Admin" element={<Admin/>}/>

      </Routes>
    </>
  )
}
