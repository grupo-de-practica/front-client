import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #ffffff;
  border: 1px solid #6b6b6b;
  width: 100%;
  height: 35px;
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

`;

const Input_Con_Icono = ({
  htmlAndId,
  labelText,
  type,
  placeHolder,
  src,
  value,
  onChange,
}) => {
  return (
    <>
      <Label htmlFor={htmlAndId}>
        <p>{labelText}</p>
        <Input
          type={type}
          id={htmlAndId}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
        <Imagen src={src} />
      </Label>
    </>
  );
};

export default Input_Con_Icono;
