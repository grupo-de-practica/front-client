import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  border: none;
  color: white;
  background-color: var(--icons-color);
  border-radius: 5px;
  padding: 0 18px;
  height: 30px;
  p {
    font-weight: 500;
  }
`;

const Button_Pequeño = ({ type, onClick, texto }) => {
  return (
    <>
      <ButtonStyled type={type} onClick={onClick}>
        <p>{texto}</p>
      </ButtonStyled>
    </>
  );
};

export default Button_Pequeño;
