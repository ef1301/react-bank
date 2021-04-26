import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const DebitCard = ({ debit }) => {
  return (
    <div id="debit-card">
    <Card style={{ width: "40rem" }}>
      <Card.Header>
      <b>Debit Information for: </b> {debit.description}
      </Card.Header>
      <Card.Body>
        <li><i>Debit Amount:</i> {debit.amount}</li>
        <li><i>Debit Date:</i> {debit.date}</li>
      </Card.Body>
    </Card>
    </div>
  );
};

export default DebitCard;
