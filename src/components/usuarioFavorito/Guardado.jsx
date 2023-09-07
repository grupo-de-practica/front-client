import styled from "styled-components";
import Vista_Inmueble from "./Vista_Inmueble";

const Main = styled.main``;

const Contenedor_Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

  @media (min-width: 650px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
  }
`;

const Guardado = () => {
  return (
    <>
      <Main>
        <Contenedor_Grid>
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
          <Vista_Inmueble />
        </Contenedor_Grid>
      </Main>
    </>
  );
};

export default Guardado;
