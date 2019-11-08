import React, { useState, useEffect } from "react";
import axios from "axios";

import "./css.css";

import {
  Container,
  FlexGrid,
  Title,
  Box,
  Texto,
  Imagem,
  ContainerTitle,
  SubTitle,
  ContainerSubTitle,
  SubTexto,
  TextBottom
} from "./styles";

export default function Main() {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const response = axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setPaises(response.data);
      });
  }, []);

  return (
    <Container>
      <Title>Todos os Países</Title>
      <SubTitle>
        Nesta lista contém o nome, a bandeira e o nome nativo dos países.
      </SubTitle>
      <FlexGrid>
        {paises.map((country, index) => (
          <Box key={index}>
            <ContainerTitle>
              <Texto>
                {country.name} - {country.alpha3Code}
              </Texto>
            </ContainerTitle>
            <Imagem src={country.flag} />
            <ContainerSubTitle>
              <SubTexto>{country.nativeName}</SubTexto>
            </ContainerSubTitle>
          </Box>
        ))}
      </FlexGrid>
      <TextBottom>
        Dados sobre os países recebidos da API
        https://restcountries.eu/rest/v2/all
      </TextBottom>
      <TextBottom>
        Desenvolvido para fins de estudo por Marcelo Benjamin
      </TextBottom>
    </Container>
  );
}
