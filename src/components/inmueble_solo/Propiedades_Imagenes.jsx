import { useState } from "react";
import styled from "styled-components";

import Flecha_Icono from "@/assets/icons/flecha_imagenes.svg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--background-white);
  overflow: hidden;
  border-radius: 10px ;
`;
const Image = styled.div`
  display: block;
  aspect-ratio: 16/9;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const AllImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-gap: 20px;
  position: relative;
  border-radius: 10px;
  padding: 25px 30px;
`;
const Vista_previa = styled.div`
  height: 80px;
  width: 80px;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  margin:auto;
  img {
    transition: 0.15s ease-in;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  :hover {
    img {
      transform: scale(1.15);
    }
  }
`;
const Flecha_izquierda = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 30px;
  z-index: 1;
  left: 0;
  top: 0;
  img {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;
const Flecha_derecha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 30px;
  z-index: 1;
  right: 0;
  top: 0;
  img {
    height: 30px;
    width: 30px;
    transform: rotate(180deg);
    cursor: pointer;
  }
`;

const Propiedades_Imagenes = ({ arraySrcPropiedades }) => {
  const srcPropiedades = arraySrcPropiedades.filter(
    (item) => item.type === "property"
  );

  const derecha = () => setTodaLasImagenes(srcPropiedades.slice(7, 14));
  const izquierda = () => setTodaLasImagenes(srcPropiedades.slice(0, 7));

  const [todaLasImagenes, setTodaLasImagenes] = useState(
    srcPropiedades.slice(0, 7)
  );
  const [clickImage, setClickImage] = useState(srcPropiedades[0].name);
  return (
    <>
      <Main>
        <Image>
          <img src={clickImage} alt="" />
        </Image>

        <AllImages>
          <Flecha_izquierda onClick={izquierda}>
            <img src={Flecha_Icono} alt="" />
          </Flecha_izquierda>
          <Flecha_derecha onClick={derecha}>
            <img src={Flecha_Icono} alt="" />
          </Flecha_derecha>

          {todaLasImagenes.map((item) => (
            <Vista_previa
              key={item.id}
              onClick={() => setClickImage(item.name)}
            >
              <img src={item.name} alt="" />
            </Vista_previa>
          ))}
        </AllImages>
      </Main>
    </>
  );
};

export default Propiedades_Imagenes;
