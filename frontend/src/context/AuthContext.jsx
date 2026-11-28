import { createContext, useContext, useEffect, useState } from "react";
import { apiPost } from "../services/api";

const AuthContext = createContext();//Creamos un contexto

export const useAuth = () => useContext(AuthContext);//Creamos una constante llamada useAuth y la exportamos

export function AuthProvider({ children }) {//contendor que proporciona los datos que contiene
  const [user, setUser] = useState(null);//crear estados de user y token
  const [token, setToken] = useState(null);

  useEffect(() => { //para recuperar la sesión
    const savedUser = localStorage.getItem("user");//buscamos si existe dato user en el almacenamiento
    const savedToken = localStorage.getItem("token");
    if (savedUser) setUser(JSON.parse(savedUser));//comprobar si existe el usuario
    if (savedToken) setToken(savedToken);
  }, []);

  const login = async (email, password) => {
    try {
      const data = await apiPost("/login", { email, password });//función que realiza petición POST a nuestra API

      if (!data?.usuario || !data?.token) {//comprobamos si no existe el usuario o el token
        return false;//no se inicia sesion
      }

      setUser(data.usuario);//actualizamos el estado de user
      setToken(data.token);
      localStorage.setItem("user", JSON.stringify(data.usuario));//guarda el usuario en el alamacenamiento del navefador , localStorage almacena en formato string
      localStorage.setItem("token", data.token);
      return true;// si se inica sesión
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      return false;
    }
  };

  const logout = () => { //para cerrar sesión
    setUser(null);//actualizamos los estados a nulo
    setToken(null);
    localStorage.removeItem("user"); //y eliminamos lo que tenemos almacenado
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}> 
      {children}
    </AuthContext.Provider>
  );
}