import React, { useState } from "react";
import api from "../../services/api";

import { useHistory } from "react-router-dom";

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

const Logon = () => {
  const [id, setId] = useState("");

  const history = useHistory();

  const handleLogin = async event => {
    event.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (err) {
      alert("Falha no login. Tente novamente.");
    }
  };

  return (
    <LogonContainer>
      <SectionForm onSubmit={handleLogin}>
        <img src={logoImg} alt="Be The Hero" />

        <Form>
          <FormTitle>Faça seu logon</FormTitle>

          <FormInput
            placeHolder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
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
};

export default Logon;
