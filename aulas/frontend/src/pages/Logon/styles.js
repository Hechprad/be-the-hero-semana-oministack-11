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

export const FiLogInIcon = styled(FiLogIn).attrs(props => ({
  color: props.theme.colors.red,
  size: "16px"
}))`
  margin-right: 8px;
`;
