import React, { useState, useEffect } from "react";
import axios from "axios";

import Link from "../components/Link";

const Home = ({ location }) => {
  const { state } = location;
  const user = (state && state.user) || "";
  const oldBalance = (state && state.balance) || null;
  const [balance, setBalance] = useState(oldBalance);

  useEffect(() => {
    const getDebits = async () => {
      await axios
        .get("https://moj-api.herokuapp.com/debits")
        .then((res) => setBalance((prev) => ({ ...prev, debit: res.data })));
    };

    const getCredits = async () => {
      await axios
        .get("https://moj-api.herokuapp.com/credits")
        .then((res) => setBalance((prev) => ({ ...prev, credit: res.data })));
    };

    if (balance == null) {
      getDebits();
      getCredits();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      Home
      <Link to="/debits" user={user} balance={balance}>
        Debits
      </Link>
      <Link to="/credits" user={user} balance={balance}>
        Credits
      </Link>
    </>
  );
};

export default Home;
