import logo from '../assets/zapstepLogo.png';
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
            <FancyText cursive text="Zapstep"/>
            <Copyright year={1997}/>

        </>
    );
}