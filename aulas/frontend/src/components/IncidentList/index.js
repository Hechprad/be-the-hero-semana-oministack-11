import React, { useState, useEffect } from "react";

import api from "../../services/api";

import { FiTrash2Icon, Li, ListButton, StrongText, Text, Ul } from "./styles";

export const IncidentList = ({ content, ...rest }) => {
  const [incidentsData, setIncidentsData] = useState([]);
  const ongId = localStorage.getItem("ongId");

  useEffect(() => {
    api
      .get("profile", {
        headers: { Authorization: ongId }
      })
      .then(response => {
        setIncidentsData(response.data);
      });
  }, [ongId]);

  const handleDeleteItem = async caseId => {
    try {
      await api.delete(`incidents/${caseId}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidentsData(
        incidentsData.filter(incident => incident.id !== caseId)
      );
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente.");
    }
  };

  return (
    incidentsData.length > 0 && (
      <Ul {...rest}>
        {incidentsData.map(incidentItem => (
          <Li key={incidentItem.id}>
            <StrongText>CASO:</StrongText>
            <Text>{incidentItem.title}</Text>

            <StrongText>DESCRIÇÃO:</StrongText>
            <Text>{incidentItem.description}</Text>

            <StrongText>VALOR:</StrongText>
            <Text>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incidentItem.value)}
            </Text>
            <ListButton onClick={() => handleDeleteItem(incidentItem.id)}>
              <FiTrash2Icon />
            </ListButton>
          </Li>
        ))}
      </Ul>
    )
  );
};

export default IncidentList;
