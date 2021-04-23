import React from "react";

const DebitCard = ({ debit }) => {
  return (
    <div id="debit-card">
      {debit.description} {debit.amount} {debit.date}
    </div>
  );
};

export default DebitCard;