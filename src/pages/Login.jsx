import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
          pathname: "/",
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
