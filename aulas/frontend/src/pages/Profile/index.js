import React from "react";

import logoImg from "../../assets/logo.svg";

import IncidentList from "../../components/IncidentList";

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
      id: 1,
      incidentTitle: "Caso teste 1",
      description:
        "Descrição do caso teste 1, descrição do caso de teste, descrição do caso de teste, descrição do caso de teste",
      value: 120
    },
    {
      id: 2,
      incidentTitle: "Caso teste 2",
      description:
        "Descrição do caso teste 2, descrição do caso de teste, descrição do caso de teste, descrição do caso de teste",
      value: 130
    },
    {
      id: 3,
      incidentTitle: "Caso teste 3",
      description:
        "Descrição do caso teste 3, descrição do caso de teste, descrição do caso de teste, descrição do caso de teste",
      value: 140
    },
    {
      id: 4,
      incidentTitle: "Caso teste 4",
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

      <IncidentList content={listContent} />
    </ProfileContainer>
  );
};

export default Profile;
