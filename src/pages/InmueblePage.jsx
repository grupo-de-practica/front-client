import styled from "styled-components";

import Inmueble from "@/components/inmueble_solo/Inmueble";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 100px;
  padding: 0 4.5%;
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
