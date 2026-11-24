import '../styles/products.css'

import businessClassic from '../assets/buissnescls.jpg'
import runningMax from '../assets/running_max.jpg'
import casualStreet from '../assets/casual_st.jpg'
import sportsRunner from '../assets/sp.jpg'
import botaTrenk from '../assets/bota_trenk.jpg'
import SneakerWhite from '../assets/snw.jpg'
import UrbanLeather from '../assets/urle.jpg'
import MocasinPr from '../assets/moca.jpg'
import UrbanAdventure from '../assets/avu.jpg'
import ClassicBrown from '../assets/brcl.jpg'
import EleganceH from '../assets/eleganceHeels.jpg'
import CasualC from '../assets/casualConfort.jpg'
import SportsW from '../assets/SportsWomanPro.webp'
import BotaF from '../assets/botaFash.avif'
import sanSummer from '../assets/summer.jpg'
import snw from '../assets/sn.avif'
import clblack from '../assets/clb.jpg'
import offmu from '../assets/offm.jpg'
import runkblue from '../assets/rnb.jpg'
import rrosa from '../assets/rr.jpg'
import urbanG from '../assets/rosa.jpg'
import botak from '../assets/botak.avif'
import sank from '../assets/sank.jpg'
import sk from '../assets/sk2.jpg'
import snju from '../assets/snju.avif'

export default function Products(){
    return(
        <>
        
            <section className="todosproductos">

                <h2>Todos los productos:</h2>
                <div id="hombre" className="banner-categoria hombre">
                    <h2>ZAPATOS HOMBRE</h2>
                    <p>Elegancia, comodidad y rendimiento para cualquier ocasión.</p>
                </div>
                

                <div className="grid-productos">
                    
                    
                        <div className="producto">
                            <img src={businessClassic} alt="Buisness Classic"/>
                            <h3>Business Classic</h3>
                            <p>169,99€</p>
                        </div>

                        <div className="producto">
                            <img src={runningMax} alt="Running Max"/>
                            <h3>Running Max</h3>
                            <p>169,99€</p>
                        </div>

                        <div className="producto">
                            <img src={casualStreet} alt="Sneaker Urban"/>
                            <h3>Casual Street</h3>
                            <p>74,99€</p>
                        </div>
                    
                  
                   
                        <div className='producto'>
                            <img src={sportsRunner} alt="Sports runner"/>
                            <h3>Sports Runner</h3>
                            <p>114,99€</p>
                        </div>

                        <div className='producto'>
                            <img src={botaTrenk} alt="Bota trekking"/>
                            <h3>Bota trekking</h3>
                            <p>209,99€</p>
                        </div>

                        <div className='producto'>
                            <img src={SneakerWhite}alt="Sneaker white"/>
                            <h3>Sneaker White</h3>
                            <p>89,99€</p>
                        </div>

                        <div className='producto'>
                            <img src={UrbanLeather}alt="Urban Leather"/>
                            <h3>Urban Leather</h3>
                            <p>174,99€</p>
                        </div>

                        <div className='producto'>
                            <img src={MocasinPr}alt="Mocasin Premium"/>
                            <h3>Mocasin Premium</h3>
                            <p>132,99€</p>
                        </div>

                        <div className='producto'>
                            <img src={UrbanAdventure}alt="Outdoor Adventure"/>
                            <h3>Outdoor Adventure</h3>
                            <p>194,99€</p>
                        </div>

                         <div className='producto'>
                            <img src={ClassicBrown}alt="Classic Brown"/>
                            <h3>Classic Brown</h3>
                            <p>168,99€</p>
                        </div>
                    
                    


                </div>
                <div id="mujer" className="banner-categoria mujer">
                    <h2>ZAPATOS MUJER</h2>
                    <p>Diseños modernos que combinan estilo y confort.</p>
                </div>
                <div className='grid-productos'>
                    <div className='producto'>
                            <img src={EleganceH}alt="Elegance Heels"/>
                            <h3>Elegance Heels</h3>
                            <p>188,99€</p>
                        </div>
                    <div className='producto'>
                            <img src={CasualC}alt="Casual Comfort"/>
                            <h3>Casual Comfort</h3>
                            <p>98,99€</p>
                        </div>
                    <div className='producto'>
                            <img src={SportsW}alt="Sport Woman Pro"/>
                            <h3>Sport Woman Pro</h3>
                            <p>128,99€</p>
                        </div>
                    <div className='producto'>
                            <img src={BotaF}alt="Bota Fashion"/>
                            <h3>Bota Fashion</h3>
                            <p>158,99€</p>
                        </div>
                    <div className='producto'>
                            <img src={sanSummer}alt="Sandalia Summer"/>
                            <h3>Sandalia Summer</h3>
                            <p>138,99€</p>
                        </div>
                    <div className='producto'>
                            <img src={snw}alt="Sneaker Urban"/>
                            <h3>Sneaker Urban</h3>
                            <p>338,99€</p>
                        </div>
                    <div className='producto'>
                            <img src={clblack}alt="Classic Black"/>
                            <h3>Classic Black</h3>
                            <p>118,99€</p>
                        </div>

                    <div className='producto'>
                            <img src={offmu}alt="Office Style"/>
                            <h3>Office Style</h3>
                            <p>238,99€</p>
                        </div>

                    
                </div>
                <div id="infantil" className="banner-categoria infantil">
                    <h2>ZAPATOS INFANTILES</h2>
                    <p>Calzado resistente, cómodo y pensado para los más pequeños.</p>
                </div>
                <div className='grid-productos'>
                     <div className='producto'>
                            <img src={runkblue}alt="Runner Kids Azul"/>
                            <h3>Runner Kids Azul</h3>
                            <p>78,99€</p>
                        </div>
                    <div className='producto'>
                            <img src={rrosa}alt="Runner Kids Rosa"/>
                            <h3>Runner Kids Rosa</h3>
                            <p>68,99€</p>
                        </div>

                    <div className='producto'>
                            <img src={snju}alt="Sneaker Junior"/>
                            <h3>Sneaker Junior</h3>
                            <p>103,99€</p>
                        </div>
                    <div className='producto'>
                            <img src={sk}alt="Deportivo School"/>
                            <h3>Deportivo School</h3>
                            <p>92,99€</p>
                        </div>

                    <div className='producto'>
                            <img src={sank}alt="Sandalia Kids"/>
                            <h3>Sandalia Kids</h3>
                            <p>67,99€</p>
                        </div>
                    <div className='producto'>
                            <img src={botak}alt="Bota Mini Adventure"/>
                            <h3>Bota Mini Adventure</h3>
                            <p>120,99€</p>
                        </div>
                    <div className='producto'>
                            <img src={urbanG}alt="Urban Girl"/>
                            <h3>Urban Girl</h3>
                            <p>111,99€</p>
                        </div>


                </div>
                

            </section>
            
        </>
    )
}
