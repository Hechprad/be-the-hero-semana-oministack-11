import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 60px;
  color: ${props => props.theme.colors.darkGray};
  border: 1px solid ${props => props.theme.colors.gray1};
  border-radius: 8px;
  padding: 0 24px;
`;
