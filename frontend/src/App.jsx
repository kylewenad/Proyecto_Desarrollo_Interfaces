
import { useAuth } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import NavbarUser from "./components/NavabrUser";
import NavbarAdmin from "./components/NavbarAdmin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import "./styles/variables.css";

export default function App() {
  const { user } = useAuth();

  return (
    <>
      {!user ? (
        <Navbar />
      ) : user.rol === "admin" ? (
        <NavbarAdmin />
      ) : (
        <NavbarUser />
      )}

      <AppRoutes />
      <Footer />
    </>
  );
}
