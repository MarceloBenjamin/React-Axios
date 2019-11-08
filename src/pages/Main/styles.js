import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #e8e8e8;
  padding-bottom: 10px;
`;

export const Title = styled.h1`
  color: #800000;
  text-align: center;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-size: 13px;
  margin-bottom: 40px;
  color: #404040;
`;

export const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
  max-width: 95%;
  width: 100%;
  margin-bottom: 50px;
`;

export const Box = styled.div`
  width: 190px;
  height: 220px;
  margin: 12px;
  border: 1px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
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
  color: #800000;
  font-weight: bold;
`;

export const SubTexto = styled.p`
  font-size: 9pt;
  margin: 0;
  color: #404040;
`;

export const Imagem = styled.img`
  flex-grow: 1;
  width: 80%;
  height: auto;
  max-height: 50%;
`;

export const TextBottom = styled.p`
  margin: 5px;
  font-size: 10pt;
  color: #404040;
  font-style: italic;
`;
