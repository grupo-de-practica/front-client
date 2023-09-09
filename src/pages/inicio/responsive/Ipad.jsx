import styled from "styled-components";

import Informacion from "@/components/headerLandingPage/Informacion";
import Filtro from "@/components/filtroLandingPage/Filtro";
import Ofrecemos from "@/components/principalesServicios/Ofrecemos";
import Agregado from "@/components/agregadoRecientemente/Agregado";

const Main = styled.main`
  display: flex;
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 0 0.5%;
`;
const ContenedorHeader = styled.div`
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
const Ipad = () => {
  return (
    <>
      <Main>
        <ContenedorHeader>
          <Informacion />
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

export default Ipad;
