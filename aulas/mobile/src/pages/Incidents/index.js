import React from "react";

import logoImg from "../../assets/logo.png";

import IncidentList from "../../components/IncidentList";

import {
  DescriptionText,
  Image,
  HeaderText,
  HeaderTextBold,
  Title,
  Container,
  Header
} from "./styles";

export default function Incidents() {
  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>0 casos.</HeaderTextBold>
        </HeaderText>
      </Header>
      <Title>Bem-vindo!</Title>
      <DescriptionText>
        Escolha um dos casos a baixo e salve o dia.
      </DescriptionText>
      <IncidentList />
    </Container>
  );
}
