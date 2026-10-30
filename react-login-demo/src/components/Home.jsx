// src/pages/Home.jsx
export default function Home(){ return (<section 
style={{padding:24}}><h1 
style={{color:'#0d47a1'}}><strong>Home</strong></h1><p>Bienvenido/a.</p
></section>); }
// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react'; import { useAuth } from 
'../context/AuthContext'; import { apiGet } from '../api/api';
export default function Dashboard(){
 const { user, logout } = useAuth(); const 
[secrets,setSecrets]=useState([]);
 useEffect(()=>{ (async ()=>{ setSecrets(await 
apiGet(`/privateData?ownerId=${user.id}`)); })(); }, [user]);
 return (<section style={{padding:24}}><h1 
style={{color:'#0d47a1'}}><strong>Dashboard</strong></h1><p>Hola, 
<strong>{user.name}</strong>.</p><button onClick={logout}>Cerrar 
sesión</button><ul>{secrets.map(s=><li 
key={s.id}>{s.secret}</li>)}</ul></section>);
}
// src/pages/NotFound.jsx
export default function NotFound(){ return (<section 
style={{padding:24}}><h1 
style={{color:'#0d47a1'}}><strong>404</strong></h1><p>Página no 
encontrada.</p></section>); }
