import React from "react";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

import FormInput from "../../components/FormInput";

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
        <button type="submit">Entrar</button>

        <a href="/register">
          <FiLogInIcon />
          Não tenho cadastro
        </a>
      </Form>
    </SectionForm>
    <img src={heroesImg} alt="Heroes" />
  </LogonContainer>
);

export default Logon;
