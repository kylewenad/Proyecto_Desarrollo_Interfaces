import { BrowserRouter, NavLink, Routes, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';
import NewArrivals from '../pages/NewArrivals';
import Register from '../pages/Register';
import About from '../pages/About';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Pedidos from '../pages/Pedidos';

export default function AppRoutes() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/NewArrivals" element={<NewArrivals />} /> 
          <Route path="/About" element={<About />} /> 
          <Route path="/Register" element={<Register />} /> 
          <Route path="/Login" element={<Login />} /> 

          <Route path="/Profile" element={<Profile />} />          
          <Route path="/Pedidos" element={<Pedidos />} />

      </Routes>
    </>
  )
}
