import styled from "styled-components";

import Email_Icono from "@/assets/icons/at.svg";

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  position: relative;
  background-color: #ffffff;
  border: 1px solid #6b6b6b;
  padding: 0 25px 0 5px;
  border-radius: 5px;
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
const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 30px 0 5px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16.5px;
  font-family: var(--descripciones);
  font-weight: 500;
`;

const Email_Input = () => {
  return (
    <>
      <Label htmlFor="Email">
        <p>Email:</p>
        <Imagen src={Email_Icono} alt="" />
        <Input type="text" id="Email" placeholder="Correo electronico" />
      </Label>
    </>
  );
};

export default Email_Input;
