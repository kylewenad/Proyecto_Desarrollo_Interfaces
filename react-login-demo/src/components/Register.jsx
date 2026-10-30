// src/components/Register.jsx
import { useState } from 'react';
import { apiPost } from '../api/api';
export default function Register(){
 const [name,setName]=useState(''); const 
[email,setEmail]=useState(''); const 
[password,setPassword]=useState('');
 const [ok,setOk] = useState(false);
 const onSubmit = async (e)=>{
 e.preventDefault();
 await apiPost('/users', { name, email, password });
 setOk(true);
 };
 return (
 <form onSubmit={onSubmit} style={{maxWidth:360,margin:'24px auto',display:'grid',gap:8}}>
 <h2 style={{color:'#0d47a1'}}><strong>Registro</strong></h2>
 <label>Nombre</label><input value={name} 
onChange={e=>setName(e.target.value)} required />
 <label>Email</label><input type="email" value={email} 
onChange={e=>setEmail(e.target.value)} required />
 <label>Contraseña</label><input type="password" value={password} 
onChange={e=>setPassword(e.target.value)} required />
 <button>Crear cuenta</button>
 {ok && <p>Usuario creado. ¡Ya puedes iniciar sesión!</p>}
 </form>
 );
}