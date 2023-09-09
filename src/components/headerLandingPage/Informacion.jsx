import styled from "styled-components";

import PhotoLlaves from "@/assets/img/pick2.jpg";
import Blobmaker from "@/assets/blob/headerLlaves.svg";
import TituloSection from "@/utils/TituloSection";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--backgroundSections0);
  border-radius: 15px;
  padding: 15px 25px;
  position: relative;
`;
const Historia = styled.p`
  color: #505050;
  margin: 15px 0 0 0;
  z-index: 2;

  @media (max-width: 1100px) {
    margin: 15px 0
  }
`;
const Imagen = styled.div`
  background: black;
  width: 200px;
  height: 200px;
  mask: url(${Blobmaker});
  mask-size: cover;
  overflow: hidden;
  z-index: 1;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 0;
  img {
    z-index: 2;
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(90%);
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const Informacion = () => {
  return (
    <Main>
      <TituloSection
        h1="Compra propiedades"
        h1Strong="de la forma más rápida"
      />

      <Historia>
        Si no sabes por dónde comenzar, nuestros agentes te guiarán paso a paso
        para que encuentres tu hogar ideal y hagas realidad tus sueños
        inmobiliarios.
      </Historia>

      <Imagen>
        <img src={PhotoLlaves} alt="" />
      </Imagen>

      <Contenedor>
        <ContenedorTexto>
          <Number>6.5K</Number>
          <Negritas>Inmuebles vendidos</Negritas>
        </ContenedorTexto>

        <ContenedorTexto>
          <Number>10</Number>
          <Negritas>Años en la indrustia</Negritas>
        </ContenedorTexto>
      </Contenedor>
    </Main>
  );
};

export default Informacion;

const Contenedor = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  z-index: 2;
`;
const ContenedorTexto = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Number = styled.b`
  color: var(--textColor);
  font-weight: 600;
  font-size: 25.5px;
`;
const Negritas = styled.p`
  font-size: 18.5px;
`;
