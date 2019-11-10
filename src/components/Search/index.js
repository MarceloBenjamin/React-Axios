import React, { useState, useEffect } from "react";

import { Container, Texto, Input } from "./styles";

export default function Search({ setPesquisa }) {
  const [texto, setTexto] = useState("Pesquisa");

  useEffect(() => {}, []);

  return (
    <>
      <Container>
        <Texto>Pesquisa:</Texto>
        <Input type="text" onChange={e => setPesquisa(e.target.value)} />
      </Container>
    </>
  );
}
