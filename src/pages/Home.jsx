import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import Link from "../components/Link";

const Home = ({ location }) => {
  const { state } = location;
  const user = (state && state.user) || {name: "Bob", join: "01/01/2021"};
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
    <Card style={{ width: "10rem" }}>
      <Card.Header>
        <Link to="/" user={user} balance={balance}>
          <center>Home</center>
        </Link>
      </Card.Header>
    </Card>
    <Card style={{ width: "10rem" }}>
      <Card.Header>
        <Link to="/login" user={user} balance={balance} pathname="/">
          <center>Change User</center>
        </Link>
      </Card.Header>
    </Card>
    <Card style={{ width: "10rem" }}>
      <Card.Header>
        <Link to="/userProfile" user={user} balance={balance}>
          <center>User Profile</center>
        </Link>
      </Card.Header>
    </Card>
    <Card style={{ width: "10rem" }}>
      <Card.Header>
        <Link to="/debits" user={user} balance={balance}>
          <center>Debits</center>
        </Link>
      </Card.Header>
    </Card>
    <Card style={{ width: "10rem" }}>
      <Card.Header>
        <Link to="/credits" user={user} balance={balance}>
          <center>Credits</center>
        </Link>
      </Card.Header>
    </Card>
    </>
  );
};

export default Home;
