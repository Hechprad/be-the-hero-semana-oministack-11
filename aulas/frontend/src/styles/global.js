import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box; /* Faz com que o padding dos elementos seja anexado na altura e na largura */
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
