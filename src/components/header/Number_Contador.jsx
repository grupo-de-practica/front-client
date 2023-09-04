import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Texto = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  b {
    color: var(--textColor);
    font-size: 24px;
    font-weight: 600;
  }
  p {
    font-weight: 500;
    color: black;
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }
`;

const Number_Contador = () => {
  return (
    <>
      <Contenedor>
        <Texto>
          <b>8.5K</b>
          <p>Propiedades vendidas</p>
        </Texto>

        <Texto>
          <b>6.1k</b>
          <p>Propiedades en venta</p>
        </Texto>
      </Contenedor>
    </>
  );
};

export default Number_Contador;
