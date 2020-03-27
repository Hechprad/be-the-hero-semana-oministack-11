import React from "react";
import Logon from "./pages/Logon";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Logon />
  </ThemeProvider>
);

export default App;
