import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  const handleNewIncident = async e => {
    e.preventDefault();
    try {
      await api.post(
        "incidents",
        {
          title,
          description,
          value
        },
        { headers: { Authorization: ongId } }
      );
      resetInputValues();

      history.push("/profile");
    } catch (err) {
      alert("Erro ao cadastrar novo caso.");
    }
  };

  const resetInputValues = () => {
    setTitle("");
    setDescription("");
    setValue("");
  };

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
        <Form onSubmit={handleNewIncident}>
          <FormInput
            placeHolder="Título do caso"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <FormTextArea
            placeHolder="Descrição"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
          <FormInput
            placeHolder="Valor em Reais"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </ContentWrapper>
    </NewIncidenContainer>
  );
};

export default NewIncident;
