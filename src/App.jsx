import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "@/layout/navegacion/Nav";

import InicioPage from "./pages/InicioPage";
import IngresarPage from './pages/IngresarPage'
import RegistrarsePage from "./pages/RegistrarsePage";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Nav />

        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/ingresar" element={<IngresarPage />} />
          <Route path="/registrarse" element={<RegistrarsePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
