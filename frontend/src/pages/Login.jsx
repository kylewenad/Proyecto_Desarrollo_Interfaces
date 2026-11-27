import { useState } from "react";//Guaradar info que puede cambiar
import { useAuth } from "../context/AuthContext"; //para acceder a nuestras herramientas de autentificacion
import { useNavigate } from "react-router-dom";
import "../styles/components/form.css";

export default function Login() {
  const { login } = useAuth(); //llama a la funcion login de authcontext
  const navigate = useNavigate();

  //los estados 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // para guardar posible mensaje de error

  const onSubmit = async (e) => { // lo que ocurre al pulsar entrar
    e.preventDefault(); // evita que el navegador haga el comportamiento habitual
    setError(""); // borra el mensaje anterior de error para sustituirlo por uno nuevo

    const ok = await login(email, password); // esto llama a la funcion login de authcontext y devuelve verdadero o falso

    if (!ok) {
      setError("Credenciales inválidas"); // compruba si hay errores
      return;
    }

    //comprobamos si el usuario es admin
    const usuarioGuardado = JSON.parse(
      localStorage.getItem("user")
    );

    if (usuarioGuardado?.rol === "ADMINISTRADOR") {
      navigate("/Admin");
    } else {
      navigate("/Cart");
    }
  };

  return (
    <section className="section__form">
      <div className="container">
        <form onSubmit={onSubmit} className="form">
          <h2 className="header__form">
            <strong>Login</strong>
          </h2>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="form__input-wrapper"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            className="form__input-wrapper"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p>{error}</p>}

          <button className="form__button" type="submit">
            Entrar
          </button>
        </form>

        <p className="login__register">
          ¿No tienes cuenta?
          <br />
          <a className="register__login-link" href="/register">
            Crear cuenta
          </a>
        </p>
      </div>
    </section>
  );
}
