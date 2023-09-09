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
import TituloSection from "@/utils/TituloSection";

const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: var(--backgroundSections0);
  border-radius: 15px;
  padding: 15px 25px 20px 25px;
`;
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  gap: 30px;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const ContenedorFiltros = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 750px;
  gap: 10px;
  justify-content: space-between;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
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
        <TituloSection h1="Encuentra tu" h1Strong="hogar ideal" />

        <Contenedor>
          <ContenedorFiltros>
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
          </ContenedorFiltros>

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
