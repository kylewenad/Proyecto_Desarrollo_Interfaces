import { useState } from 'react'; 
import { apiPost } from '../services/api';
import '../styles/components/form.css';

export default function Register(){ 
  //creamos los estados
const [username,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState(''); 
const [ok,setOk] = useState(false); // esto cuando creamos la cuenta se volvera true

const onSubmit = async (e)=>{  //enviar formulario
  e.preventDefault(); 
  await apiPost('/crearUsuario', { username, email, password }); 
  setOk(true); //cambiamos estado a true
};return (
    <>
    <section className="section__form">
        <div className="container">
          <form onSubmit={onSubmit} className="form"> 
            <h2 className="header__form"><strong>Registro</strong></h2> 
          
            <label>Nombre</label>                          
              <input className="form__input-wrapper" value={username} onChange={e=>setName(e.target.value)} required /> 
            <label>Email</label>            
              <input className="form__input-wrapper" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />           
           <label>Contraseña</label>
              <input className="form__input-wrapper" type="password" value={password} onChange={e=>setPassword(e.target.value)} required /> 
          
          <button className="form__button">Crear cuenta</button> 
          {ok && <p>Usuario creado. ¡Ya puedes iniciar sesión!</p>} 
          </form>
          <p className="login__register">
            ¿Ya tienes cuenta?<br></br>
              <a className="register__login-link" href="/login">
                Inicia sesión aquí
              </a>
          </p>
        </ div>
    </ section>
    </> 
); 
} 
