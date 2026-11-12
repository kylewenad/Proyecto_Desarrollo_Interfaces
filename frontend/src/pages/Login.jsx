<!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            <meta name="description" content="onlineShop"/>
            <meta name="keywords" content="onlineShop"/>
            <link rel="icon" href="../assets/logo_navbar.jpg" type="image/png">
            <title>ZAPSTEP-Login</title>
        </head>
        <body>
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

</html>