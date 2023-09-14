import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import IconsFlecha from "@/assets/icons/chevron-down-outline.svg";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  max-width: 300px;
  min-width: 280px;
  position: relative;
`;
const ContenedorSeleccionado = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  width: 100%;
  gap: 8px;
  border-radius: 0 5px 5px 0;
  padding: 10px 15px;
`;
const Seleccionado = styled.div`
  display: flex;
  gap: 5px;
  p {
    font-weight: 500;
  }
  img {
    height: 18px;
    width: 18px;
  }
`;
const Name = styled.p`
  color: #a0a0a0;
  font-size: 14px;
`;
const Contenedor_Opciones = styled.div`
  display: flex;
  overflow: hidden;
  position: absolute;
  flex-direction: column;
  background-color: white;
  border: 1px solid #f1f1f1;
  width: 100%;
  border-radius: 5px;
  margin-top: 5px;
  top: 100%;
  z-index: 3;
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
const Flecha = styled.img`
  height: 15px;
  width: 15px;
  position: absolute;
  right: 15px;
`;

const Select_Ubicacion = ({ data, value, setValue }) => {
  const outsideClickRef = useRef();
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        outsideClickRef.current &&
        !outsideClickRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Main>
        <ContenedorSeleccionado onClick={toggleVisible} ref={outsideClickRef}>
          <Name>Tipo</Name>
          <Seleccionado>
            <img src={data.icono} alt="" />
            <p>{value}</p>
            <Flecha src={IconsFlecha} alt="Flecha apuntando hacia abajo" />
          </Seleccionado>
        </ContenedorSeleccionado>

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
