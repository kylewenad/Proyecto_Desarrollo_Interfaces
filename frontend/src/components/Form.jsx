export default function Form(){
    return(
        <>
        <main className="login">
            <section className="login__section">
                <div className="login__container">
                    <header className="login__header">
                        <h1 className="login__title">Inicia sesión</h1>
                        <p className="login__subtitle">
                            Introduce tus datos para acceder a tu cuenta
                        </p>
                    </header>
                    <form className="login__form" id="loginForm">
                         <div className="login__field">
                            <label className="login__label" htmlFor="email">
                                Email
                            </label>
                            <div className="login__input-wrapper">
                                <i className="fa-solid fa-envelope login__icon"></i>
                                <input
                                    className="login__input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    />
                            </div>
                        </div>
                        <div className="login__field">
                            <label className="login__label" htmlFor="password">
                                Contraseña
                            </label>

                            <div className="login__input-wrapper">
                                <i className="fa-solid fa-lock login__icon"></i>

                                <input
                                className="login__input"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Contraseña"
                                required
                                />
                            </div>
                        </div>
                        <div className="login__remember">
                            <input
                                className="login__checkbox"
                                type="checkbox"
                                id="remember"
                                name="remember"
                            />

                            <label
                                className="login__remember-label"
                                htmlFor="remember"
                            >
                                Recuérdame
                            </label>
                        </div>
                        <button className="login__button" type="submit">
                            Iniciar sesión
                        </button>
                        <p className="login__register">
                            ¿No tienes cuenta?{" "}
                            <a
                                className="login__register-link"
                                href="/register"
                            >
                                Crea una aquí
                            </a>
                        </p>
                    </form>
                </div>
            </section>
        </main>
        </>
    )
}