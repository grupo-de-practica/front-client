import styled from "styled-components";

import Buscar_Icono from "@/assets/icons/search.svg";

const Btn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 38px;
  width: 200px;
  border-radius: 5px;
  padding: 0 10px;
  background-color: var(--icons-color);
  border: none;
  color: white;
  p {
    font-weight: 500;
  }

  img {
    height: 20px;
    width: 20px;
    object-fit: cover;
    position: relative;
    top: 1px;
  }

  @media (max-width: 650px) {
    margin: 25px auto 0 auto;
  }
`;

const Button_Buscar = () => {
  return (
    <>
      <Btn>
        <img src={Buscar_Icono} alt="" />
        <p>Buscar mi propiedad</p>
      </Btn>
    </>
  );
};

export default Button_Buscar;
