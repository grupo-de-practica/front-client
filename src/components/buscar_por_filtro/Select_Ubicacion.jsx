import { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  max-width: 300px;
  position: relative;
`;

const Seleccionado = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: white;
  width: 100%;
  gap: 8px;
  border-radius: 15px;
  padding: 14px 15px;
  img {
    height: 18px;
    width: 18px;
  }
  p {
    font-weight: 500;
  }
`;
const Contenedor_Opciones = styled.div`
  display: flex;
  overflow: hidden;
  position: absolute;
  flex-direction: column;
  background-color: white;
  border: 1px solid #ddd;
  width: 95%;
  border-radius: 5px;
  top: 100%;
  margin-top: 10px;
  z-index: 2;
`;
const Opcion = styled.div`
  display: flex;
  padding: 10px 25px;
  gap: 5px;
  cursor: pointer;

  :hover {
    background-color: #ddd;
  }
`;

const Select_Ubicacion = ({ data, value, setValue }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible);

  console.log(value);
  return (
    <>
      <Main>
        <Seleccionado onClick={toggleVisible}>
          <img src={data.icono} alt="" />
          <p>{value}</p>
        </Seleccionado>

        {visible && (
          <Contenedor_Opciones>
            {data.data.map((item, index) => (
              <Opcion key={index} onClick={() => setValue(item)}>
                <p>{item}</p>
              </Opcion>
            ))}
          </Contenedor_Opciones>
        )}
      </Main>
    </>
  );
};

export default Select_Ubicacion;
