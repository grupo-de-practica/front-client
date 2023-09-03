import { useState } from "react";
import styled from "styled-components";

import Mas_Icono from "@/assets/icons/add-outline.svg";
import Menos_Icono from "@/assets/icons/remove-outline.svg";

const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
`;
const Icono = styled.img`
  height: 15px;
  object-fit: cover;
  width: 15px;
`;
const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  cursor: pointer;

  p {
    font-weight: 500;
    font-size: 16.5px;
  }
`;

const AccordionContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 10px;
  background-color: #eeeeee;
`;

const Preguntas = ({ pregunta, respuesta }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        <p>{pregunta}</p>
        <span>
          {!isOpen ? (
            <>
              <Icono src={Mas_Icono} alt="" />
            </>
          ) : (
            <>
              <Icono src={Menos_Icono} alt="" />
            </>
          )}
        </span>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>
        <p>{respuesta}</p>
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Preguntas;
