import React from "react";

import LinkWithUser from "../components/LinkWithUser";

const Home = ({ location }) => {
  const { state } = location;
  const user = (state && state.user) || "";

  return (
    <>
      Home
      <LinkWithUser to="debits" user={user}>
        Debits
      </LinkWithUser>
      <LinkWithUser to="/credits" user={user}>
        Credits
      </LinkWithUser>
    </>
  );
};

export default Home;
