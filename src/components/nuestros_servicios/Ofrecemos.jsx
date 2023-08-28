import styled from "styled-components";

import Servicios from "./Servicios";

import Pick1 from "@/assets/img/pick5.jpg";
import Pick2 from "@/assets/img/pick2.jpg";
import Pick3 from "@/assets/img/pick3.jpg";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #252525;
  border-radius: 10px;
  padding: 20px 2% 35px 2%;
  gap: 20px;
  h1 {
    color: white;
  }
`;
const Review = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Ofrecemos = () => {
  return (
    <>
      <Main>
        <h1>¿Perdido en el Mundo Inmobiliario?</h1>

        <Review>
          <Servicios
            name="Asesoramiento"
            desc="Orientación experta para decisiones inmobiliarias inteligentes y seguras."
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
        </Review>
      </Main>
    </>
  );
};

export default Ofrecemos;
