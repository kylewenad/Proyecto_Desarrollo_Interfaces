// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { apiGet } from '../api/api';
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export function AuthProvider({children}){
 const [user, setUser] = useState(null);
 useEffect(()=>{
 const s = localStorage.getItem('user');
 if (s) setUser(JSON.parse(s));
 },[]);
 const login = async (email, password)=>{
 const users = await 
apiGet(`/users?email=${encodeURIComponent(email)}`);
 const u = users[0];
 if (u && u.password === password){
 setUser(u); localStorage.setItem('user', JSON.stringify(u)); 
return true;
 }
 return false;
 };
 const logout = ()=>{ setUser(null); localStorage.removeItem('user'); 
};
 return <AuthContext.Provider value={{user, login, 
logout}}>{children}</AuthContext.Provider>;
}
