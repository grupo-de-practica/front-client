import styled from "styled-components"

const Imagen = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%; 
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Vista_Inmueble = () => {
  return (
    <>
      <Imagen>
        <img src="https://http2.mlstatic.com/D_NQ_NP_706552-MLC70566143447_072023-O.webp" alt="" />
      </Imagen>
    </>
  )
}

export default Vista_Inmueble