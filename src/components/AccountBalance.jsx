import React from "react";

const AccountBalance = ({balance}) => {
    const reducer = (accumulator, currentValue) => {
        return parseFloat(accumulator,10) + parseFloat(currentValue[1].amount,10);
    };
    const creditBalance = Object.entries(balance.credit).reduce(reducer);
    const debitBalance = Object.entries(balance.debit).reduce(reducer);
    const currentBalance = creditBalance - debitBalance;
    return (<>
    Total Credits: {creditBalance}<br></br>
    Total Debits: {debitBalance}<br></br>
    Current Balance: {currentBalance}
    </>);
}

export default AccountBalance;