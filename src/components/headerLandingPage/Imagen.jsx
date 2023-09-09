import styled from "styled-components";

import Photo from "@/assets/img/pick1.jpg";

const Contenedor = styled.div`
  width: 100%;
  max-width: 550px;
  height: 300px;
  user-select: none;
  overflow: hidden;
  border-radius: 15px;
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(90%);
  }
`;

const Imagen = () => {
  return (
    <Contenedor>
      <img src={Photo} alt="" />
    </Contenedor>
  );
};

export default Imagen;
