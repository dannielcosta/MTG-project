import React from 'react';
import JSON_SERVER_LINK from '../data/funfact-api.json';
import { useNavigate } from 'react-router-dom';

function FactDayDetail() {
  const facts = JSON_SERVER_LINK.facts; 

  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();
  const factIndex = (dayOfMonth - 1) % facts.length; 
  const factToShow = facts[factIndex];
  const navigate = useNavigate()

  return (
    <div className='dayFact'>
      <h1>Today's Fact</h1>
      <div className='factText'>
        <h3>"{factToShow.fact}"</h3>
      </div>
        
      <button onClick={() => navigate("/facts")} className="btn-31">
        <span className="text-container">
          <span className="text">More Fun Facts</span>
        </span>
      </button>
    </div>
  );
}

export default FactDayDetail;
