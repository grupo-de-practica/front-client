import styled from "styled-components";

import Imagen_1 from "@/assets/img/pick1.jpg";
import Number_Contador from "./Number_Contador";
import Titulo from "./Titulo";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 769px) {
    flex-direction: row;
   align-items: center;
   justify-content: space-between;
  }
`;
const Contenedor_Desc = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--backgroundSections0);
  border-radius: var(--borderRadiusSection);
  padding: var(--padddingSection);
  width: 100%;
  max-width: 620px;
  gap: 20px;
  @media screen and (min-width: 769px) {
    height: 250px;
  }
`;

const ContenedorImagen = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--backgroundSections0);
  border-radius: var(--borderRadiusSection);
  width: 100%;
  max-width: 650px;
  height: 180px;
  gap: 20px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 769px) {
    height: 250px;
  }
`;

const Informacion = styled.div`
  display: flex;
  margin-top: auto;
  flex-direction: column;
  gap: 15px;

  p {
    color: #3e3e3e;
  }
`;

const Header = () => {
  return (
    <Main>
      <Contenedor_Desc>
        <Titulo />

        <Informacion>
          <p>
            Nuestros agentes son el puente hacia tu nuevo hogar. Siempre aquí
            para disipar tus dudas y hacer realidad tus sueños inmobiliarios.
          </p>

          <Number_Contador />
        </Informacion>
      </Contenedor_Desc>

      <ContenedorImagen>
        <img src={Imagen_1} alt="" />
      </ContenedorImagen>
    </Main>
  );
};

export default Header;
