import { useNavigate } from "react-router-dom";
import profile_img from "../assets/profile_img.png"
import '../styles/profile.css';
import { useState } from 'react'; 

export default function ProfileMenu() {
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
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
            <label>Nombre: </label>
              <input className="profile__input"
                type="text"
                value={user}
                readOnly></input>
            <label>Email: </label>
              <input className="profile__input"
                type="text"
                value={email}
                readOnly>
              </input>
            <label>Direccion: </label>
            <input className="profile__input">         
              </input>
            </div>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
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