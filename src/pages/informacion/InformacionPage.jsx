import Informacion from "@/components/informacionAcordeon/Informacion";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 100px;
  padding: var(--paddingBody);
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
