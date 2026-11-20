import logo from '../assets/zapstepLogo.png';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <header>
      <a href="#">
       <img src={logo} alt="Logo del proyecto" className="navbar-logo" />     
      </a>
      <nav className='nav-link'>
        <Link to="/">Home</Link> {" | "}
        <Link to="/Products">Productos</Link>{" | "}
        <Link to="/NewArrivals">New Arrivals</Link>{" | "}
        <Link to="/About">About</Link>{" | "}
        <Link to="/Register">Registro</Link>{" | "}
        <Link to="/Login">Login</Link>
        
      </nav>
</header>
    </>
  )
}