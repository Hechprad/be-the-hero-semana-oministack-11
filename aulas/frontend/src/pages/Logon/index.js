import React from "react";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

import { FiLogInIcon } from "./styles";

const Logon = () => (
  <div className="logon-container">
    <section className="form">
      <img src={logoImg} alt="Be The Hero" />

      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="Sua ID" />
        <button type="submit">Entrar</button>

        <a href="/register">
          <FiLogInIcon />
          Não tenho cadastro
        </a>
      </form>
    </section>
    <img src={heroesImg} alt="Heroes" />
  </div>
);

export default Logon;
