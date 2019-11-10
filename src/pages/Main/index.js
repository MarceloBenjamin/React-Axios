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
  SubTexto
} from "./styles";

import Rodape from "../../components/Rodape/index";
import Search from "../../components/Search/index";

export default function Main() {
  const [paises, setPaises] = useState([]);
  const [filter, setFilter] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    const response = axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setPaises(response.data);
        setFilter(response.data);
      });
  }, []);

  useEffect(() => {
    var matrixPaises = [];
    var indexMatrix = 0;

    if (pesquisa.length > 0) {
      var tam = pesquisa.length;
      for (var i = 0; i < paises.length; i++) {
        var palavra = "";
        for (var x = 0; x < tam; x++) {
          palavra += paises[i].name[x];
        }

        if (
          pesquisa.toUpperCase() ===
          palavra
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toUpperCase()
        ) {
          matrixPaises[indexMatrix] = paises[i];
          indexMatrix++;
        }
      }
      setFilter(matrixPaises);
    } else {
      setFilter(paises);
    }
  }, [pesquisa]);

  return (
    <Container>
      <Title>Todos os Países</Title>
      <SubTitle>
        Nesta lista contém o nome, a bandeira e o nome nativo dos países.
      </SubTitle>
      <Search setPesquisa={setPesquisa} />
      <FlexGrid>
        {filter.map((country, index) => (
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
      <Rodape />
    </Container>
  );
}
