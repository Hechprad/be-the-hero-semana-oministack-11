import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const IncidentListView = styled.FlatList`
  margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.white};
  margin-bottom: 16px;
`;

export const IncidentPropertyText = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.gray5};
  font-weight: bold;
`;

export const IncidentValueText = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: ${props => props.theme.colors.gray4};
`;

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsButtonText = styled.Text`
  color: ${props => props.theme.colors.red};
  font-size: 15px;
  font-weight: bold;
`;

export const FeatherIcon = styled(Feather).attrs(props => ({
  name: props.name,
  size: props.size
}))`
  color: ${props => props.theme.colors.red};
`;
