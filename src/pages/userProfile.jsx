import React from "react";

import Link from "../components/Link";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const userProfile = ({ location }) => {
  const { state } = location;
  const user = state.user;
  const balance = state.balance;

  return (
    <>
      <h1> Welcome {user.name} </h1>
      <div> Member Since {user.join} </div>
      <Card style={{ width: "10rem" }}>
        <Card.Header>
          <Link to="/" user={user} balance={balance}>
            <center>Home</center>
          </Link>
        </Card.Header>
      </Card>
    </>
  );
}

export default userProfile;
