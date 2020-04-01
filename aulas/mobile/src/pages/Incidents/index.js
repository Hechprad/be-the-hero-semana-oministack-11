import React from "react";

import logoImg from "../../assets/logo.png";

import Incident from "../../components/Incident";

import {
  Container,
  DescriptionText,
  Image,
  IncidentListView,
  HeaderText,
  HeaderTextBold,
  Title,
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
      <IncidentListView
        data={[1, 2, 3, 4, 5]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => <Incident incident hasDetailsButton />}
      />
    </Container>
  );
}
