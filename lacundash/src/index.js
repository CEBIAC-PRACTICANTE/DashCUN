import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./DashAdmin/Dashboard";
import AdminNavbar from "./DashAdmin/AdminNavbar";
import Sidebar from "./DashAdmin/Sidebar";
import Admin from "./DashAdmin/Admin";

ReactDOM.render(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>,
  document.getElementById("root")
);
