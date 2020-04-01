import React from "react";

import logoImg from "../../assets/logo.png";

import Incident from "../../components/Incident";

import {
  Action,
  Actions,
  ActionText,
  ContactBox,
  Container,
  FeatherIcon,
  HeroDescription,
  HeroTitle,
  Image,
  TouchableOpacity,
  Header
} from "./styles";

export default function Details() {
  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <TouchableOpacity onPress={() => {}}>
          <FeatherIcon name={"arrow-left"} size={28} />
        </TouchableOpacity>
      </Header>
      <Incident />
      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>
        <HeroDescription>Entre em contato:</HeroDescription>
        <Actions>
          <Action></Action>
          <ActionText>Whatsapp</ActionText>
        </Actions>
        <Actions>
          <Action></Action>
          <ActionText>E-mail</ActionText>
        </Actions>
      </ContactBox>
    </Container>
  );
}
