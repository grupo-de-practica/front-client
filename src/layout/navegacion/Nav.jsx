import styled from "styled-components";

import Logo_Icono from "@/assets/img/logo_inmobiliaria.jpg";

const Navegacion = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 1.5%;
  background-color: #252525;
  margin: 15px 0 30px 0;
  border-radius: 10px;
`;
const Logo = styled.div`
  height: 35px;
  width: 50px;
  border-radius: 1px;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    top: 9px;
    height: 100%;
    width: 100%;
    transform: scale(2.5);
    object-fit: contain;
  }
`;
const Contenedor_Enlaces = styled.div`
  display: flex;
  gap: 25px;
`;
const Enlaces = styled.a`
  color: white;
`;
const Btn = styled.div`
  display: flex;
  align-items: center;
  border: none;
  background-color: var(--icons-color);
  color: white;
  font-weight: 500;
  height: 30px;
  border-radius: 5px;
  padding: 0 15px;
  cursor: pointer;
`;

const Nav = () => {
  return (
    <>
      <Navegacion>
        <Logo>
          <img src={Logo_Icono} alt="" />
        </Logo>

        <Contenedor_Enlaces>
          <Enlaces href="">Inicio</Enlaces>
          <Enlaces href="">Explorar</Enlaces>
          <Enlaces href="">Informacion</Enlaces>
          <Enlaces href="">Guardado</Enlaces>
        </Contenedor_Enlaces>

        <Btn type="button">
          <p>Ingresar</p>
        </Btn>
      </Navegacion>
    </>
  );
};

export default Nav;
