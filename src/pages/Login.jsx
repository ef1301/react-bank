import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ location }) => {
  const { state } = location;
  const pathname = (state && state.pathname) || "/";

  const [user, setUser] = useState("");

  const updateUser = e => {
    setUser(e.target.value);
  };

  return (
    <>
      <h1>Login</h1>
      <input value={user} onChange={updateUser} />

      <Link
        to={{
          pathname: pathname,
          state: {
            user: user
          }
        }}
      >
        <button>Login</button>
      </Link>
    </>
  );
};

export default Login;
