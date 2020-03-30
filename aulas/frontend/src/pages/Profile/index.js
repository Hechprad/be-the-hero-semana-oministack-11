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
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição do caso teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">FiTrash2</button>
          <h1>1h05m</h1>
        </li>
      </ul>
    </ProfileContainer>
  );
};

export default Profile;
