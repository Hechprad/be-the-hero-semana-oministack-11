import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  DetailsButton,
  DetailsButtonText,
  FeatherIcon,
  IncidentView,
  IncidentPropertyText,
  IncidentValueText
} from "./styles";

export default function Incident({ incident, hasDetailsButton, ...rest }) {
  const navigation = useNavigation();
  const navigateToDetail = incident => {
    navigation.navigate("Detail", { incident });
  };

  return (
    <IncidentView {...rest}>
      <IncidentPropertyText>ONG:</IncidentPropertyText>
      <IncidentValueText hasDetailsButton={hasDetailsButton}>
        {incident.name} de {incident.city}/{incident.uf}
      </IncidentValueText>

      <IncidentPropertyText>CASO:</IncidentPropertyText>
      <IncidentValueText hasDetailsButton={hasDetailsButton}>
        {incident.description}
      </IncidentValueText>

      <IncidentPropertyText>VALOR:</IncidentPropertyText>
      <IncidentValueText hasDetailsButton={hasDetailsButton}>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
        }).format(incident.value)}
      </IncidentValueText>

      {!!hasDetailsButton && (
        <DetailsButton onPress={() => navigateToDetail(incident)}>
          <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
          <FeatherIcon name="arrow-right" size={16} />
        </DetailsButton>
      )}
    </IncidentView>
  );
}
