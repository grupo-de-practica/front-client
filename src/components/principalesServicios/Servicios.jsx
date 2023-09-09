import styled from "styled-components";

import Flecha_Icono from "@/assets/icons/flecha.svg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  background-color: #3d3d3c;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  b,
  p {
    color: white;
  }
`;
const Contenedor_Texto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 15px 5px 15px;

  .class {
    font-weight: 600;
    font-size: 18px;
  }
`;
const Imagen = styled.div`
  aspect-ratio: 16/9;
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-top: auto;
  clip-path: polygon(
    0% 15%,
    5% 5%,
    15% 0%,
    85% 0%,
    95% 5%,
    100% 15%,
    100% 100%,
    0 100%
  );
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  bottom: 5px;
  right: 5px;
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
          <p className="class">{name}</p>
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
