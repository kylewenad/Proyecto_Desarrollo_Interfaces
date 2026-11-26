import logo from '../assets/zapstepLogo.png';
import "../styles/components/navbar.css";



export default function NavbarAdmin() {
  return (
    <>
    <header>
      <img src={logo} alt="Logo de ZapStep" className="navbar-logo" />     
    </header>
    </>
  )
}