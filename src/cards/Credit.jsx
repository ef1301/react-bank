import React from "react";

const CreditCard = ({ credit }) => {
  return (
    <div id="credit-card">
      {credit.description}
      {credit.amount}
      {credit.date}
    </div>
  );
};

export default CreditCard;
