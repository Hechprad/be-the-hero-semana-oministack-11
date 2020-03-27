import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";

export const LogonContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const SectionForm = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

export const Form = styled.form`
  margin-top: 100px;
`;

export const FormTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
`;

export const LogonButton = styled.button.attrs(() => ({
  type: "submit"
}))`
  width: 100%;
  height: 60px;
  background: ${props => props.theme.colors.red};
  border: 0;
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  margin-top: 16px;
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

export const Link = styled.a`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: ${props => props.theme.colors.gray2};
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const FiLogInIcon = styled(FiLogIn).attrs(props => ({
  color: props.theme.colors.red,
  size: "16px"
}))`
  margin-right: 8px;
`;
