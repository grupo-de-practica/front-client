import styled from "styled-components";

import Agregado from "@/components/agregado_recientemente/Agregado";
import Ofrecemos from "@/components/nuestros_servicios/Ofrecemos";
import Filtro from "@/components/buscar_por_filtro/Filtro";
import Header from "@/components/header/Header";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 100px;
  padding: 0 3.5%;

  @media (max-width: 1000px) {
    padding: 0 1%;
  }
  @media (max-width: 650px) {
    padding: 0;
  }
`;
const Inicio = () => {
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

export default Inicio;
