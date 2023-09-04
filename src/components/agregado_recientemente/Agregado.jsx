import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Inmueble_Card from "@/utils/Inmueble/Inmueble_card";
import Button_Sin_Icono from "@/utils/buttons/Button_Sin_Icono";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--backgroundSections0);
  border-radius: var(--borderRadiusSection);
  padding: var(--padddingSection);
  gap: 25px;
`;
const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  em {
    font-weight: 600;
    font-size: 23px;
    color: var(--textColor);
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    text-align: left;
    gap: 8px;
    em {
      font-size: 25px;
    }
  }
`;
const Contenedor_Titulo_Button = styled.div`
  @media screen and (min-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
const Contenedor_Inmuebles = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
const Escritorio = styled.div`
  display: none;
  @media screen and (min-width: 769px) {
    display: block;
  }
`;

const Mobile = styled.div`
  @media screen and (min-width: 769px) {
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
          <Titulo>
            <h1>Lugares populares</h1>
            <em>explora</em>
          </Titulo>

          <Escritorio>
            <Button_Sin_Icono
              texto="Ver toda las propiedades"
              type="button"
              onClick={clickExplorar}
            />
          </Escritorio>
        </Contenedor_Titulo_Button>

        <Contenedor_Inmuebles>
          <Inmueble_Card />
          <Inmueble_Card />
          <Inmueble_Card />
          <Inmueble_Card />
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
