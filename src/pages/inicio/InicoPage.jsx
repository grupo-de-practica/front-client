import { useState, useEffect } from "react";

import Desktop from "./responsive/Desktop";
import Ipad from "./responsive/Ipad";
import Mobile from "./responsive/Mobile";

const InicoPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(import.meta.env.VITE_LOGIN_ADMIN)
  
  return (
    <>
      {windowWidth >= 1100 && <Desktop />}
      {windowWidth >= 700 && windowWidth < 1100 && <Ipad />}
      {windowWidth < 700 && <Mobile />}
    </>
  );
};

export default InicoPage;
