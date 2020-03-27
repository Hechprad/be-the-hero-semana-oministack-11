import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Logon} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
