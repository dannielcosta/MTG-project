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
                    const filteredData = response.data.data.filter(card => card.image_uris?.normal);
                    setCards(filteredData);
                    setFilteredCards(filteredData);
            })
            .catch(error => {
                console.error('Error fetching cards:', error);
            });
    }, []);

    const filterCardsByColor = color => {
        if (color === 'All') {
            setFilteredCards(cards);
        } else {
            if (color.length === 0) {
                setFilteredCards(cards.filter(card => !card.colors || card.colors.length === 0));
            } else {
                setFilteredCards(cards.filter(card => card.colors?.includes(color)));
            }
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
                <button className="btn-31" onClick={() => handleFilterClick('All')}>
                    <span className="text-container">
                        <span className="text">All</span>
                    </span>
                </button>
                <button className="btn-31" onClick={() => handleFilterClick('B')}>
                    <span className="text-container">
                        <span className="text">Black</span>
                    </span>
                </button>
                <button className="btn-31" onClick={() => handleFilterClick('U')}>
                    <span className="text-container">
                        <span className="text">Blue</span>
                    </span>
                </button>
                <button className="btn-31" onClick={() => handleFilterClick('G')}>
                    <span className="text-container">
                        <span className="text">Green</span>
                    </span>
                </button>
                <button className="btn-31" onClick={() => handleFilterClick('R')}>
                    <span className="text-container">
                        <span className="text">Red</span>
                    </span>
                </button>
                <button className="btn-31" onClick={() => handleFilterClick('W')}>
                    <span className="text-container">
                        <span className="text">White</span>
                    </span></button>
                <button className="btn-31" onClick={() => handleFilterClick([])}>
                    <span className="text-container">
                        <span className="text">Colorless</span>
                    </span>
                </button>
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
