import React, { useState, useEffect } from "react";
import axios from "axios";

import LinkWithUser from "../components/LinkWithUser";

const Home = ({ location }) => {
  const { state } = location;
  const user = (state && state.user) || "";
  const [debits, setDebits] = useState(null);
  const [credits, setCredits] = useState(null);
  const balance = {credits,debits};

  useEffect(() => {
    const getDebits = async () => {
      await axios
        .get("https://moj-api.herokuapp.com/debits")
        .then(res => setDebits(res.data));
    };
    const getCredits = async () => {
      await axios
        .get("https://moj-api.herokuapp.com/credits")
        .then(res => setCredits(res.data));
    };

    if(credits === null && debits === null) {
      getDebits();
      getCredits();
    }
  }, [credits,debits]);

  console.log(balance);
  return (
    <>
      Home
      <LinkWithUser to="/debits" user={user} balance={balance}>
        Debits
      </LinkWithUser>
      <LinkWithUser to="/credits" user={user} balance={balance}>
        Credits
      </LinkWithUser>
    </>
  );
};

export default Home;
