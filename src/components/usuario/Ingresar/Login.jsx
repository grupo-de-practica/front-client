import styled from "styled-components";

import Externo from "../Externo";
import Email_Input from "../Email_Input";
import Password_Input from "../Password_Input";
import Button_Usuario from "../Button_Usuario";

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
const Olvidaste = styled.div`
  display: flex;
  justify-content: space-between;

  a,
  p {
    font-size: 15px;
  }

  a {
    color: black;
  }
`;
const Crear = styled.a`
  text-align: right;
  color: var(--icons-color);
  margin-top: 10px;
`;

const Login = () => {
  return (
    <>
      <Main>
        <h1>Ingresar</h1>

        <Crear href="/registrarse">Crear cuenta</Crear>

        <Contenedor_Inputs>
          <Email_Input />
          <Password_Input  placeHolder='Repetir contraseña'/>
          <Button_Usuario texto="Iniciar" />

          <Olvidaste>
            <p>¿Olvidaste tu contraseña?</p>
            <a href="">Recuperar</a>
          </Olvidaste>
        </Contenedor_Inputs>

        <Externo texto='Iniciar con google'/>
      </Main>
    </>
  );
};

export default Login;
