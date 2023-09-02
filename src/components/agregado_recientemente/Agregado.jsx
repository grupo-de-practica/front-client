import styled from "styled-components";

import Inmueble_Card from "@/utils/Inmueble/Inmueble_card";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ebebeb;
  border-radius: 10px;
  padding: 20px 2% 35px 2%;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
const Contenedor_Titulo_Button = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const Contenedor_Inmuebles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 35px 2.5%;
`;
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 38px;
  width: max-content;
  border-radius: 5px;
  padding: 0 15px;
  background-color: var(--icons-color);
  border: none;
  color: white;
  p {
    font-weight: 500;
  }
`;
const Agregado = () => {
  return (
    <>
      <Main>
        <Contenedor_Titulo_Button>
          <h1>Agregado recientemente</h1>
          <Btn type="button">
            <p>Ver toda las propiedades</p>
          </Btn>
        </Contenedor_Titulo_Button>

        <Contenedor_Inmuebles>
          <Inmueble_Card />
          <Inmueble_Card />
          <Inmueble_Card />
          <Inmueble_Card />
          <Inmueble_Card />
          <Inmueble_Card />
          <Inmueble_Card />
          <Inmueble_Card />
        </Contenedor_Inmuebles>
      </Main>
    </>
  );
};

export default Agregado;
