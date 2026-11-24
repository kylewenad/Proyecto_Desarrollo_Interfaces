import { useState } from 'react'; 
import { useAuth } from '../context/AuthContext';
import '../styles/components/form.css';


export default function Login() {
    const { login }  = useAuth(''); 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 
    const [error,setError] = useState(''); 
    const onSubmit = async (e)=>{ 
        e.preventDefault(); 
    const ok = await login(email, password); 
    if(!ok) {
        setError('Credenciales inválidas');
    } else { 
        window.location.href='/profile'; 
    }
    };
    return (

    <section className="section__form">
        <div className="container">
            <form onSubmit={onSubmit} className="form"> 
                <h2 className="header__form"><strong>Login</strong></h2> 
                <label>Email</label>
                    <input className="form__input-wrapper" type="email" value={email} onChange={e=>setEmail(e.target.value)} required /> 
                <label>Contraseña</label>
                <input className="form__input-wrapper" type="password" value={password} onChange={e=>setPassword(e.target.value)} required /> 
                {error && <p>{error}</p>} 
                <button className="form__button" type="submit">Entrar</button> 
            </form>
            
            <p className="login__register">
                ¿No tienes cuenta?<br></br>
                    <a className="register__login-link" href="/register">
                        Crear cuenta
                </a>
            </p>          
        </div>
    </section>

)
}