import React from "react";
import { useHistory } from "react-router-dom";

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
  const ongName = localStorage.getItem("ongName");

  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <ProfileContainer>
      <Header>
        <Img src={logoImg} alt="Be The Hero" />
        <HeaderText>{`Bem vinda, ${ongName}`}</HeaderText>
        <Link to="/incidents/new">Cadastrar novo caso</Link>
        <Button onClick={handleLogout}>
          <FiPowerIcon />
        </Button>
      </Header>
      <Title>Casos cadastrados</Title>
      <IncidentList />
    </ProfileContainer>
  );
};

export default Profile;
