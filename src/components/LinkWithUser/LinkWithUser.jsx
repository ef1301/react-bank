import React from "react";
import { Link } from "react-router-dom";

const LinkWithUser = ({ to, user, children, ...rest }) => {
  return (
    <Link
      to={{
        pathname: to,
        state: {
          user: user
        }
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LinkWithUser;
