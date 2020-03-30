import React from "react";

import logoImg from "../../assets/logo.svg";

import {
  Button,
  FiPowerIcon,
  FiTrash2Icon,
  Header,
  HeaderText,
  Img,
  Link,
  ListItem,
  ProfileContainer,
  StrongText,
  Text,
  Title,
  UnorderedList
} from "./styles";

export const Profile = () => {
  return (
    <ProfileContainer>
      <Header>
        <Img src={logoImg} alt="Be The Hero" />
        <HeaderText>Bem vinda, APAD</HeaderText>

        <Link to="/incidents/new">Cadastrar novo caso</Link>
        <Button>
          <FiPowerIcon />
        </Button>
      </Header>

      <Title>Casos cadastrados</Title>

      <UnorderedList>
        <ListItem>
          <StrongText>CASO:</StrongText>
          <Text>Caso teste</Text>

          <StrongText>DESCRIÇÃO:</StrongText>
          <Text>Descrição do caso teste</Text>

          <StrongText>VALOR:</StrongText>
          <Text>R$ 120,00</Text>

          <Button>
            <FiTrash2Icon />
          </Button>
        </ListItem>
      </UnorderedList>
    </ProfileContainer>
  );
};

export default Profile;
