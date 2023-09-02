import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";

import Mobile from "./Mobile";

import Menu_Icono from "@/assets/icons/menu.svg";
import Logo_Icono from "@/assets/img/Logo.png";
import { AnimatePresence } from "framer-motion";

const Navegacion = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 1.5%;
  background-color: #252525;
  margin: 0 0 30px 0;
  position: relative;


  @media (max-width: 650px) {
    border-bottom: 2px solid #343434;
  }
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

  @media (max-width: 650px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: linear 0.25s;
  &.active {
    color: var(--icons-color);

    transform: scale(1.2);
  }

  &:not(.active):hover {
    color: #c2dfff;
    transform: scale(1.05);
  }
`;
const Btn = styled.button`
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
  @media (max-width: 650px) {
    display: none;
  }
`;
const Btn_Menu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    height: 30px;
    width: 30px;
  }
  @media (min-width: 650px) {
    display: none;
  }
`;

const Nav = () => {
  const navigate = useNavigate();
  const [visibleMenu, setVisibleMenu] = useState(false);

  const clickIngresar = () => navigate("/ingresar");
  const toggleMenu = () => setVisibleMenu(!visibleMenu);

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

        <Btn_Menu onClick={toggleMenu}>
          <img src={Menu_Icono} alt="" />
        </Btn_Menu>

        <AnimatePresence>{visibleMenu && <Mobile />}</AnimatePresence>
      </Navegacion>
    </>
  );
};

export default Nav;
