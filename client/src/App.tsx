import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/Landing";
import NotFound from "./components/utils/404";

export default function App(): ReactElement {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </React.Fragment>
  );
}
