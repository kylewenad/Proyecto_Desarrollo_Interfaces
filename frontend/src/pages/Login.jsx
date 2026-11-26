import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/components/form.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const ok = await login(email, password);

    if (!ok) {
      setError("Credenciales inválidas");
      return;
    }

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
