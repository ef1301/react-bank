import React from "react";
import { Link as ReactLink } from "react-router-dom";

const Link = ({ to, user, balance, children, ...rest }) => {
  return (
    <ReactLink
      to={{
        pathname: to,
        state: {
          user,
          balance,
        },
      }}
      {...rest}
    >
      {children}
    </ReactLink>
  );
};

export default Link;
