import styled from "styled-components";
import Button_Buscar from "./Button_Buscar";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ebebeb;
  border-radius: 10px;
  padding: 20px 2%;
  gap: 20px;
`;

const Filtro = () => {
  return (
    <>
      <Main>
        <h1>¡ Encuentra tu casa ideal !</h1>



        <Button_Buscar />
      </Main>
    </>
  );
};

export default Filtro;
