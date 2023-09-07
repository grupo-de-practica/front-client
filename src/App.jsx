import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "@/layout/navegacion/Nav";

import InicioPage from "./pages/inicio/InicoPage";
import InmueblePage from "./pages/inmueble/InmueblePage";
import InformacionPage from "./pages/informacion/InformacionPage";
import GuardadoPage from "./pages/guardado/GuardadoPage";
import IngresarPage from "./pages/ingresar/IngresarPage";
import RegistrarsePage from "./pages/registrarse/RegistrarsePage";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Nav />

        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/inmueble/id" element={<InmueblePage />} />
          <Route path="/informacion" element={<InformacionPage />} />
          <Route path="/guardado" element={<GuardadoPage />} />
          <Route path="/ingresar" element={<IngresarPage />} />
          <Route path="/registrarse" element={<RegistrarsePage />} />
          {/* <Route path="/recuperar" element={<Aun no existe />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
