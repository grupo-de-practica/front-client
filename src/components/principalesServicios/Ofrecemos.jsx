import styled from "styled-components";

import Servicios from "./Servicios";

import Pick1 from "@/assets/img/pick5.jpg";
import Pick2 from "@/assets/img/pick3.jpg";
import Pick3 from "@/assets/img/pick4.jpg";
import TituloSection from "@/utils/TituloSection";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--backgroundSections1);
  border-radius: 15px;
  gap: 20px;
  padding: 15px 25px 25px 25px;
  h1 {
    color: white;
  }
`;
const Contenedor = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px 30px;

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
   justify-items: center;

    > :last-child {
      grid-area: 2 / 1 / 3 / 3;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const Ofrecemos = () => {
  return (
    <>
      <Main>
        <TituloSection h1="¿Estas perdido?" h1Strong="te ayudaremos" />

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
