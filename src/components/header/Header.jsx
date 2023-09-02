import styled from "styled-components";

import Imagen_1 from "@/assets/img/pick1.jpg";

const Main = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 35px;
`;
const Contenedor_Mapa = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: 250px;
  background-color: #ebebeb;
  border-radius: 10px;
  gap: 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const Contenedor_Desc = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  background-color: #ebebeb;
  border-radius: 10px;
  padding: 20px 2% 20px 2%;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
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
