import { useState } from "react";
import styled from "styled-components";

import Select_Ubicacion from "./Select_Ubicacion";
import Select_TipoDeInmueble from "./Select_TipoDeInmueble";
import Select_RangoDePrecio from "./Select_RangoDePrecio";
import Button_Buscar from "./Button_Buscar";

import Ubicacion_Icono from "@/assets/icons/ubicacion.svg";
import Departamento_Icono from "@/assets/icons/apartment.svg";
import Casa_Icono from "@/assets/icons/house.svg";
import Dolar_Icono from "@/assets/icons/money.svg";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 20px 2% 35px 2%;
  gap: 20px;
`;
const Contenedor_Button_Filtros = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Contenedor_Filtros = styled.div`
  display: flex;
  width: 100%;
`;
const Titulo = styled.div`
  display: flex;
  gap: 8px;
  h1 {
    font-size: 28px;

  }
  em {
    font-size: 26px;
    color: var(--icons-color);
    font-weight: 500;
  }
`;

const Filtro = () => {
  const ubicacionArray = {
    icono: Ubicacion_Icono,
    data: [
      "Ciudad de México, México",
      "Nueva York, Estados Unidos",
      "París, Francia",
      "Tokio, Japón",
      "Sídney, Australia",
      "Roma, Italia",
      "Río de Janeiro, Brasil",
      "Cairo, Egipto",
    ],
  };

  const tipoDeInmueble = [
    { name: "Departamento", icono: Departamento_Icono },
    { name: "Casa", icono: Casa_Icono },
  ];

  const rangoDePrecio = {
    icono: Dolar_Icono,
    data: [
      "10.000 - 50.000",
      "50.001 - 100.000",
      "100.001 - 150.000",
      "150.001 - 200.000",
    ],
  };

  const [ubicacionSeleccionado, setUbicacionSeleccionado] = useState(
    ubicacionArray.data[0]
  );
  const [tipoSeleccionado, setTipoSeleccionado] = useState(tipoDeInmueble[0]);
  const [rangoSeleccionado, setRangoSeleccionado] = useState(
    rangoDePrecio.data[0]
  );

  return (
    <>
      <Main>
        <Titulo>
        <h1>¡ Encuentra tu</h1>
        <em>hogar ideal </em>
        <h1> ! </h1>
        </Titulo>

        <Contenedor_Button_Filtros>
          <Contenedor_Filtros>
            <Select_Ubicacion
              data={ubicacionArray}
              value={ubicacionSeleccionado}
              setValue={setUbicacionSeleccionado}
            />
            <Select_TipoDeInmueble
              data={tipoDeInmueble}
              value={tipoSeleccionado}
              setValue={setTipoSeleccionado}
            />

            <Select_RangoDePrecio
              data={rangoDePrecio}
              value={rangoSeleccionado}
              setValue={setRangoSeleccionado}
            />
          </Contenedor_Filtros>

          <Button_Buscar />
        </Contenedor_Button_Filtros>
      </Main>
    </>
  );
};

export default Filtro;
