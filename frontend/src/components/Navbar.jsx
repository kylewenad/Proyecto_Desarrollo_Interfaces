import logo from '../assets/zapstepLogo.png';
import { NavLink } from "react-router-dom";
import "../styles/components/navbar.css";


export default function Navbar() {
  return (
    <>
    <header>
      <img src={logo} alt="Logo de ZapStep" className="navbar-logo" />     
      <nav>
        <NavLink end to="/">Home</NavLink>{' | '}
        <NavLink to="/Products">Productos</NavLink>{' | '}
        <NavLink to="/Contact">Contact</NavLink>{' | '}
        <NavLink to="/About">About</NavLink>{' | '}
        <NavLink to="/Login">Login</NavLink>        
      </nav>
    </header>
    </>
  )
}