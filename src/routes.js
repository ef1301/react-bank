import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import { Home, Debits, Credits, Login } from "./pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute exact path="/debits" component={Debits} />
        <PrivateRoute exact path="/credits" component={Credits} />
      </Switch>
    </Router>
  );
};

export default Routes;
