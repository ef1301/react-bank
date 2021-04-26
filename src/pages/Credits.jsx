import React, { useState } from "react";

import Link from "../components/Link";
import CreditCard from "../cards/Credit";
import AccountBalance from "../components/AccountBalance";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { stringifyDate, newId } from "../utils/utils";

const Credits = ({ location }) => {
  const { state } = location;
  const user = state.user;
  const oldBalance = state.balance;

  const [credit, setCredit] = useState(oldBalance.credit);
  const balance = { ...oldBalance, credit };

  const defaultCredit = { description: "", amount: 0 };
  const [newCredit, setNewCredit] = useState(defaultCredit);

  const updateNewCredit = (e) => {
    e.preventDefault();
    setNewCredit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateCredit = (e) => {
    const submission = { ...newCredit, id: newId(), date: stringifyDate() };
    setCredit((prev) => [...prev, submission]);
    setNewCredit(defaultCredit);
  };

  return (
    <div id="credits">
      <h1>Credits</h1>
      <Card style={{ width: "10rem" }}>
        <Card.Header>
          <Link to="/" user={user} balance={balance}>
            <center>Home</center>
          </Link>
        </Card.Header>
      </Card>

      <div id="add-credit">
        Description:{" "}
        <input
          name="description"
          type="text"
          value={newCredit.description}
          onChange={updateNewCredit}
        />
        <br />
        Amount:{" "}
        <input
          name="amount"
          type="number"
          value={newCredit.amount}
          onChange={updateNewCredit}
        />
        <br />
        <button onClick={updateCredit}>Enter</button>
      </div>
      <br />
      <AccountBalance balance={balance}/>
      <div id="all-credits">
        {credit !== null &&
          credit.map((credit, index) => (
            <CreditCard key={index} credit={credit} />
          ))}
      </div>
    </div>
  );
};

export default Credits;
