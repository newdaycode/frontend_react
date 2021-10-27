import React from "react";
import {  Route, Switch, Redirect } from "react-router-dom";
import Header from '../components/Header'
import Menu from '../components/Menu'  
import Footer from '../components/Footer' 

import routes from "../routes";

const Admin = (props) => {


  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
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
    <div className="wrapper">
      <Header/>
      <Menu
          {...props}
          routes={routes}
          avatar={{
              imgSrc: require("../assets/avatar.png").default,
              imgAlt: "avatar de usuario",
          }}
        />
        <div className="content-wrapper">
          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/admin/inicio" />
          </Switch>
        </div>
      <Footer/>
    </div>
    </>
  );
};

export default Admin;
