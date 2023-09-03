import { useNavigate, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const Main = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 49px;
  background-color: #252525;
  width: 100%; /* Cambiar a 100% para ocupar todo el ancho */
  z-index: 15;
  @media (min-width: 650px) {
    display: none;
  }
`;

const Enlaces_Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  gap: 25px;
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
  justify-content: center;
  border: none;
  background-color: var(--icons-color);
  color: white;
  font-weight: 500;
  height: 35px;
  width: 150px;
  border-radius: 5px;
  padding: 0 15px;
  cursor: pointer;
`;

const variants = {
  open: {
    clipPath: `inset(0 0 0 0)`,
  },

  closed: {
    clipPath: "inset(0 0 0 100%)",
  },
};

const Mobile = () => {
  const navigate = useNavigate();
  const clickIngresar = () => navigate("/ingresar");
  return (
    <>
      <Main
        key="Navegacion_Movil"
        variants={variants}
        initial="closed"
        animate="open"
        exit="closed"
      >
        <Enlaces_Contenedor>
          <StyledNavLink to="/">Inicio</StyledNavLink>
          <StyledNavLink to="explorar">Explorar</StyledNavLink>
          <StyledNavLink to="informacion">Informacion</StyledNavLink>
          <StyledNavLink to="guardado">Guardado</StyledNavLink>

          <Btn type="button" onClick={clickIngresar}>
            <p>Ingresar</p>
          </Btn>
        </Enlaces_Contenedor>
      </Main>
    </>
  );
};

export default Mobile;
