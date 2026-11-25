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



function agregarAlCarrito(producto) {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || []

    const productoExistente = carritoActual.find(
        item => item.id === producto.id
    )

    let nuevoCarrito

    if (productoExistente) {
        nuevoCarrito = carritoActual.map(item =>
            item.id === producto.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
        )
    } else {
        nuevoCarrito = [
            ...carritoActual,
            { ...producto, cantidad: 1 }
        ]
    }

    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))

    alert('¡Producto añadido al carrito!')
}

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

                            <button onClick={() => agregarAlCarrito({
                            id: 1,
                            nombre: "Business Classic",
                            precio: 169.99,
                            imagen: businessClassic,
                            talla: 38,
                            color: "Negro"
                        })}>
                            Añadir al carrito
                        </button>
                        </div>

                        <div className="producto">
                            <img src={runningMax} alt="Running Max"/>
                            <h3>Running Max</h3>
                            <p>169,99€</p>

                            <button onClick={() => agregarAlCarrito({
                            id: 2,
                            nombre: "Running Max",
                            precio: 169.99,
                            imagen: runningMax,
                            talla: 38,
                            color: "Azul"
                        })}>
                            Añadir al carrito
                        </button>
                        </div>

                        <div className="producto">
                            <img src={casualStreet} alt="Sneaker Urban"/>
                            <h3>Casual Street</h3>
                            <p>74,99€</p>
                            <button onClick={() => agregarAlCarrito({
                                id: 3,
                                nombre: "Casual Street",
                                precio: 74.99,
                                imagen: casualStreet,
                                talla: 38,
                                color: "Negro"
                            })}>
                                Añadir al carrito
                        </button>
                        </div>
                    
                  
                   
                        <div className='producto'>
                            <img src={sportsRunner} alt="Sports runner"/>
                            <h3>Sports Runner</h3>
                            <p>114,99€</p>
                            <button onClick={() => agregarAlCarrito({
                                id: 4,
                                nombre: "Sports Runner", 
                                precio: 114.99, imagen: sportsRunner,
                                talla: 36, 
                                color: "Deportivo" })}>
                             Añadir al carrito
                            </button>
                        </div>

                        <div className='producto'>
                            <img src={botaTrenk} alt="Bota trekking"/>
                            <h3>Bota trekking</h3>
                            <p>209,99€</p>
                            <button onClick={() => agregarAlCarrito({
                                 id: 5,
                                nombre: "Bota trekking", 
                                precio: 209.99, 
                                imagen: botaTrenk,
                                talla: 38,
                                color: "Marrón" })}>
                            Añadir al carrito
                            </button>
                        </div>

                        <div className='producto'>
                            <img src={SneakerWhite}alt="Sneaker white"/>
                            <h3>Sneaker White</h3>
                            <p>89,99€</p>
                            <button onClick={() => agregarAlCarrito({ 
                                id: 6,
                                nombre: "Sneaker White", 
                                precio: 89.99,
                                imagen: SneakerWhite,
                                talla: 41,
                                color: "Blanco" })}>
                            Añadir al carrito
                        </button>
                        </div>

                        <div className='producto'>
                            <img src={UrbanLeather}alt="Urban Leather"/>
                            <h3>Urban Leather</h3>
                            <p>174,99€</p>
                            <button onClick={() => agregarAlCarrito({
                                 id: 7,
                                nombre: "Urban Leather",
                                precio: 174.99,
                                imagen: UrbanLeather,
                                talla: 44,
                                color: "Marrón" })}>
                            Añadir al carrito
                        </button>
                        </div>

                        <div className='producto'>
                            <img src={MocasinPr}alt="Mocasin Premium"/>
                            <h3>Mocasin Premium</h3>
                            <p>132,99€</p>
                            <button onClick={() => agregarAlCarrito({
                                id: 8,
                                nombre: "Mocasin Premium",
                                precio: 132.99,
                                imagen: MocasinPr,
                                talla: 40, 
                                color: "Marrón" })}>
                            Añadir al carrito
                        </button>
                        </div>

                        <div className='producto'>
                            <img src={UrbanAdventure}alt="Outdoor Adventure"/>
                            <h3>Outdoor Adventure</h3>
                            <p>194,99€</p>
                            <button onClick={() => agregarAlCarrito({
                                 id: 9,
                                 nombre: "Outdoor Adventure",
                                  precio: 194.99, 
                                  imagen: UrbanAdventure,
                                  talla: 41,
                                   color: "Verde" })}>
                            Añadir al carrito
                        </button>
                        </div>

                         <div className='producto'>
                            <img src={ClassicBrown}alt="Classic Brown"/>
                            <h3>Classic Brown</h3>
                            <p>168,99€</p>
                            <button onClick={() => agregarAlCarrito({ 
                                id: 10,
                                nombre: "Classic Brown",
                                precio: 168.99,
                                imagen: ClassicBrown,
                                talla: 42,
                                color: "Marrón" })}>
                                Añadir al carrito
                            </button>
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
                            <button onClick={() => agregarAlCarrito({ id: 11, nombre: "Elegance Heels", precio: 188.99, imagen: EleganceH, talla: 36, color: "Negro" })}>
                                Añadir al carrito
                            </button>
                        </div>
                    <div className='producto'>
                            <img src={CasualC}alt="Casual Comfort"/>
                            <h3>Casual Comfort</h3>
                            <p>98,99€</p>
                            <button onClick={() => agregarAlCarrito({ id: 12, nombre: "Casual Comfort", precio: 98.99, imagen: CasualC, talla: 38, color: "Beige" })}>
                                Añadir al carrito
                            </button>
                        </div>
                    <div className='producto'>
                            <img src={SportsW}alt="Sport Woman Pro"/>
                            <h3>Sport Woman Pro</h3>
                            <p>128,99€</p>
                            <button onClick={() => agregarAlCarrito({ id: 13, nombre: "Sport Woman Pro", precio: 128.99, imagen: SportsW, talla: 39, color: "Deportivo" })}>
                                Añadir al carrito
                            </button>
                        </div>
                    <div className='producto'>
                            <img src={BotaF}alt="Bota Fashion"/>
                            <h3>Bota Fashion</h3>
                            <p>158,99€</p>
                            <button onClick={() => agregarAlCarrito({ id: 14, nombre: "Bota Fashion", precio: 158.99, imagen: BotaF, talla: 40, color: "Negro" })}>
                                Añadir al carrito
                            </button>
                        </div>
                    <div className='producto'>
                            <img src={sanSummer}alt="Sandalia Summer"/>
                            <h3>Sandalia Summer</h3>
                            <p>138,99€</p>
                            <button onClick={() => agregarAlCarrito({ id: 15, nombre: "Sandalia Summer", precio: 138.99, imagen: sanSummer, talla: 38, color: "Verano" })}>
                                Añadir al carrito
                            </button>
                        </div>
                    <div className='producto'>
                            <img src={snw}alt="Sneaker Urban"/>
                            <h3>Sneaker Urban</h3>
                            <p>338,99€</p>
                            <button onClick={() => agregarAlCarrito({ id: 16, nombre: "Sneaker Urban", precio: 338.99, imagen: snw, talla: 41, color: "Blanco" })}>
                                Añadir al carrito
                            </button>
                        </div>
                    <div className='producto'>
                            <img src={clblack}alt="Classic Black"/>
                            <h3>Classic Black</h3>
                            <p>118,99€</p>
                            <button onClick={() => agregarAlCarrito({ id: 17, nombre: "Classic Black", precio: 118.99, imagen: clblack, talla: 37, color: "Negro" })}>
                                Añadir al carrito
                            </button>
                        </div>

                    <div className='producto'>
                            <img src={offmu}alt="Office Style"/>
                            <h3>Office Style</h3>
                            <p>238,99€</p>
                            <button onClick={() => agregarAlCarrito({ id: 18, nombre: "Office Style", precio: 238.99, imagen: offmu, talla: 38, color: "Negro" })}>
                                Añadir al carrito
                            </button>
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
                            <button onClick={() => agregarAlCarrito({ id: 19, nombre: "Runner Kids Azul", precio: 78.99, imagen: runkblue, talla: 30, color: "Azul" })}>
                                Añadir al carrito
                            </button>
                        </div>
                    <div className='producto'>
                            <img src={rrosa}alt="Runner Kids Rosa"/>
                            <h3>Runner Kids Rosa</h3>
                            <p>68,99€</p>
                            <button onClick={() => agregarAlCarrito({ id: 20, nombre: "Runner Kids Rosa", precio: 68.99, imagen: rrosa, talla: 22, color: "Rosa" })}>
                                Añadir al carrito
                            </button>
                        </div>

                    <div className='producto'>
                            <img src={snju}alt="Sneaker Junior"/>
                            <h3>Sneaker Junior</h3>
                            <p>103,99€</p>
                            <button onClick={() => agregarAlCarrito({ id: 21, nombre: "Sneaker Junior", precio: 103.99, imagen: snju, talla: 28, color: "Blanco" })}>
                                Añadir al carrito
                            </button>
                        </div>
                    <div className='producto'>
                            <img src={sk}alt="Deportivo School"/>
                            <h3>Deportivo School</h3>
                            <p>92,99€</p>
                            <button onClick={() => agregarAlCarrito({ id: 22, nombre: "Deportivo School", precio: 92.99, imagen: sk, talla: 24, color: "Deportivo" })}>
                                Añadir al carrito
                            </button>
                        </div>

                    <div className='producto'>
                            <img src={sank}alt="Sandalia Kids"/>
                            <h3>Sandalia Kids</h3>
                            <p>67,99€</p>
                            <button onClick={() => agregarAlCarrito({ id: 23, nombre: "Sandalia Kids", precio: 67.99, imagen: sank, talla: 28, color: "Verano" })}>
                                Añadir al carrito
                            </button>
                        </div>
                    <div className='producto'>
                            <img src={botak}alt="Bota Mini Adventure"/>
                            <h3>Bota Mini Adventure</h3>
                            <p>120,99€</p>
                            <button onClick={() => agregarAlCarrito({ id: 24, nombre: "Bota Mini Adventure", precio: 120.99, imagen: botak, talla: 30, color: "Marrón" })}>
                                Añadir al carrito
                            </button>
                        </div>
                    <div className='producto'>
                            <img src={urbanG}alt="Urban Girl"/>
                            <h3>Urban Girl</h3>
                            <p>111,99€</p>
                            <button onClick={() => agregarAlCarrito({ id: 25, nombre: "Urban Girl", precio: 111.99, imagen: urbanG, talla: 29, color: "Rosa" })}>
                                Añadir al carrito
                            </button>
                        </div>


                </div>
                

            </section>
            
        </>
    )
}
