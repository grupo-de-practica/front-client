import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "@/layout/navegacion/Nav";

import InicioPage from "./pages/InicioPage";
import IngresarPage from "./pages/IngresarPage";
import RegistrarsePage from "./pages/RegistrarsePage";
import InmueblePage from "./pages/InmueblePage";
import GuardadoPage from "./pages/GuardadoPage";
import InformacionPage from "./pages/InformacionPage";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Nav />

        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/ingresar" element={<IngresarPage />} />
          <Route path="/registrarse" element={<RegistrarsePage />} />
          <Route path="/inmueble/id" element={<InmueblePage />} />
          <Route path="/guardado" element={<GuardadoPage />} />
          <Route path="/informacion" element={<InformacionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
