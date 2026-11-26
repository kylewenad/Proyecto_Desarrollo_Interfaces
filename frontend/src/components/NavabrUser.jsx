import logo from '../assets/zapstepLogo.png';
import { NavLink,Link } from "react-router-dom";
import "../styles/components/navbar.css";
import userIcon from '../assets/usuario.png'
import cartIcon from '../assets/cart.png'


export default function Navbar() {
  return (
    <>
    <header>
      <img src={logo} alt="Logo de ZapStep" className="navbar-logo" />     
      
        <div className="nav-container">
          <nav>
            <NavLink end to="/">Home</NavLink>{' | '}
            <NavLink to="/Products">Productos</NavLink>{' | '}
            <NavLink to="/About">About</NavLink>       
          </nav>

          <div className="navbar-icons">
            <Link to="/Carrito">
              <img src={cartIcon} alt="Carrito" className="nav-icon" />
            </Link>

            <Link to="/Profile">
              <img src={userIcon} alt="Usuario" className="nav-icon" />
          </Link>
          </div>
      </div>
    </header>
    </>
  )
}