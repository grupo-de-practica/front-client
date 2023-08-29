import styled from "styled-components";

import Telefono_Icono from '@/assets/icons/mobile.svg'

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  position: relative;
  margin-top: 15px;
  p {
    position: absolute;
    top: -22px;
    font-size: 16px;
    font-weight: 500;
    left: 0;
  }
`;
const Imagen = styled.img`
  position: absolute;
  height: 18px;
  width: 18px;
  right: 5px;
`;
const Number = styled.input`
  width: 70%;
  height: 100%;
  padding: 0 25.5px 0 5px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16.5px;
  font-family: var(--descripciones);
  font-weight: 500;
  background-color: #ffffff;
  border: 1px solid #6b6b6b;
  border-radius: 5px;
`;
const Prefix = styled.input`
  width: 25%;
  height: 100%;
  padding: 0 5px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16.5px;
  font-family: var(--descripciones);
  font-weight: 500;
  background-color: #ffffff;
  border: 1px solid #6b6b6b;
  border-radius: 5px;
`;

const Numero_Input = () => {
  return (
    <>
      <Label htmlFor="Email">
        <p>Numero telefonico:</p>
        <Imagen src={Telefono_Icono} alt="" />
        <Prefix type="text" id="Email" placeholder="+95" />
        <Number type="text" id="Email" placeholder="848 38232 8384" />
      </Label>
    </>
  );
};

export default Numero_Input;
