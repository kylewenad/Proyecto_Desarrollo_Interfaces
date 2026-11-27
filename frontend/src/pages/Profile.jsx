import { Navigate, useNavigate } from "react-router-dom";
import profile_img from "../assets/profile_img.png"
import '../styles/profile.css';
import { useAuth } from "../context/AuthContext"; 


export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
//Navigate: componente de react router
//useNavigate: es un hook de react router que se utiliza para cambiar de ruta
//en eventos o funciones
  if (!user) {
    return <Navigate to="/login" replace />;
  } 

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
    
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
            <label htmlFor="profile_username">Nombre: </label>
              <input className="profile__input"
                id="profile_username"
                type="text"
                value={user.username}
                readOnly></input>
              </div>

            <div className="campo">
            <label htmlFor="profile_email">Email: </label>
              <input className="profile__input"
                id="profile_email"
                type="text"
                value={user.email}
                readOnly>
              </input>
            </div>

            
           

          </div>
           
        </div>
      </div>
    </section>
    </>
  );
} 


/* NO AÑADIDO TEMPORALMENTE
<div className="campo">
              <label htmlFor="profile_address">Direccion: </label>
              <input className="profile__input"
                id="profile_address"
                type="text"
                value={direccion}
                readOnly/>         
            </div>*/