import React from "react";

import logoImg from "../../assets/logo.svg";

import CaseList from "../../components/CaseList";

import {
  Button,
  FiPowerIcon,
  Header,
  HeaderText,
  Img,
  Link,
  ProfileContainer,
  Title
} from "./styles";

export const Profile = () => {
  const listContent = [
    {
      caseTitle: "Caso teste 1",
      description:
        "Descrição do caso teste 1, descrição do caso de teste, descrição do caso de teste, descrição do caso de teste",
      value: 120
    },
    {
      caseTitle: "Caso teste 2",
      description:
        "Descrição do caso teste 2, descrição do caso de teste, descrição do caso de teste, descrição do caso de teste",
      value: 130
    },
    {
      caseTitle: "Caso teste 3",
      description:
        "Descrição do caso teste 3, descrição do caso de teste, descrição do caso de teste, descrição do caso de teste",
      value: 140
    },
    {
      caseTitle: "Caso teste 4",
      description:
        "Descrição do caso teste 4, descrição do caso de teste, descrição do caso de teste, descrição do caso de teste",
      value: 150
    }
  ];
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

      <CaseList content={listContent} />
    </ProfileContainer>
  );
};

export default Profile;
