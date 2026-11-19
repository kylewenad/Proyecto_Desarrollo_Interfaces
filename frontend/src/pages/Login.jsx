import { useState } from 'react'
import './App.css'
import './styles/global.css'
import Form from '../components/form'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar'

export default function Login(){
    return(
        <>
        <header>
            <Navbar/>
        </header>

        <Form/>

        <footer>
            <Footer/>
        </footer>
        </>
    )
}
        /*<body>
            <header>

            </header>
            <main class="login">
                <section class="login__section">
                    <div class="login__container">
                        <header class="login__header">
                            <h1 class="login__title">Inicia sesión</h1>
                            <p class="login__subtitle">
                                Introduce tus datos para acceder a tu cuenta
                            </p>
                        <form class="login__form" id="loginForm">
                            <!-- Email -->
                            <div class="login__field">
                                <label class="login__label" for="email">Email</label>
                                <div class="login__input-wrapper">
                                    <i class="fa-solid fa-envelope login__icon"></i>
                                    <input
                                    class="login__input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    />
                            </div>
                        </div>
                    </div>

                    <!-- Password -->
                    <div class="login__field">
                    <label class="login__label" for="password">Contraseña</label>
                    <div class="login__input-wrapper">
                        <i class="fa-solid fa-lock login__icon"></i>
                        <input
                        class="login__input"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        required
                        />
                    </div>
                    </div>
                     <!-- Remember -->
            <div class="login__remember">
              <input
                class="login__checkbox"
                type="checkbox"
                id="remember"
                name="remember"
              />
              <label class="login__remember-label" for="remember">
                Recuérdame
              </label>
            </div>
            <!-- Button -->
            <button class="login__button" type="submit">Iniciar sesión</button>
            <!-- Register -->
            <p class="login__register">
              ¿No tienes cuenta?
              <a class="login__register-link" href="./register.html">
                Crea una aquí
              </a>
            </p>
          </form>
        </div>
        </section>
    </main>

</body>

</html>*/