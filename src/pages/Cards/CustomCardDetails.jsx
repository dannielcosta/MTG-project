import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import JSON_SERVER_LINK from '../../data/json-backend-cards-created'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function CustomCardDetails() {

    const jsonServerLink = JSON_SERVER_LINK()
    const {cardId} = useParams()
    const [card, setCard] = useState([])
    const Navigate = useNavigate()

    useEffect(()=>{
        axios
        .get(`${jsonServerLink}/${cardId}`)
        .then((response)=>{
          console.log(response.data)
          setCard(response.data)
        })
        .catch((error)=>{console.log(error)})
      },[])
    
      const handleDeleteCard = (id) => {
        axios
            .delete(`${jsonServerLink}/${cardId}`)
            .then(() => {
                console.log('Card deleted successfully');
                Navigate('/custom-cards')
            })
            .catch((error) => {
                console.error('Error deleting card:', error);
            });
    };


  return (
    <section>
    <div className="ver">
        <h1>{card.name}</h1>
        <img src={card.imageURL}/>
        <Link to={`/custom-card-edit/${cardId}`}>
            <button>Edit Card</button>
        </Link>
        <button onClick={() => handleDeleteCard(card.Id)}>Delete Card</button>
    </div>
    <div className="ButtonCentered">
    </div>
    </section>
  )
}

export default CustomCardDetails