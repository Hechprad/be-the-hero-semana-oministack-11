import React from "react";

import { LinkComponent } from "./styles";

export const Link = ({ children, ...rest }) => {
  return <LinkComponent {...rest}>{children}</LinkComponent>;
};

export default Link;
