import styled from "styled-components";
import { Link as ReactRouterDomLink } from "react-router-dom";
import { FiPower } from "react-icons/fi";

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  height: 64px;
`;

export const HeaderText = styled.span`
  font-size: 20px;
  margin-left: 24px;
`;

export const Link = styled(ReactRouterDomLink)`
  width: 260px;
  margin-left: auto;
  height: 60px;
  background: ${props => props.theme.colors.red};
  border: 0;
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(90%);
  }
`;

export const Button = styled.button.attrs(() => ({
  type: "button"
}))`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.gray1};
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${props => props.theme.colors.gray3};
  }
`;

export const FiPowerIcon = styled(FiPower).attrs(props => ({
  color: props.theme.colors.red,
  size: "18px"
}))``;

export const Title = styled.h1`
  margin: 80px 0 24px;
`;
