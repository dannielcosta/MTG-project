import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import APIURL from '../data/mtg-api'

const API = APIURL()

function CardDayDetail() {

  const [cards, setCards] = useState([])
  const [card, setCard] = useState([])

  useEffect(()=>{
    axios
    .get(`${API}/search?q=c`)
    .then((response)=>{
/*       console.log(response.data.data) */
      setCards(response.data)
      const currentDate = new Date();
      const dayOfMonth = currentDate.getDate();
      const cardIndex = dayOfMonth % cards.length;
      setCard(cards[cardIndex]);
    })
    .catch((error)=>{console.log(error)})
  },[])

  console.log(card)
  
  return (
    <div></div>
 /*    <div className='cardDetailsPage'>
      <h1>{card.name}</h1>
      <div className='detailsContainer'>
        <img src={card.image_uris?.normal} alt={card.name} />
      </div>
    </div> */
  );

}
export default CardDayDetail

