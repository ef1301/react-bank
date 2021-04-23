import React, { useState } from "react";

import DebitCard from '../cards/Debit';

const stringifyDate = date =>
  `${date.toLocaleDateString("en-US")} ${date.toLocaleTimeString("en-US")} `;

const Debits = ({balance}) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleDescription = (e) => {
    setDescription(prevState => e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(prevState => e.target.value);
  }

  const submitForm = e => {
    e.preventDefault();
    let date = stringifyDate(new Date());
    const newSubmission = {
      date, description, amount
    };
    console.log(newSubmission);
    //setDebits(prevState => [...prevState, newSubmission])
  }

  //console.log(props);
  console.log(balance);

  return (
    <div id="debits">
        <h1>Debits</h1>
        <form id="add-debits" onSubmit={submitForm}>
          <fieldset>
            <legend>Add Debit.</legend>
          <label htmlFor="debit-description">Description:</label> <br/>
          <input type="text" id="debit-description" onChange={handleDescription}></input><br/>
          <label htmlFor="debit-amount">Amount:</label><br/>
          <input type="text" id="debit-amount" onChange={handleAmount}></input>
          </fieldset>
          <input type="submit" value="Add Debit"></input>
        </form>
        <div id="all-debits">
            {/*debits !== null && debits.map((debit,index) => <DebitCard key={index} debit={debit}/>)*/}
        </div>
    </div>
  );
};

export default Debits;