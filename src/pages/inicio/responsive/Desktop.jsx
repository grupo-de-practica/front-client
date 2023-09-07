import styled from "styled-components";

import Agregado from "@/components/agregadoRecientemente/Agregado";
import Ofrecemos from "@/components/principalesServicios/Ofrecemos";
import Filtro from "@/components/filtroLandingPage/Filtro";
import Header from "@/components/headerLandingPage/Header";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 100px;
  padding: var(--paddingBody);
`;
const Desktop  = () => {
  return (
    <>
      <Main>
        <Header />
        <Filtro />
        <Ofrecemos />
        <Agregado />
      </Main>
    </>
  );
};

export default Desktop;