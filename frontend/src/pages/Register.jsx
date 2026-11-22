import { useState } from 'react'; 
import { apiPost } from '../services/api';
import Mocasines from '../assets/mocasines.png';
import '../styles/components/form.css';

export default function Register(){ 
const [username,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState(''); 
const [ok,setOk] = useState(false); 

const onSubmit = async (e)=>{ 
  e.preventDefault(); 
  await apiPost('/crearUsuario', { username, email, password }); 
  setOk(true); 
};return (
    <>
    <section className="register">
        <div className="register__container">
          <form onSubmit={onSubmit} className="register__form"> 
            <h2 className="register__header"><strong>Registro</strong></h2> 
          
            <label>Nombre</label>                          
              <input className="register__input-wrapper" value={username} onChange={e=>setName(e.target.value)} required /> 
            <label>Email</label>            
              <input className="register__input-wrapper" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />           
           <label>Contraseña</label>
              <input className="register__input-wrapper" type="password" value={password} onChange={e=>setPassword(e.target.value)} required /> 
          
          <button className="register__button">Crear cuenta</button> 
          {ok && <p>Usuario creado. ¡Ya puedes iniciar sesión!</p>} 
          </form>
          <p className="login__register">
            ¿Ya tienes cuenta?<br></br>
              <a className="register__login-link" href="login.html">
                Inicia sesión aquí
              </a>
          </p>
        </ div>
    </ section>
    </> 
); 
} 
/*     
          <header class="register__header">
            <h1 class="register__title">Regístrate</h1>

            <p class="register__subtitle">
              Crea una nueva cuenta en ZapStep
            </p>
          </header>

          <form className="register__form" id="registerForm">
            <div class="register__input-wrapper">
            <i class="fa-solid fa-user"></i>
            <input
                class="register__input"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Introduce tu nombre"
                required
        />
      </div>
      
      <div class="register__input-wrapper">
        <i class="fa-solid fa-envelope"></i>
          <input
            class="register__input"
            type="email"
            id="email"
            name="email"
            placeholder="Introduce tu email"
            required
          />
      </div>

      <div class="register__input-wrapper">
        <i class="fa-solid fa-lock"></i>
          <input
            class="register__input"
            type="password"
            id="password"
            name="password"
            placeholder="Introduce tu contraseña"
            required
          />
      </div>

      <button class="register__button" type="submit">Crear cuenta</button>

      
    </form>



   */