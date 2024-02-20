import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import JSON_SERVER_LINK from '../../data/json-backend-cards-created'
import { Link } from 'react-router-dom'


function CustomCardsList() {

    const [cards, setCards] = useState([]);
    const jsonServerLink = JSON_SERVER_LINK()

    useEffect(()=>{
        axios
        .get(jsonServerLink)
        .then((response) =>{
            setCards(response.data)
            console.log(response.data)
        })
        .catch((error)=>{console.log(error)})
    }, [])
  return (
    <div className='cardsListPage'>
                    <h1>Cards List</h1>
                    <section>
                        <p>Here there will be filters</p>
                        <Link to={"/custom-cards"}>
                            <p>Custom Cards List</p>
                        </Link>
                    </section>

                    <div className="cardsDisplay">
                        {cards.length > 0 &&
                            cards.map(card => (
                                <Link to={`/custom-cards/${card.id}`}>
                                    <h1>{card.name}</h1>
                                </Link>
                            ))
                        }
                    </div>
                </div>
  )
}

export default CustomCardsList