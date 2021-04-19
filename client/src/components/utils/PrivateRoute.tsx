import React, { ReactElement } from "react";
import { Route } from "react-router-dom";

import { Redirect } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

interface Props {
  component: React.FC<any>;
  path: string;
  exact?: boolean;
}

export default function PrivateRoute({
  component: Component,
  ...rest
}: Props): ReactElement {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (true) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}
