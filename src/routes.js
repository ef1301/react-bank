import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import { Home, Debits, Credits, Login, userProfile } from "./pages";

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute exact path="/debits" component={Debits} />
        <PrivateRoute exact path="/credits" component={Credits} />
        <PrivateRoute exact path="/userProfile" component={userProfile} />
      </Switch>
    </Router>
  );
};

export default Routes;
