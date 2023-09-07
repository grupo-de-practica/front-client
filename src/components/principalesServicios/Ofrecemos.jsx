import styled from "styled-components";

import Servicios from "./Servicios";

import Pick1 from "@/assets/img/pick5.jpg";
import Pick2 from "@/assets/img/pick2.jpg";
import Pick3 from "@/assets/img/pick3.jpg";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--backgroundSections1);
  border-radius: var(--borderRadiusSection);
  padding: var(--padddingSection);
  gap: 20px;
  h1 {
    color: white;
  }
`;

const Titulo = styled.div`
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

const Contenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 25px 0;
  margin-bottom: 10px;
`;

const Ofrecemos = () => {
  return (
    <>
      <Main>
        <Titulo>
          <h1>¿Estas perdido?</h1>
          <em>te ayudaremos</em>
        </Titulo>

        <Contenedor>
          <Servicios
            name="Asesoramiento"
            desc="Te guiaremos desde el principio."
            href="/"
            img={Pick1}
          />
          <Servicios
            name="Financiamiento"
            desc="Facilitamos opciones financieras adaptadas a tus necesidades de inversión."
            href="/"
            img={Pick2}
          />
          <Servicios
            name="Compra"
            desc="Encuentra tu hogar ideal con nuestra ayuda en cada paso."
            href="/"
            img={Pick3}
          />
        </Contenedor>
      </Main>
    </>
  );
};

export default Ofrecemos;
