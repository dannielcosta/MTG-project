/* import React from 'react'
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
    } 

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

export default CardsList */


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import APIURL from '../../data/mtg-api';

const API = APIURL();

function CardsList() {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        axios.get(`${API}/search?q=c`)
            .then(response => {
                setCards(response.data.data.filter(card => card.image_uris?.normal));
            })
            .catch(error => {
                console.error('Error fetching cards:', error);
            });
    }, []);

    const filterCardsByColor = color => {
        if (color === 'All') {
            setFilteredCards(cards);
        } else {
            setFilteredCards(cards.filter(card => card.colors?.includes(color)));
        }
    };

    const handleFilterClick = color => {
        filterCardsByColor(color);
    };

    return (
        <div className="cardsListPage">
            <h1>Cards List</h1>
            <section className="lists">
                <Link to="/custom-cards">
                    <p>Custom Cards List</p>
                </Link>
            </section>
            <section className="cardsFilters">
                <p>Filter by Color:</p>
                <button className="btn-31" onClick={() => handleFilterClick('All')}>All</button>
                <button className="btn-31" onClick={() => handleFilterClick('B')}>Black</button>
                <button className="btn-31" onClick={() => handleFilterClick('U')}>Blue</button>
                <button className="btn-31" onClick={() => handleFilterClick('G')}>Green</button>
                <button className="btn-31" onClick={() => handleFilterClick('R')}>Red</button>
                <button className="btn-31" onClick={() => handleFilterClick('W')}>White</button>
                <button className="btn-31" onClick={() => handleFilterClick('Artifact')}>Artifact</button>
            </section>
            <div className="cardsDisplay">
                {filteredCards.length > 0 ? (
                    filteredCards.map(card => (
                        <Link to={`/cards/${card.id}`} key={card.id}>
                            <img src={card.image_uris?.normal} alt={card.name} />
                        </Link>
                    ))
                ) : (
                    <p>No cards found.</p>
                )}
            </div>
        </div>
    );
}

export default CardsList;
