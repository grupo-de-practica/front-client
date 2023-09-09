import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Inmueble_Card from "@/utils/Inmueble/Inmueble_card";
import Button_Sin_Icono from "@/utils/buttons/Button_Sin_Icono";
import TituloSection from "@/utils/TituloSection";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--backgroundSections0);
  border-radius: 15px;
  gap: 20px;
  padding: 15px 25px 25px 25px;
`;
const Contenedor_Titulo_Button = styled.div`
  @media screen and (min-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
const Contenedor_Inmuebles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 10px;
  width: 100%;

  @media (max-width: 700px) {
    > :last-child {
      display: none;
    }
  }
`;
const FilaInmueble = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0 30px;

  @media (max-width: 1200px) {
    > :last-child {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-items: center;
    align-items: center;
    > :last-child {
      display: block;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const Escritorio = styled.div`
  display: none;
  @media (min-width: 1001px) {
    display: block;
  }
`;

const Mobile = styled.div`
  margin: auto;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
const Agregado = () => {
  const navigate = useNavigate();
  const clickExplorar = () => navigate("/explorar");

  return (
    <>
      <Section>
        <Contenedor_Titulo_Button>
          <TituloSection h1="Inmuebles" h1Strong="populares" />

          <Escritorio>
            <Button_Sin_Icono
              texto="Ver toda las propiedades"
              type="button"
              onClick={clickExplorar}
            />
          </Escritorio>
        </Contenedor_Titulo_Button>

        <Contenedor_Inmuebles>
          <FilaInmueble>
            <Inmueble_Card />
            <Inmueble_Card />
            <Inmueble_Card />
            <Inmueble_Card />
          </FilaInmueble>

          <FilaInmueble>
            <Inmueble_Card />
            <Inmueble_Card />
            <Inmueble_Card />
            <Inmueble_Card />
          </FilaInmueble>
        </Contenedor_Inmuebles>

        <Mobile>
          <Button_Sin_Icono
            texto="Ver toda las propiedades"
            type="button"
            onClick={clickExplorar}
          />
        </Mobile>
      </Section>
    </>
  );
};

export default Agregado;
