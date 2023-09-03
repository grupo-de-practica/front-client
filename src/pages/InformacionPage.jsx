import Informacion from "@/components/informacion_ayuda/Informacion";
import styled from "styled-components";

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

const InformacionPage = () => {
  return (
    <>
      <Main>
        <Informacion />
      </Main>
    </>
  );
};

export default InformacionPage;
