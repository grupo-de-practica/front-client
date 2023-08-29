import styled from "styled-components";


const Btn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 100%;
  border-radius: 5px;
  background-color: var(--icons-color);
  border: none;
  color: white;
  margin-top: 15px;
  p {
    font-weight: 500;
  }

 
`;

const Button_Usuario = ({texto}) => {
  return (
    <>
      <Btn type="submit">
        <p>{texto}</p>
      </Btn>
    </>
  );
};

export default Button_Usuario;
