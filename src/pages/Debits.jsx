import React, { useState } from "react";

import Link from "../components/Link";
import DebitCard from "../cards/Debit";
import AccountBalance from "../components/AccountBalance";
import { stringifyDate, newId } from "../utils/utils";

const Debits = ({ location }) => {
  const { state } = location;
  const user = state.user;
  const oldBalance = state.balance;

  const [debit, setDebit] = useState(oldBalance.debit);
  const balance = { ...oldBalance, debit };

  const defaultDebit = { description: "", amount: 0 };
  const [newDebit, setNewDebit] = useState(defaultDebit);

  const updateNewDebit = (e) => {
    e.preventDefault();
    setNewDebit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateDebit = (e) => {
    const submission = { ...newDebit, id: newId(), date: stringifyDate() };
    setDebit((prev) => [...prev, submission]);
    setNewDebit(defaultDebit);
  };

  return (
    <div id="debits">
      <h1>Debits</h1>
      <Link to="/" user={user} balance={balance}>
        Home
      </Link>

      <div id="add-debit">
        Description:{" "}
        <input
          name="description"
          type="text"
          value={newDebit.description}
          onChange={updateNewDebit}
        />
        <br />
        Amount:{" "}
        <input
          name="amount"
          type="number"
          value={newDebit.amount}
          onChange={updateNewDebit}
        />
        <br />
        <button onClick={updateDebit}>Enter</button>
      </div>
      <br />
      <AccountBalance balance={balance}/>
      <div id="all-debits">
        {debit !== null &&
          debit.map((debit, index) => <DebitCard key={index} debit={debit} />)}
      </div>
    </div>
  );
};

export default Debits;
