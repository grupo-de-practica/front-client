import styled from "styled-components";

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const InputLabel = styled.span`
  color: #333;
  margin-bottom: 5px;
  font-family: var(--descripciones);
  font-weight: 500;
`;

const StyledInput = styled.input`
  padding: 8px 10px;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  outline: none;
  font-family: var(--descripciones);
  &:focus {
    border-color: #007bff;
  }
`;

const Input_Buscar_Pregunta = ({ onChange, value }) => {
  return (
    <InputContainer>
      <InputLabel>¿Tienes una pregunta?</InputLabel>
      <StyledInput
        type="text"
        placeholder="Escribe tu búsqueda aquí"
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Input_Buscar_Pregunta;
