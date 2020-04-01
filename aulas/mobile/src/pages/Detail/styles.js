import styled from "styled-components/native";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight + 20}px 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image``;

export const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FeatherIcon = styled(Feather).attrs(props => ({
  name: props.name,
  size: props.size
}))`
  color: ${props => props.theme.colors.red};
`;

export const ContactBox = styled.View``;

export const HeroTitle = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: ${props => props.theme.colors.black};
  font-weight: bold;
`;

export const HeroDescription = styled.Text`
  font-size: 16px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: ${props => props.theme.colors.black};
  font-weight: bold;
`;

export const Actions = styled.View``;

export const Action = styled.TouchableOpacity``;

export const ActionText = styled.Text``;
