import styled from "styled-components";

import { Link as ReactRouterDomLink } from "react-router-dom";

export const LinkComponent = styled(ReactRouterDomLink)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: ${props => props.theme.colors.gray4};
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
