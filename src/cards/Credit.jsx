import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreditCard = ({ credit }) => {
  return (
    <div id="credit-card">
    <Card style={{ width: "40rem" }}>
      <Card.Header>
      <b>Credit Information for: </b> {credit.description}
      </Card.Header>
      <Card.Body>
        <li><i>Credit Amount:</i> {credit.amount}</li>
        <li><i>Credit Date:</i> {credit.date}</li>
      </Card.Body>
    </Card>
    </div>
  );
};

export default CreditCard;
