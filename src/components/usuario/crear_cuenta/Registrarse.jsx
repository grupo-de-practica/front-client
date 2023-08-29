import styled from "styled-components";

import Externo from "../Externo";
import Email_Input from "../Email_Input";
import Password_Input from "../Password_Input";
import Button_Usuario from "../Button_Usuario";
import Numero_Input from "../Numero_Input";
import Nombre_Input from "../Nombre_Input";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  padding: 20px 20px 35px 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 12px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }
`;
const Contenedor_Inputs = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 35px 0 0 0;
`;

const Crear = styled.a`
  text-align: right;
  color: var(--icons-color);
  margin-top: 10px;
`;

const Registrarse = () => {
  return (
    <>
      <Main>
        <h1>Crear cuenta</h1>

        <Crear href="/ingresar">Ingresar</Crear>

        <Contenedor_Inputs>
          <Email_Input />
          <Nombre_Input />
          <Numero_Input />
          <Password_Input placeHolder="Contraseña" />
          <Password_Input placeHolder="Repetir contraseña" />
          <Button_Usuario texto="Crear mi cuenta" />
        </Contenedor_Inputs>

        <Externo texto="Registrarme con google" />
      </Main>
    </>
  );
};

export default Registrarse;
