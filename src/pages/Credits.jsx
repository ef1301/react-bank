import React, { useState, useEffect } from "react";
import axios from "axios";

import CreditCard from '../cards/Credit';

const Credits = () => {
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const setup = async () => {
      await axios
        .get("https://moj-api.herokuapp.com/credits")
        .then(res => setCredits(res.data));
    };
    setup();
  }, []);

  return (
    <div id="credits">
        <h1>Credits</h1>
        <div id="all-credits">
            {credits !== null && credits.map((credit,index) => <CreditCard key={index} credit={credit}/>)}
        </div>
    </div>
  );
};

export default Credits;