import React, { useState, useEffect } from "react";

import api from "../../services/api";

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
  const [incidentsData, setIncidentsData] = useState([]);
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  useEffect(() => {
    api
      .get("profile", {
        headers: { Authorization: ongId }
      })
      .then(response => {
        setIncidentsData(response.data);
      });
  }, [ongId]);

  console.log(incidentsData);

  return (
    <ProfileContainer>
      <Header>
        <Img src={logoImg} alt="Be The Hero" />
        <HeaderText>{`Bem vinda, ${ongName}`}</HeaderText>

        <Link to="/incidents/new">Cadastrar novo caso</Link>
        <Button>
          <FiPowerIcon />
        </Button>
      </Header>

      <Title>Casos cadastrados</Title>

      {incidentsData.length > 0 && <IncidentList content={incidentsData} />}
    </ProfileContainer>
  );
};

export default Profile;
