import React from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./src/routes";
import theme from "./src/styles/theme";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
