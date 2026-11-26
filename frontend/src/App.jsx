
import { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import NavbarUser from "./components/NavabrUser";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';
import './styles/variables.css';

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("user");

    if (usuarioGuardado) {
      try {
        setUser(JSON.parse(usuarioGuardado));
      } catch (error) {
        console.error("Error al recuperar usuario:", error);
        localStorage.removeItem("usuario");
      }
    }
  }, []);

  return (
    <>
      {user ? <NavbarUser /> : <Navbar />}

      <AppRoutes />

      <Footer />
    </>
  );
}
