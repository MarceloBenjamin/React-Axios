import React, { useState, useEffect } from "react";
import axios from "axios";

import "./css.css";

import { Container, Title } from "./styles";

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
      <Title>Página Main</Title>
      <ul>
        {paises.map((country, index) => (
          <li key={index}>{country.name}</li>
        ))}
      </ul>
    </Container>
  );
}
