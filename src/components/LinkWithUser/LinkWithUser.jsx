import React from "react";
import { Link } from "react-router-dom";

const LinkWithUser = ({ to, user, balance, children, ...rest }) => {
  console.log(balance);
  return (
    <Link
      to={{
        pathname: to,
        state: {
          user: user,
          balance: balance
        }
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LinkWithUser;
