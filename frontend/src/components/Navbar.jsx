import logo from '../assets/logoZapstep.jpg';

export default function Navbar() {
  return (
    <>
      <a href="#">
       <img src={logo} alt="Logo del proyecto" className="navbar-logo" />     
      </a>
    <nav className = "nav-link">
      <a href="#">HOME | </a>
      <a href="#"> MEN'S | </a>
      <a href="#"> WOMEN'S | </a>
      <a href="#"> NEW ARRIVALS | </a>
      <a href="#"> ABOUT US | </a>
      <a href="#"> LOGIN</a>
    </nav>
    </>
  )
}