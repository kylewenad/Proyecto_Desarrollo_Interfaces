

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../ccs/pages/products.css'

import businessClassic from '../assets/buissnescls.jpg'
import runningMax from '../assets/running_max.jpg'
import casualStreet from '../assets/casual_st.jpg'
import sportsRunner from '../assets/sports_runner.jpg'
import botaTrenk from '../assets/bota_trenk.jpg'
import SneakerWhite from '../assets/snw.jpg'
import UrbanLeather from '../assets/urle.jpg'
import MocasinPr from '../assets/moca.jpg'
import UrbanAdventure from '../assets/avu.jpg'
import ClassicBrown from '../assets/brcl.jpg'

export default function Products(){
    return(
        <>
            <header>
                <Navbar/>
            </header>
            <section className="productos">

                <h2>Todos los productos:</h2>
                
                <div className='productos'>

                <div className="hombre">
                    
                    
                        <div className="producto">
                            <img src={businessClassic} alt="Buisness Classic"/>
                            <h3>Business Classic</h3>
                            <p>79,99€</p>
                        </div>

                        <div className="producto">
                            <img src={runningMax} alt="Running Max"/>
                            <h3>Running Max</h3>
                            <p>69,99€</p>
                        </div>

                        <div className="producto">
                            <img src={casualStreet} alt="Sneaker Urban"/>
                            <h3>Casual Street</h3>
                            <p>54,99€</p>
                        </div>
                    
                  
                   
                        <div className='producto'>
                            <img src={sportsRunner} alt="Sports runner"/>
                            <h3>Sports Runner</h3>
                            <p>64,99€</p>
                        </div>

                        <div className='producto'>
                            <img src={botaTrenk} alt="Bota trekking"/>
                            <h3>Bota trekking</h3>
                            <p>89,99€</p>
                        </div>

                        <div className='producto'>
                            <img src={SneakerWhite}alt="Sneaker white"/>
                            <h3>Sneaker White</h3>
                            <p>59,99€</p>
                        </div>

                        <div className='producto'>
                            <img src={UrbanLeather}alt="Sneaker white"/>
                            <h3>Urban Leather</h3>
                            <p>74,99€</p>
                        </div>

                        <div className='producto'>
                            <img src={MocasinPr}alt="Sneaker white"/>
                            <h3>Mocasin Premium</h3>
                            <p>72,99€</p>
                        </div>

                        <div className='producto'>
                            <img src={UrbanAdventure}alt="Sneaker white"/>
                            <h3>Outdoor Adventure</h3>
                            <p>94,99€</p>
                        </div>

                         <div className='producto'>
                            <img src={ClassicBrown}alt="Sneaker white"/>
                            <h3>Classic Brown</h3>
                            <p>68,99€</p>
                        </div>
                    
                    


                </div>
                </div>

            </section>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}