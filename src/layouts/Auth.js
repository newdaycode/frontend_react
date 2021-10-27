
import React from "react";
import {Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
// import { Container, Row } from "reactstrap";

import routes from "../routes";

const Auth = (props) => {

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
        <div className="login-page">
            <div className="login-box">
                <Switch>
                {getRoutes(routes)}
                <Redirect from="*" to="/auth/login" />
                </Switch>
            </div>
        </div>
    </>
  );
};

export default Auth;
