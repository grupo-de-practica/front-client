import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  z-index: 2;
  .Destacado {
    color: var(--textColor);
  }
`;

const Titulo = () => {
  return (
    <>
      <Contenedor>
        <h1>
          Compra propiedades
          <span className="Destacado"> de la forma más rápida</span>
        </h1>
      </Contenedor>
    </>
  );
};

export default Titulo;
