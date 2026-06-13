import "./App.css";
import { Layout } from "./components/layout/layout";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { ContactosPage, InformacionPage, InicioPage, NosotrosPage, PersonajesPage } 
from "./page";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/informacion" element={<InformacionPage />} />
          <Route path="/contactos" element={<ContactosPage />} />
          <Route path="/personajes" element={<PersonajesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
