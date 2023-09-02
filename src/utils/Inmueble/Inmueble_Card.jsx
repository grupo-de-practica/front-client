import styled from "styled-components";

import Imagen1 from "@/assets/casa/1.webp";
import Imagen2 from "@/assets/casa/2.webp";
import Imagen3 from "@/assets/casa/3.webp";

import Ubicacion_Icono from "@/assets/icons/ubicacion.svg";
import Bath_Icono from "@/assets/icons/bath.svg";
import Room_Icono from "@/assets/icons/room.svg";
import Superficie_Icono from "@/assets/icons/superficie_util.svg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  overflow: hidden;
  gap: 5px;
  background-color: white;
`;
const Iconos = styled.img`
  height: 18px;
  width: 18px;
`;
const Imagen = styled.a`
  width: 100%;
  height: 100%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Informacion = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  gap: 10px;
`;
const Contenedor_Precio_Ubicacion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const Precio = styled.b`
  color: var(--icons-color);
`;
const Ubicacion = styled.div`
  display: flex;
  align-items: center;
  height: 22px;
  padding: 0 4px;
  gap: 3px;
  p {
    color: grey;
  }
`;
const Contenedor_Adicional = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 5px;
  border-top: 1px solid #ddd;
`;
const Datos = styled.div`
  display: flex;
  align-items: end;
  height: 20px;
  gap: 2.5px;
  p {
    font-size: 15px;
    white-space: nowrap;
    font-weight: 500;
  }
`;

const Inmueble_Card = () => {
  const ArrayImagen = [Imagen1, Imagen2, Imagen3];

  return (
    <>
      <Main>
        <Imagen href='/inmueble/id'>
          <img src={ArrayImagen[0]} alt="" />
        </Imagen>
        <Informacion>
          <Contenedor_Precio_Ubicacion>
            <Precio className="precio">$93,000</Precio>

            <Ubicacion>
              <Iconos src={Ubicacion_Icono} alt="" />
              <p>Asturias 77, Santiago, Las Condes</p>
            </Ubicacion>
          </Contenedor_Precio_Ubicacion>

          <Contenedor_Adicional>
            <Datos>
              <Iconos src={Bath_Icono} alt="" />
              <p>2 Baños</p>
            </Datos>

            <Datos>
              <Iconos src={Room_Icono} alt="" />
              <p>3 Habitaciones</p>
            </Datos>

            <Datos>
              <Iconos src={Superficie_Icono} alt="" />
              <p>83.59 mt</p>
            </Datos>
          </Contenedor_Adicional>
        </Informacion>
      </Main>
    </>
  );
};

export default Inmueble_Card;
