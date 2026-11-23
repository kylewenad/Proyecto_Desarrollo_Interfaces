import logo from '../assets/zapstepLogo.png';
import { Link } from "react-router-dom";
import SocialLinks from './SocialLinks';
import '../styles/components/footer.css';

export default function Footer(){
    return(
        <>
            <footer>
                <div>CONTACT INFO
                    <br></br>
                    123-456-789
                    <br></br>
                    www.zapstep.com
                </div>
                <div className="logoCopy">
                <a href="#">
                    <img src={logo} alt="Logo del proyecto" className="navbar-logo" />       
                </a>
                    ZapStep®. Todos los derechos reservados 2026
                </div>
                <div>
                    <SocialLinks/>
                </div>
            </footer>
        </>
    );
}