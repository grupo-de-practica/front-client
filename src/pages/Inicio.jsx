import styled from "styled-components";

import Agregado from "@/components/agregado_recientemente/Agregado";
import Ofrecemos from "@/components/nuestros_servicios/Ofrecemos";
import Filtro from "@/components/buscar_por_filtro/Filtro";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Inicio = () => {
  return (
    <>
      <Main>
        <Filtro />
        <Ofrecemos/>
        <Agregado />
      </Main>
    </>
  );
};

export default Inicio;
