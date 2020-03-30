import React from "react";

import { Button } from "./styles";

const LogonButton = ({ children, ...rest }) => (
  <Button {...rest}>{children ? children : "Entrar"}</Button>
);

export default LogonButton;
