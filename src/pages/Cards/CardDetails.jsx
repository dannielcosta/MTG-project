import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import APIURL from '../../data/mtg-api'

const API = APIURL()

function CardDetails() {

  const {cardId} = useParams()
  const [card, setCard] = useState([])

  useEffect(()=>{
    axios
    .get(`${API}/${cardId}`)
    .then((response)=>{
      console.log(response.data)
      setCard(response.data)
    })
    .catch((error)=>{console.log(error)})
  },[])


  return (
    <div className='cardDetailsPage' style={{backgroundImage: `url(${card.image_uris?.art_crop})`}}>
      <h1>{card.name}</h1>
      <div className='detailsContainer'>
          <img src={card.image_uris?.normal} alt={card.name} />
          
  
        <section className='cardDetailsPageText'>
          <h3>Type: {card.type_line}</h3>
          <h3>Artist: {card.artist}</h3>
          <h3>Date Of Release: {card.released_at}</h3>
          <h3>Edition: {card.set_name}</h3>
        </section>
      </div>      
    </div>
  );

}
export default CardDetails