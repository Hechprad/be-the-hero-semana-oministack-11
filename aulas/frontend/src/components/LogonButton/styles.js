import styled from "styled-components";

export const Button = styled.button`
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
