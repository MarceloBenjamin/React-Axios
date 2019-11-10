import React from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaBehance,
  FaGithub,
  FaFacebookMessenger
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Nome, Info, Text, ContainerIcons, Link } from "./styles";

export default function Rodape() {
  return (
    <div>
      <Text>Desenvolvido para fins de estudo!</Text>
      <Text>
        Dados sobre os países recebidos da API:
        https://restcountries.eu/rest/v2/all
      </Text>
      <Nome>Marcelo Benjamin</Nome>
      <Info>Entre em contato</Info>
      <ContainerIcons>
        <Link
          href="https://api.whatsapp.com/send?phone=5561986638953&text=Ol%C3%A1%20Marcelo%2C%20podemos%20conversar%3F"
          target="_blank"
        >
          <FaWhatsapp />
        </Link>
        <Link href="https://www.linkedin.com/feed/" target="_blank">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/MarceloBenjamin" target="_blank">
          <FaGithub />
        </Link>
        <Link href="https://www.behance.net/marcelobenjamin" target="_blank">
          <FaBehance />
        </Link>
        <Link href="mailto:marcelo.dfx@gmail.com" target="_blank">
          <MdEmail />
        </Link>
      </ContainerIcons>
    </div>
  );
}
