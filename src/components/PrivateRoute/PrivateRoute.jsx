import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, location, path, ...rest }) => {
  const { state } = location;
  const user = (state && state.user) || "";
  const balance = (state && state.balance) || { debit: {}, credit: {} };
  const pathname = path || "/";

  if (user == null || user === "") {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: {
            pathname,
            balance,
          },
        }}
      />
    );
  }

  return (
    <Route
      location={location}
      {...rest}
      render={(props) => <Component {...props} />}
    />
  );
};

export default PrivateRoute;
