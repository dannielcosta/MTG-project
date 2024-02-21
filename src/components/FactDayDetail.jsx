import React from 'react';
import JSON_SERVER_LINK from '../data/funfact-api.json';

function FactDayDetail() {
  const facts = JSON_SERVER_LINK.facts; 

  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();
  const factIndex = (dayOfMonth - 1) % facts.length; 
  const factToShow = facts[factIndex];

  return (
    <div>
      <h1>Today's Fact</h1>
      <div>
        <h3>{factToShow.fact}</h3>
      </div>
    </div>
  );
}

export default FactDayDetail;
