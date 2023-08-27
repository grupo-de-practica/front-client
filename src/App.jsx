import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";

import Nav from "@/layout/navegacion/Nav";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Nav />

        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
