import React, { useState } from "react";

import {Link} from 'react-router-dom';

const Home = () => {

  return (
    <>
    Home
    <Link to="/debits">Debits</Link>
    <Link to="/credits">Credits</Link>
    </>
  );
};

export default Home;