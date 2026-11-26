import { createContext, useContext, useEffect, useState } from "react";
import { apiPost } from "../services/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedToken) setToken(savedToken);
  }, []);

  const login = async (email, password) => {
    try {
      const data = await apiPost("/login", { email, password });

      if (!data?.usuario || !data?.token) {
        return false;
      }

      setUser(data.usuario);
      setToken(data.token);
      localStorage.setItem("user", JSON.stringify(data.usuario));
      localStorage.setItem("token", data.token);
      return true;
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}