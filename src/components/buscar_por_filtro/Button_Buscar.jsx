import styled from "styled-components";

import Buscar_Icono from "@/assets/icons/search.svg";

const Btn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 38px;
  width: max-content;
  border-radius: 5px;
  padding: 0 14px 0 12px;
  background-color: var(--icons-color);
  border: none;
  color: white;
  p {
    font-weight: 500;
  }

  img {
    height: 18px;
    width: 18px;
    object-fit: cover;
    position: relative;
    top: 1px;
  }
`;

const Button_Buscar = () => {
  return (
    <>
      <Btn>
        <img src={Buscar_Icono} alt="" />
        <p>Buscar</p>
      </Btn>
    </>
  );
};

export default Button_Buscar;
