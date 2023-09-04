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
  padding: var(--paddingBody);
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
