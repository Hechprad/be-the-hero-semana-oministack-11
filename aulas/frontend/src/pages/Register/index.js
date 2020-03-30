import React from "react";
import "styled-components/macro";

import logoImg from "../../assets/logo.svg";

import FormInput from "../../components/FormInput";
import Link from "../../components/Link";
import Button from "../../components/Button";

import {
  ContentWrapper,
  FiArrowLeftIcon,
  Form,
  SectionTitle,
  InputGroup,
  RegisterContainer,
  Section,
  Text
} from "./styles";

export const Register = () => {
  return (
    <RegisterContainer>
      <ContentWrapper>
        <Section>
          <img src={logoImg} alt="Be The Hero" />

          <SectionTitle>Cadastro</SectionTitle>
          <Text>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </Text>
          <Link to="/">
            <FiArrowLeftIcon />
            Já tenho cadastro
          </Link>
        </Section>
        <Form>
          <FormInput placeHolder="Nome da ONG" />
          <FormInput type="email" placeHolder="E-mail" />
          <FormInput placeHolder="WhatsApp" />
          <InputGroup>
            <FormInput placeHolder="Cidade" />
            <FormInput
              placeHolder="UF"
              css={`
                width: 80px;
              `}
            />
          </InputGroup>
          <Button type="submit" />
        </Form>
      </ContentWrapper>
    </RegisterContainer>
  );
};

export default Register;
