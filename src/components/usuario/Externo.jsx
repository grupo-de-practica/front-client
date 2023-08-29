import styled from "styled-components";

import Google_Icono from "@/assets/icons/google.svg";

const Main = styled.div`
  padding: 25px 0 0 0;
  margin-top: 25px;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    border-top: 1px solid #ddd;
    width: 43%;
    left: 0;
    top: 0;
  }
  ::before {
    content: "";
    position: absolute;
    border-top: 1px solid #ddd;
    width: 43%;
    right: 0;
    top: 0;
  }
  span {
    position: absolute;
    width: 100%;
    justify-content: center;
    display: flex;
    top: -8px;
    p {
      color: #c1c1c1;
      font-size: 14px;
    }
  }
`;

const ButtonGoogle = styled.div`
  display: flex;
  padding: 8px 15px;
  cursor: pointer;
  gap: 10px;
  justify-content: center;
  border: 1px solid #ebebeb;
  background-color: white;
  border-radius: 5px;
  :hover {
    border-color: #c0c0c0;
  }
  img {
    height: 20px;
    width: 20px;
  }

  p {
    font-weight: 500;
  }
`;

const Externo = ({texto}) => {
  return (
    <>
      <Main>
        <span>
          <p>O</p>
        </span>

        <ButtonGoogle>
          <img src={Google_Icono} alt="" />
          <p>{texto}</p>
        </ButtonGoogle>
      </Main>
    </>
  );
};

export default Externo;
