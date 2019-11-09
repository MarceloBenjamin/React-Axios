import React, { useState, useEffect } from "react";

import { Container, Texto, Input } from "./styles";

export default function Search() {
  const [dado, setDado] = useState("");

  useEffect(() => {}, []);

  return (
    <>
      <Container>
        <Texto>Pesquise:</Texto>
        <Input type="text" />
      </Container>
    </>
  );
}
