import styled from "styled-components";

import Externo from "../Externo";
import Button_Usuario from "../Button_Usuario";

import Input_Con_Icono from "@/utils/input/Input_Con_Icono";
import Input_Telefono from "@/utils/input/Input_Telefono";

import Email_Icono from "@/assets/icons/at.svg";
import Nombre_Icono from "@/assets/icons/id_card.svg";
import Password_Icono from "@/assets/icons/lock.svg";

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
          <Input_Con_Icono
            htmlAndId="Email"
            labelText="Email:"
            type="text"
            placeHolder="Correo electronico"
            src={Email_Icono}
            // value=""
            // onChange=""
          />

          <Input_Con_Icono
            htmlAndId="Name"
            labelText="Nombre y apellido:"
            type="text"
            placeHolder="Nombre completo"
            src={Nombre_Icono}
            // value=""
            // onChange=""
          />
          
          <Input_Telefono />

          <Input_Con_Icono
            htmlAndId="Password"
            labelText="Contraseña:"
            type="password"
            placeHolder="Contraseña"
            src={Password_Icono}
            // value=""
            // onChange=""
          />
          <Input_Con_Icono
            htmlAndId="Password_Confirm"
            labelText="Confirmar contraseña:"
            type="text"
            placeHolder="Repetir contraseña"
            src={Password_Icono}
            // value=""
            // onChange=""
          />

          <Button_Usuario texto="Crear mi cuenta" />
        </Contenedor_Inputs>

        <Externo texto="Registrarme con google" />
      </Main>
    </>
  );
};

export default Registrarse;
