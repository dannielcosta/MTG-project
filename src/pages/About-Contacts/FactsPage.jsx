import React from 'react';
import FACTS_JSON from '../../data/funfact-api.json';
import { Link } from 'react-router-dom';

/* const facts = Object.values(FACTS_JSON); */
const facts = FACTS_JSON.facts

function FactsPage() {
  return (
    <div className="Facts">
      {facts.map((fact) => (
        <article key={fact.id}>
          <h3>"{fact.fact}"</h3>
        </article>
      ))}
      <div className="ButtonCentered">
       <Link to={'/'}>
            <button className="btn-31">
              <span className="text-container">
                <span className="text">Back</span>
              </span>
            </button>
          </Link>
          </div>
    </div>
  );
  
}

export default FactsPage;
