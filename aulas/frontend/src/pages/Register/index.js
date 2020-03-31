import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "styled-components/macro";

import api from "../../services/api";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  const handleRegister = async event => {
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post("ongs", data);

      resetInputValues();

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push("/profile");
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  };

  const resetInputValues = () => {
    setName("");
    setEmail("");
    setWhatsapp("");
    setCity("");
    setUf("");
  };

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
        <Form onSubmit={handleRegister}>
          <FormInput
            placeHolder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <FormInput
            type="email"
            placeHolder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <FormInput
            placeHolder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <InputGroup>
            <FormInput
              placeHolder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <FormInput
              css={`
                width: 80px;
              `}
              placeHolder="UF"
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </InputGroup>
          <Button type="submit" />
        </Form>
      </ContentWrapper>
    </RegisterContainer>
  );
};

export default Register;
