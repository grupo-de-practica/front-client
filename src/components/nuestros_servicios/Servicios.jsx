import styled from "styled-components";

import Flecha_Icono from "@/assets/icons/flecha.svg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 340px;
  background-color: #3d3d3c;
  border-radius: 5px;

  position: relative;
  b,
  p {
    color: white;
  }
`;
const Contenedor_Texto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 12px 18px;
  height: 80px;
`;
const Imagen = styled.div`
  aspect-ratio: 16/9;
  width: 100%;
  height: 180px;
  clip-path: polygon(5% 0, 95% 0, 100% 10%, 100% 100%, 0 100%, 0 10%);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Background = styled.div`
  display: flex;
  justify-content: right;
  align-items: end;
  position: absolute;
  border-radius: 50% 0 0 0;
  background-color: #252525;
  width: 60px;
  height: 60px;
  bottom: 0;
  right: 0;
`;
const Enlace = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3d3d3c;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  img {
    height: 18px;
    width: 18px;
    transform: rotate(45deg);
  }
`;

const Servicios = ({ name, desc, href, img }) => {
  return (
    <>
      <Main>
        <Contenedor_Texto>
          <b>{name}</b>
          <p>{desc}</p>
        </Contenedor_Texto>

        <Imagen>
          <img src={img} alt="" />
        </Imagen>

        <Background>
          <Enlace href={href}>
            <img src={Flecha_Icono} alt="" />
          </Enlace>
        </Background>
      </Main>
    </>
  );
};

export default Servicios;
