import styled from "styled-components";

import Inmueble from "@/components/detallesInmueble/Inmueble";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 100px;
  padding: var(--paddingBody);
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
