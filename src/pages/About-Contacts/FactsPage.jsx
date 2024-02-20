import React from 'react';
import FACTS_JSON from '../../data/funfact-api.json';

/* const facts = Object.values(FACTS_JSON); */
const facts = FACTS_JSON.facts

function FactsPage() {
  return (
    <div className="Facts">
      {facts.map((fact) => (
        <article key={fact.id}>
          <h3>{fact.fact}</h3>
        </article>
      ))}
    </div>
  );
  
}

export default FactsPage;
