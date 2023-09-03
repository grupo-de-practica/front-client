import styled from "styled-components";

import Guardado from "@/components/usuario_guardado/Guardado";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 100px;
  padding: 0 2.5%;

  @media (max-width: 1000px) {
    padding: 0 1%;
  }
  @media (max-width: 650px) {
    padding: 0;
  }
`;
const GuardadoPage = () => {
  return (
    <>
      <Main>
        <Guardado />
      </Main>
    </>
  );
};

export default GuardadoPage;
