import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  DetailsButton,
  DetailsButtonText,
  FeatherIcon,
  Incident,
  IncidentListView,
  IncidentPropertyText,
  IncidentValueText
} from "./styles";

export default function IncidentList() {
  const navigation = useNavigation();

  const navigateToDetail = () => {
    navigation.navigate("Detail");
  };

  return (
    <IncidentListView
      data={[1, 2, 3, 4, 5]}
      keyExtractor={incident => String(incident)}
      showsVerticalScrollIndicator={false}
      renderItem={() => (
        <Incident>
          <IncidentPropertyText>ONG:</IncidentPropertyText>
          <IncidentValueText>APAD</IncidentValueText>

          <IncidentPropertyText>CASO:</IncidentPropertyText>
          <IncidentValueText>Cadelinha atropelada</IncidentValueText>

          <IncidentPropertyText>VALOR:</IncidentPropertyText>
          <IncidentValueText>120</IncidentValueText>

          <DetailsButton onPress={navigateToDetail}>
            <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
            <FeatherIcon name="arrow-right" size={16} />
          </DetailsButton>
        </Incident>
      )}
    />
  );
}
