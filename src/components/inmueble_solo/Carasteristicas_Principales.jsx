import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 950px;

  display: flex;
  flex-direction: column;
  background-color: #ebebeb;
  border-radius: 10px;
  padding: 20px 2%;
  h1 {
    margin-bottom: 15px;
  }
`;

const Tabla = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #dddd;
`;

const TableBody = styled.tbody``;

const Tabla_Fila = styled.tr`
  background-color: white;
  &:nth-child(even) {
    background-color: #f5f5f5; /* Fondo gris para filas pares */
  }
`;
const Celdas_name = styled.td`
  font-weight: 500;
  width: 180px;
  padding: 15px 25px;
  border-right: 1px solid #ddd;
  font-size: 17px;
`;
const Celdas_dato = styled.td`
  padding: 15px 25px;
  font-size: 17px;
`;

const Carasteristicas_Principales = ({ item }) => {
  return (
    <>
      <Main>
        <h1>Características Principales</h1>

        <Tabla>
          <TableBody>
            <Tabla_Fila>
              <Celdas_name>Tipo</Celdas_name>
              <Celdas_dato>{item.type}</Celdas_dato>
            </Tabla_Fila>
            <Tabla_Fila>
              <Celdas_name>Precio</Celdas_name>
              <Celdas_dato>{item.price}</Celdas_dato>
            </Tabla_Fila>
            <Tabla_Fila>
              <Celdas_name>Superficie útil</Celdas_name>
              <Celdas_dato>{item.feature.util_area}</Celdas_dato>
            </Tabla_Fila>
            <Tabla_Fila>
              <Celdas_name>Superficie total</Celdas_name>
              <Celdas_dato>{item.feature.total_area}</Celdas_dato>
            </Tabla_Fila>
            <Tabla_Fila>
              <Celdas_name>Dormitorios</Celdas_name>
              <Celdas_dato>{item.feature.bedrooms}</Celdas_dato>
            </Tabla_Fila>
            <Tabla_Fila>
              <Celdas_name>Baños</Celdas_name>
              <Celdas_dato>{item.feature.bathrooms}</Celdas_dato>
            </Tabla_Fila>
            <Tabla_Fila>
              <Celdas_name>Cocinas</Celdas_name>
              <Celdas_dato>{item.feature.kitchens}</Celdas_dato>
            </Tabla_Fila>
            <Tabla_Fila>
              <Celdas_name>Pisos</Celdas_name>
              <Celdas_dato>{item.feature.floors}</Celdas_dato>
            </Tabla_Fila>
          </TableBody>
        </Tabla>
      </Main>
    </>
  );
};

export default Carasteristicas_Principales;
