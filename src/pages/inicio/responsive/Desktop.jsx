import styled from "styled-components";

import Imagen from "@/components/headerLandingPage/Imagen";
import Informacion from "@/components/headerLandingPage/Informacion";
import Filtro from "@/components/filtroLandingPage/Filtro";
import Ofrecemos from "@/components/principalesServicios/Ofrecemos";
import Agregado from "@/components/agregadoRecientemente/Agregado";

const Main = styled.main`
  display: flex;
  width: 100%;
  max-width: 1300px;
  margin: 30px auto;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 0 1%;
`;
const ContenedorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
`;
const ContenedorFiltro = styled.div`
  width: 100%;
`;
const ServiciosPrincipales = styled.div`
  width: 100%;
`;
const AgregadoRecientemente = styled.div`
  width: 100%;
`;
const Desktop = () => {
  return (
    <>
      <Main>
        <ContenedorHeader>
          <Informacion />
          <Imagen />
        </ContenedorHeader>

        <ContenedorFiltro>
          <Filtro />
        </ContenedorFiltro>

        <ServiciosPrincipales>
          <Ofrecemos />
        </ServiciosPrincipales>

        <AgregadoRecientemente>
          <Agregado />
        </AgregadoRecientemente>
      </Main>
    </>
  );
};

export default Desktop;
