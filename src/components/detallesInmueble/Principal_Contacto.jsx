import { useState } from "react";
import styled from "styled-components";

import Whatsapp_Icono from "@/assets/icons/whatsapp.svg";
import Corazon_Solido from "@/assets/icons/heart_solid.svg";
import Corazon_Outline from "@/assets/icons/heart-outline.svg";

const Position_Fixed = styled.div`
  position: relative;
  border: 1px solid #ddd;
  width: 350px;
  border-radius: 10px;
  height: 500px;

  overflow: hidden;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 30px 20px;
  border-radius: 20px;
`;
const Ubicacion = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
`;
const Guardado = styled.img`
  cursor: pointer;
  height: 30px;
  width: 30px;
  position: absolute;
  right: 18px;
  top: 25px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 40px;
  width: 100%;
  max-width: 250px;
  margin: auto auto 0 auto;

  border-radius: 5px;
  gap: 8px;
  padding: 0 15px;
  background-color: var(--icons-color);
  border: none;
  color: white;

  img {
    height: 25px;
    width: 25px;
  }
  p {
    font-weight: 500;
  }
`;
const Contenedor = styled.div`
  display: flex;
`;

const Principal_Contacto = ({ item }) => {
  const [guardado, setGuardado] = useState(Corazon_Outline);

  const toggleIconGuardado = () =>
    guardado === Corazon_Outline
      ? setGuardado(Corazon_Solido)
      : setGuardado(Corazon_Outline);

  return (
    <>
      <Position_Fixed>
        <Main>
          <Contenedor>
            <Ubicacion>
              <b>{item.addres}</b>
            </Ubicacion>
            <Guardado src={guardado} alt="" onClick={toggleIconGuardado} />
          </Contenedor>

          <Button type="button">
            <img src={Whatsapp_Icono} alt="" />
            <p>Contactar</p>
          </Button>
        </Main>
      </Position_Fixed>
    </>
  );
};

export default Principal_Contacto;
