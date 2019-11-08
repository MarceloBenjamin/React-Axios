import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f1f1f1;
`;

export const Title = styled.h1`
  color: crimson;
  text-align: center;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-size: 13px;
  margin-bottom: 30px;
`;

export const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
  max-width: 95%;
  width: 100%;
`;

export const Box = styled.div`
  width: 190px;
  height: 220px;
  margin: 5px;
  border: 2px;
  border-style: solid;
  border-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 95%;
  height: 45px;
  padding: 3%;
`;
export const ContainerSubTitle = styled.div`
  flex-grow: 8;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 3%;
`;

export const Texto = styled.p`
  font-size: 10pt;
  margin: 0;
`;

export const SubTexto = styled.p`
  font-size: 9pt;
  margin: 0;
`;

export const Imagem = styled.img`
  flex-grow: 1;
  width: 80%;
  height: auto;
  max-height: 50%;
`;
