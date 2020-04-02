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

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.white};
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.colors.black};
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.colors.gray4};
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.red};
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 15px;
  font-weight: bold;
`;
