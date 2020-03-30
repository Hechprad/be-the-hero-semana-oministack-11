import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

export const RegisterContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 96px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const SectionTitle = styled.h1`
  font-size: 32px;
  margin: 64px 0 32px;
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${props => props.theme.colors.gray4};
  line-height: 32px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  & input {
    margin-top: 8px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  & input + input {
    margin-left: 8px;
  }
`;

export const FiArrowLeftIcon = styled(FiArrowLeft).attrs(props => ({
  color: props.theme.colors.red,
  size: "16px"
}))`
  margin-right: 8px;
`;
