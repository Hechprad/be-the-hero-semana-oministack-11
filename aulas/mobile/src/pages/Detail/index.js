import React from "react";
import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

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
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  const cel = "5511999999999";
  const message = `Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$ 120,00`;

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: "Herói do caso: Cadelinha atropelada",
      recipients: ["hecherat@gmail.com"],
      body: message
    });
  };

  const sendWhatsapp = () => {
    Linking.openURL(`whatsapp://send?phone=${cel}&text=${message}`);
  };

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <FeatherIcon name={"arrow-left"} size={28} />
        </TouchableOpacity>
      </Header>
      <Incident style={{ marginTop: 48 }} />
      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>
        <HeroDescription>Entre em contato:</HeroDescription>
        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>Whatsapp</ActionText>
          </Action>
          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
