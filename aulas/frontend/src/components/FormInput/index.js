import React from "react";

import { Input } from "./styles";

const FormInput = ({ placeHolder, ...rest }) => (
  <Input placeholder={placeHolder} {...rest} />
);

export default FormInput;
