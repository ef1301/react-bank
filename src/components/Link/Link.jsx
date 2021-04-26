import React from "react";
import { Link as ReactLink } from "react-router-dom";

const Link = ({ to, user, balance, pathname, children, ...rest }) => {
  return (
    <ReactLink
      to={{
        pathname: to,
        state: {
          user,
          balance,
          pathname
        },
      }}
      {...rest}
    >
      {children}
    </ReactLink>
  );
};

export default Link;
