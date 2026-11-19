import { useState } from 'react'
import './App.css'
import './styles/global.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar'
import businessClassic from '../assets/buisness_classic'
import runningMax from '../assets/running_max'
import casualStreet from '../assets/casual_st'
import sportsRunner from '../assets/sports_runner'
import botaTrenk from '../assets/bota_trenk'
import SneakerWhite from '../assets/Sneaker_White'

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
                    <div className='fila'>
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
                    </div>
                  
                    <div className='fila'>
                        <div className='producto'>
                            <img src={sportsRunner} alt="Sports runner"/>
                            <h3>Casual Street</h3>
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
                            <p>89,99€</p>
                        </div>
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