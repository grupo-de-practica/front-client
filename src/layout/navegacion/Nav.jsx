import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";

import Logo_Icono from "@/assets/img/Logo.png";

const Navegacion = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 1.5%;
  background-color: #252525;
  margin: 0 0 30px 0;

`;
const Logo = styled.a`
  height: 35px;
  width: 100px;
  border-radius: 1px;
  cursor: pointer;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
const Contenedor_Enlaces = styled.div`
  display: flex;
  gap: 25px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: linear 0.25s;
  &.active {
    color: var(--icons-color);

    transform: scale(1.20);
  }

  &:not(.active):hover {
    color: #c2dfff;
    transform: scale(1.05);
  }
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
  const navigate = useNavigate();
  const clickIngresar = () => navigate("/ingresar");

  return (
    <>
      <Navegacion>
        <Logo href="/">
          <img src={Logo_Icono} alt="" />
        </Logo>

        <Contenedor_Enlaces>
          <StyledNavLink to="/">Inicio</StyledNavLink>
          <StyledNavLink to="explorar">Explorar</StyledNavLink>
          <StyledNavLink to="informacion">Informacion</StyledNavLink>
          <StyledNavLink to="guardado">Guardado</StyledNavLink>
        </Contenedor_Enlaces>

        <Btn type="button" onClick={clickIngresar}>
          <p>Ingresar</p>
        </Btn>
      </Navegacion>
    </>
  );
};

export default Nav;
