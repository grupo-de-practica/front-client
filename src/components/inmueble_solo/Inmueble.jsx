import { useState } from "react";
import styled from "styled-components";

import Propiedades_Imagenes from "./Propiedades_Imagenes";
import JSON_Inmueble from "@/utils/JSON/Inmueble.json";
import Carasteristicas_Principales from "./Carasteristicas_Principales";
import Zonas_Cercanas from "./Zonas_Cercanas";
import Principal_Contacto from "./Principal_Contacto";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(30px + 15px);
  width: 100%;
  max-width: 950px;
`;

const Inmueble = () => {
  const [data, setData] = useState(JSON_Inmueble);

  return (
    <>
      {data.map((item) => (
        <Main key={item.id}>
          <Contenedor>
            <Propiedades_Imagenes arraySrcPropiedades={item.images} />
            <Carasteristicas_Principales item={item} />
            <Zonas_Cercanas item={item} />
          </Contenedor>

          <Principal_Contacto item={item} />
        </Main>
      ))}
    </>
  );
};

export default Inmueble;
