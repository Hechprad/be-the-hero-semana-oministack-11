import React from "react";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

import FormInput from "../../components/FormInput";
import Link from "../../components/Link";
import Button from "../../components/Button";

import {
  FiLogInIcon,
  Form,
  FormTitle,
  LogonContainer,
  SectionForm
} from "./styles";

const Logon = () => (
  <LogonContainer>
    <SectionForm>
      <img src={logoImg} alt="Be The Hero" />

      <Form>
        <FormTitle>Faça seu logon</FormTitle>

        <FormInput placeHolder="Sua ID" />
        <Button type="submit">Entrar</Button>

        <Link to="/register">
          <FiLogInIcon />
          Não tenho cadastro
        </Link>
      </Form>
    </SectionForm>
    <img src={heroesImg} alt="Heroes" />
  </LogonContainer>
);

export default Logon;
