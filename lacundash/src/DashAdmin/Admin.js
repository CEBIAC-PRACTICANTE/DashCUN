import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";

import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import AdminFooter from "./AdminFooter";
import routes from "../routes.js";

const Admin = (props) => {
  const mainContent = React.useRef(null);

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

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar {...props} />
        <Dashboard />
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
