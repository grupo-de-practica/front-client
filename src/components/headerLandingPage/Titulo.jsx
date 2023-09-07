import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  em {
    font-weight: 600;
    font-size: 23px;
    color: var(--textColor);
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    text-align: left;
    gap: 8px;
    em {
      font-size: 25px;
    }
  }
`;

const Titulo = () => {
  return (
    <>
      <Contenedor>
        <h1>Compra propiedades</h1>
        <em>de la forma más rápida</em>
      </Contenedor>
    </>
  );
};

export default Titulo;
