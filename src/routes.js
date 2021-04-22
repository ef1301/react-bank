import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import * as pages from './pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={pages.Home} />
      <Route path="/debits" exact component={pages.Debits} />
      <Route path="/credits" exact component={pages.Credits} />
      </Switch>
    </Router>
  );
};

export default Routes;