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
  padding: 0 20px;
  height: 35px;
  gap: 8px;
  p {
    font-weight: 500;
  }
  img {
    height: 18px;
    width: 18px;
    object-fit: cover;
  }
`;

const Button_Icono = ({ type, onClick, src, texto }) => {
  return (
    <>
      <ButtonStyled type={type} onClick={onClick}>
        <img src={src} />
        <p>{texto}</p>
      </ButtonStyled>
    </>
  );
};

export default Button_Icono;
