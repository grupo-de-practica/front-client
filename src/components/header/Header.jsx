import styled from "styled-components";

import Imagen_1 from "@/assets/img/pick1.jpg";

const Main = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 35px;

  @media (max-width: 1000px) {
    gap: 20px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
const Contenedor_Mapa = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: 250px;
  background-color: var(--background-white);
  border-radius: 10px;
  gap: 20px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 650px) {
    height: 250px;
    margin: auto;
    border-radius: 10px;
  }

  @media (max-width: 600px) {
    border-radius: 0;
    height: 250px;
  }


`;
const Contenedor_Desc = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
  background-color: var(--background-white);
  border-radius: 10px;
  padding: 20px 2% 20px 2%;
  gap: 20px;

  @media (max-width: 650px) {
    border-radius: 0;
  }
`;
const Contenedor_Texto = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 28px;
  }
  em {
    font-weight: 500;
    font-size: 24px;
    position: relative;
    left: -5px;
  }
`;
const Informacion = styled.div`
  display: flex;
  margin-top: auto;
  flex-direction: column;
  gap: 15px;

  p {
    color: #3e3e3e;
  }
`;
const Contenedor_Contador = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: end;
    gap: 10px;
    b {
      color: var(--icons-color);
      font-size: 26px;
    }
    p {
      font-weight: 500;
      font-size: 18px;
      color: #3e3e3e;
    }
  }
  @media (max-width: 650px) {
    div {
      p {
        font-size: 15px;
      }
    }
  }
`;

const Header = () => {
  return (
    <Main>
      <Contenedor_Desc>
        <Contenedor_Texto>
          <h1>Compra propiedades</h1>
          <em>de la forma más rápida</em>
        </Contenedor_Texto>
        <Informacion>
          <p>
            Nuestros agentes son el puente hacia tu nuevo hogar. Siempre aquí
            para disipar tus dudas y hacer realidad tus sueños inmobiliarios.
          </p>
          <Contenedor_Contador>
            <div>
              <b>8.5K</b>

              <p>Propiedades vendidas</p>
            </div>

            <div>
              <b>6.1k</b>

              <p>Propiedades en venta</p>
            </div>
          </Contenedor_Contador>
        </Informacion>
      </Contenedor_Desc>

      <Contenedor_Mapa>
        <img src={Imagen_1} alt="" />
      </Contenedor_Mapa>
    </Main>
  );
};

export default Header;
