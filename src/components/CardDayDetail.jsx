import React, { useEffect, useState } from "react";
import axios from "axios";
import APIURL from "../data/mtg-api";
import { Link } from "react-router-dom";

const API = APIURL();

function CardDayDetail() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/search?q=c`)
      .then((response) => {
        setCards(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      const currentDate = new Date();
      const dayOfMonth = currentDate.getDate();
      const cardIndex = dayOfMonth % cards.length;
      setCard(cards[cardIndex]);
    }
  }, [cards]);

  useEffect(() => {
    console.log(card);
  }, [card]);

  return (
    <div className="cardOfDay">
      {card && (
        <>
          <h1>{card.name}</h1>
          <div className="detailsContainer">
          <Link to={`/cards/${card.id}`}> 
            <img src={card.image_uris?.normal} alt={card.name} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CardDayDetail;
