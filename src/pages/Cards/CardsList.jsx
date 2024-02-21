import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import APIURL from '../../data/mtg-api'
import { Link } from 'react-router-dom'

const API = APIURL()

function CardsList() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios
            .get(`${API}/search?q=c`)
            .then((response) => {
                setCards(response.data.data)
                console.log(response.data.data)
            })
            .catch((error) => { console.log(error) })
    }, [])

    const cardsWithImage = cards.filter((card) => { return (card.image_uris?.normal) })

/*     function filter(color) {
        console.log(cards[0] && cards[0].colors);

        let filteredCards = []

        cards && cards.forEach(card => {
            card && card.colors.forEach((colour)=>{
                if(colour === color){
                    filteredCards.push(card)
                }
            })
        });

        setCards(filteredCards)
    } */

    return (
                <div className='cardsListPage'>
                    <h1>Cards List</h1>
                    <section className='lists'>
                        <Link to={"/custom-cards"}>
                            <p>Custom Cards List</p>
                        </Link>
                    </section>
                    <section className='cardsFilters'>
                        <p>Here there will be filters</p>
                        <button>Black</button>
                        <button>Blue</button>
                        <button>Green</button>
                        <button>Red</button>
                        <button>White</button>
                        <button>Artifact</button>
                    </section>

                    <div className="cardsDisplay">
                        {cardsWithImage.length > 0 &&
                            cardsWithImage.map(card => (
                                <Link to={`/cards/${card.id}`}>
                                    <img key={card.id} src={card.image_uris?.normal} alt={card.name} />
                                </Link>
                            ))
                        }
                    </div>
                    
                </div>
    );
}

export default CardsList