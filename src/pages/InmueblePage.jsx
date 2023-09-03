import styled from "styled-components";

import Inmueble from "@/components/inmueble_solo/Inmueble";

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

const InmueblePage = () => {
  return (
    <>
      <Main>
        <Inmueble />
      </Main>
    </>
  );
};

export default InmueblePage;
