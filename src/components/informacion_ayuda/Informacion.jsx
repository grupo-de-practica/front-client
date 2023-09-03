import {  useState } from "react";
import styled from "styled-components";

import Input_Buscar_Pregunta from "./Input_Buscar_Pregunta";
import Preguntas from "./Preguntas";

import JSON from "./Preguntas_Respuestas.json";
import LiveChat from "./Chat";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  gap: 35px;


  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
  }

`;

const Contenedor_Question = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 800px;
  background-color: var(--background-white);
  padding: 20px 2% 35px 2%;
  gap: 20px;

  @media (min-width: 600px) {
    border-radius: 10px;
  }
  @media (min-width: 1100px) {
    margin: 0;
  }
`;
const Informacion = () => {
  const [dudas, setDudas] = useState("");
  const [resultados, setResultados] = useState(JSON);

  const onChangeDudas = (e) => {
    const query = e.target.value;
    setDudas(query);
    filterBusqueda(query.toLowerCase());
  };

  const filterBusqueda = (query) => {
    if (query === "") {
      setResultados(JSON);
    } else {
      const filter = JSON.filter((item) => {
        const pregunta = item.pregunta.toLowerCase();
        const respuesta = item.respuesta.toLowerCase();
        return pregunta.includes(query) || respuesta.includes(query);
      });
      setResultados(filter);
    }
  };

  return (
    <>
      <Main>

        <LiveChat/>
        <Contenedor_Question>
          <Input_Buscar_Pregunta onChange={onChangeDudas} value={dudas} />
          {resultados.map((item, index) => (
            <div key={index}>
              <Preguntas pregunta={item.pregunta} respuesta={item.respuesta} />
            </div>
          ))}
        </Contenedor_Question>
      </Main>
    </>
  );
};

export default Informacion;
