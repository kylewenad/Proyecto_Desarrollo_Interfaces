import Copyright from "./Copyright";
import FancyText from "./FancyText";

export default function Footer(){
    return(
        <>
            <FancyText cursive text="Zapstep"/>
            <Copyright year={1997}/>

        </>
    );
}