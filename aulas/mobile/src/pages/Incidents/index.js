import React, { useState, useEffect } from "react";

import logoImg from "../../assets/logo.png";

import Incident from "../../components/Incident";

import api from "../../services/api";

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
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadIncidents = async () => {
    if (loading) return;
    if (total > 0 && incidents.length === total) return;

    setLoading(true);

    const response = await api.get("incidents", { params: { page } });

    setTotal(response.headers["x-total-count"]);
    setIncidents([...incidents, ...response.data]);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>{total} casos.</HeaderTextBold>
        </HeaderText>
      </Header>
      <Title>Bem-vindo!</Title>
      <DescriptionText>
        Escolha um dos casos a baixo e salve o dia.
      </DescriptionText>
      <IncidentListView
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <Incident incident={incident} hasDetailsButton />
        )}
      />
    </Container>
  );
}
