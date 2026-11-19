export default function Login() {
return (

<main class="login">
    <section class="login__section">
        <div class="login__container">
            <header class="login__header">
                <h1 class="login__title">Inicia sesión</h1>
                     <p class="login__subtitle">
                        Introduce tus datos para acceder a tu cuenta
                    </p>
            </header>
            <form class="login__form" id="loginForm">                     
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
        
            <button class="login__button" type="submit">Iniciar sesión</button>
        
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

)
}