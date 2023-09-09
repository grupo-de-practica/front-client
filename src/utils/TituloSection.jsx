import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  z-index: 2;
  .Destacado {
    color: var(--textColor);
  }
  @media (max-width: 1000px) {
    justify-content: center;
  }
  @media (max-width: 700px) {
    justify-content: left;
  }
`;

const TituloSection = ({ h1, h1Strong }) => {
  return (
    <>
      <Contenedor>
        <h1>
          {h1}
          <span className="Destacado"> {h1Strong}</span>
        </h1>
      </Contenedor>
    </>
  );
};

export default TituloSection;
