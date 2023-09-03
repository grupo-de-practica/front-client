import { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  max-width: 300px;
  position: relative;
  
  @media (max-width: 650px) {
    margin: auto;
  }
`;

const Seleccionado = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  cursor: pointer;
  border-left: 1px solid #ddd;
  border-radius: 0 10px 10px 0;
  background-color: white;
  width: 100%;
  gap: 10px;
  padding: 15px 40px 15px 20px;
  img {
    height: 18px;
    width: 18px;
  }

  p {
    font-weight: 500;
  }
  @media (max-width: 650px) {
    border-radius: 10px;
    border: none;
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
  p {
    font-weight: 400;
  }
  img {
    height: 18px;
    width: 18px;
  }
`;

const Select_TipoDeInmueble = ({ data, value, setValue }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible);

  return (
    <>
      <Main>
        <Seleccionado onClick={toggleVisible}>
          <img src={value.icono} alt="" />
          <p>{value.name}</p>
        </Seleccionado>

        {visible && (
          <Contenedor_Opciones>
            {data.map((item, index) => (
              <Opcion key={index} onClick={() => setValue(item)}>
              
                <p>{item.name}</p>
              </Opcion>
            ))}
          </Contenedor_Opciones>
        )}
      </Main>
    </>
  );
};

export default Select_TipoDeInmueble;
