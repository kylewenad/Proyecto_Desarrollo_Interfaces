import { useNavigate } from "react-router-dom";
import profile_img from "../assets/profile_img.png"
import '../styles/profile.css';
import { useState } from 'react'; 

export default function ProfileMenu() {
  const [user] = useState("");
  const [email] = useState("");
  const [direccion] = useState("");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <section className="section__profile">
      <div className="container__profile">

        <div className="aside__profile">
          <button className="aside__button" onClick={() => navigate("/profile")}>
            👤 DATOS PERSONALES
          </button>

          <button className="aside__button" onClick={() => navigate("/pedidos")}>
            🛒 MIS PEDIDOS
          </button>

          <button className="aside__button" onClick={() => navigate("/contact")}>
            🎫 MIS CONSULTAS
          </button>

          <button className="aside__button" onClick={logout}>
            🚪 CERRAR SESIÓN
          </button>
        </div>

        <div className="info__profile">
          <div className="profile__titulo">
            <h2>PERFIL</h2>
            <img src={profile_img} alt="imagen por defecto del perfil"/>
          </div>
          <div className="profile__data">

            <div className="campo">
            <label>Nombre: </label>
              <input className="profile__input"
                type="text"
                value={user}
                readOnly></input>
              </div>

            <div className="campo">
            <label>Email: </label>
              <input className="profile__input"
                type="text"
                value={email}
                readOnly>
              </input>
            </div>

            <div className="campo">
              <label>Direccion: </label>
              <input className="profile__input"
                type="text"
                value={direccion}
                readOnly/>         
            </div>
            <div className="profile__actions">
              <button className="profile__edit-btn">EDITAR PERFIL</button>
            </div>

          </div>
           
        </div>
      </div>
    </section>
  );
} /*<label>Direccion: </label>
              <input className="profile__input"
                type="text"
                value={direccion}
                readOnly>         
              </input>*/