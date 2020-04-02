import styled from "styled-components/native";
import Constants from "expo-constants";

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

export const HeaderText = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.colors.gray4};
`;

export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: ${props => props.theme.colors.black};
  font-weight: bold;
`;

export const DescriptionText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.gray4};
`;

export const IncidentListView = styled.FlatList`
  margin-top: 32px;
`;
