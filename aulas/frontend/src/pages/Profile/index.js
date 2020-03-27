import React from "react";

import logoImg from "../../assets/logo.svg";

import {
  Button,
  FiPowerIcon,
  Header,
  Img,
  Link,
  ProfileContainer,
  HeaderText,
  Title
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

      <ul>
        <li></li>
      </ul>
    </ProfileContainer>
  );
};

export default Profile;
