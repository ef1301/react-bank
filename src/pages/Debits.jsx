import React, { useState, useEffect } from "react";
import axios from "axios";

import DebitCard from '../cards/Debit';

const Debits = () => {
  const [debits, setDebits] = useState(null);

  useEffect(() => {
    const setup = async () => {
      await axios
        .get("https://moj-api.herokuapp.com/debits")
        .then(res => setDebits(res.data));
    };
    setup();
  }, []);

  return (
    <div id="debits">
        <h1>Debits</h1>
        <div id="all-debits">
            {debits !== null && debits.map((debit,index) => <DebitCard key={index} debit={debit}/>)}
        </div>
    </div>
  );
};

export default Debits;