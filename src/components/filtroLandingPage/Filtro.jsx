import { useState } from "react";
import styled from "styled-components";

import Select_Ubicacion from "./Select_Ubicacion";
import Select_TipoDeInmueble from "./Select_TipoDeInmueble";
import Select_RangoDePrecio from "./Select_RangoDePrecio";

import Ubicacion_Icono from "@/assets/icons/ubicacion.svg";
import Departamento_Icono from "@/assets/icons/apartment.svg";
import Casa_Icono from "@/assets/icons/house.svg";
import Dolar_Icono from "@/assets/icons/money.svg";
import Buscar_Icono from "@/assets/icons/search.svg";
import Button_Icono from "@/utils/buttons/Button_Icono";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--backgroundSections0);
  border-radius: var(--borderRadiusSection);
  padding: var(--padddingSection);
  gap: 20px;
`;
const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Contenedor_Filtros = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 950px;

  gap: 10px;


  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 25px;
  }
`;
const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  em {
    font-weight: 600;
    font-size: 23px;
    color: var(--textColor);
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    text-align: left;
    gap: 8px;
    em {
      font-size: 25px;
    }
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
      <Section>
        <Titulo>
          <h1>Encuentra tu</h1>
          <em>hogar ideal </em>
        </Titulo>

        <Contenedor>
          <Contenedor_Filtros>
            <Select_Ubicacion
              data={ubicacionArray}
              value={ubicacionSeleccionado}
              setValue={setUbicacionSeleccionado}
            />
            <Select_RangoDePrecio
              data={rangoDePrecio}
              value={rangoSeleccionado}
              setValue={setRangoSeleccionado}
            />
            <Select_TipoDeInmueble
              data={tipoDeInmueble}
              value={tipoSeleccionado}
              setValue={setTipoSeleccionado}
            />
          </Contenedor_Filtros>

          <Button_Icono
            type="button"
            onClick=""
            src={Buscar_Icono}
            texto="Buscar mi propiedad"
          />
        </Contenedor>
      </Section>
    </>
  );
};

export default Filtro;
