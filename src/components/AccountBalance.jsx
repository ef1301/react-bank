import React from "react";

const AccountBalance = ({balance}) => {
    const reducer = (accumulator, currentValue) => {
        return parseFloat(accumulator,10) + parseFloat(currentValue[1].amount,10);
    };
    const creditBalance = Object.entries(balance.credit).reduce(reducer, 0);
    const debitBalance = Object.entries(balance.debit).reduce(reducer, 0);
    const currentBalance = creditBalance - debitBalance;
    return (
      <>
        Total Credits: {creditBalance.toFixed(2)}<br></br>
        Total Debits: {debitBalance.toFixed(2)}<br></br>
        Current Balance: {currentBalance.toFixed(2)}
      </>
    );
}

export default AccountBalance;
