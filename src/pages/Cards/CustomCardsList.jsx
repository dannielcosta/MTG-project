import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import JSON_SERVER_LINK from "../../data/json-backend-cards-created";
import { Link } from "react-router-dom";

function CustomCardsList() {
  const [cards, setCards] = useState([]);
  const jsonServerLink = JSON_SERVER_LINK();

  useEffect(() => {
    axios
      .get(jsonServerLink)
      .then((response) => {
        setCards(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteCard = (id) => {
    axios
      .delete(`${jsonServerLink}/${id}`)
      .then(() => {
        console.log('Card deleted successfully');
        // Optionally, you can refresh the card list after deletion
        axios.get(jsonServerLink)
          .then((response) => {
            setCards(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.error('Error deleting card:', error);
      });
  };

  return (
    <div className="cardsListPage">
      <h1>Custom Cards List</h1>
      <section className="lists">
        <Link to="/cards">
          <button className="btn-31">
            <span className="text-container">
              <span className="text">Cards List</span>
            </span>
          </button> 
        </Link>
        <Link to="/create-your-card">
          <button className="btn-31 create">
            <span className="text-container">
              <span className="text">Create Your Card</span>
            </span>
          </button> 
        </Link>
      </section>
      <p className="mindThis"><i>(Mind that the cards can take some seconds to reload...)</i></p>
      <div className="cardsDisplay">
        {cards.length > 0 &&
          cards.map((card) => (
            <div className="newCArdContainer">
              <div className="custom-card" key={card.id}>
                <section className="header-custom">
                  <p className="">
                    <b>{card.name}</b>
                  </p>
                  <section className="header-custom-mana">
                    <p>{card.mana}</p>

                    {card.elements.length > 0 &&
                      card.elements.map((element, index) => (
                        <img
                          className="elements-color"
                          key={index}
                          src={`src/images/mtg-colors/${element}.png`}
                          alt={element}
                        />
                      ))}
                  </section>
                </section>
                <img src={card.imageURL} alt={card.name} className="AIimg"/>
                <p className="custom-card-type">
                  <b>{card.type}</b>
                </p>
                <section className="custom-card-details">
                  <section className="custom-card-abilities">
                    <p>
                      <b>{card.mainAb}</b>
                    </p>
                    <p>{card.combatAb}</p>
                  </section>
                </section>
              </div>
              <div className="buttons">
                <Link to={`/custom-card-edit/${card.id}`}>
                  <button>Edit Card</button>
                </Link>
                <button onClick={() => handleDeleteCard(card.id)} className="delete-button">Delete card</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CustomCardsList;