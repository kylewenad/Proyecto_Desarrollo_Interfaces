// src/components/Login.jsx
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
export default function Login(){
 const { login } = useAuth();
 const [email,setEmail] = useState(''); const [password,setPassword] = 
useState('');
 const [error,setError] = useState('');
 const onSubmit = async (e)=>{
 e.preventDefault();
 const ok = await login(email, password);
 if(!ok) setError('Credenciales inválidas'); else 
window.location.href='/dashboard';
 };
 return (
 <form onSubmit={onSubmit} style={{maxWidth:360,margin:'24px auto',display:'grid',gap:8}}>
 <h2 style={{color:'#0d47a1'}}><strong>Login</strong></h2>
 <label>Email</label><input type="email" value={email} 
onChange={e=>setEmail(e.target.value)} required />
 <label>Contraseña</label><input type="password" value={password} 
onChange={e=>setPassword(e.target.value)} required />
 {error && <p style={{color:'crimson'}}>{error}</p>}
 <button>Entrar</button>
 </form>
 );
}
