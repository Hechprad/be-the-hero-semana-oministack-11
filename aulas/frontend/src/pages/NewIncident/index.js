import React from "react";

import logoImg from "../../assets/logo.svg";

import FormInput from "../../components/FormInput";
import Link from "../../components/Link";
import Button from "../../components/Button";

import {
  ContentWrapper,
  FiArrowLeftIcon,
  Form,
  FormTextArea,
  NewIncidenContainer,
  Section,
  SectionTitle,
  Text
} from "./styles";

export const NewIncident = () => {
  return (
    <NewIncidenContainer>
      <ContentWrapper>
        <Section>
          <img src={logoImg} alt="Be The Hero" />

          <SectionTitle>Cadastrar novo caso</SectionTitle>
          <Text>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </Text>
          <Link to="/profile">
            <FiArrowLeftIcon />
            Voltar para a Home
          </Link>
        </Section>
        <Form>
          <FormInput placeHolder="Título do caso" />
          <FormTextArea placeHolder="Descrição" />
          <FormInput placeHolder="Valor em Reais" />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </ContentWrapper>
    </NewIncidenContainer>
  );
};

export default NewIncident;
