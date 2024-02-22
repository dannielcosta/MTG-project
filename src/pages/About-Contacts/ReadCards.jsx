import React from "react";
import ReadTheCards from "../../images/ReadCards.png";
import {Link} from 'react-router-dom'


function ReadCards() {
  return (
    <section>
      <div className="HowtoRead">

          <section className="title">
            <h3>How to read the card</h3>
          </section>
          
          <div className="PlayRules">
          <img src={`${ReadTheCards}`} alt="Card Instructions" />
          <div className="Instructions">
            <ol>
              <li>
                <strong>Name</strong> - You can only have 4 cards of the same
                name, except Lands that are unlimited.
              </li>
              <li>
                <strong>Mana Cost</strong> - Mandatory and/or colorless. Every
                card has a price to pay to put in the game; this creature, for
                example, needs a white color and 1 more of any color.
              </li>
              <li>
                <strong>Type and Subtype</strong> - Every Magic card has a type
                and a subtype, such as Lands, Creatures, Planeswalkers,
                Artifacts, and magical cards, like Enhancements, Instant, and
                Sorcery.
              </li>
              <li>
                <strong>Set Symbol</strong> - According to its color, it sets
                the rarity:
                <ul>
                  <li>Black and White - common</li>
                  <li>Silver - uncommon</li>
                  <li>Gold - rare</li>
                  <li>Orange Gold - mythic rare (The Rarest of them all)</li>
                </ul>
              </li>
              <li>
                <strong>Text Box</strong>:
                <ul>
                  <li>Main Abilities and Combat abilities</li>
                  <li>
                    RULES TEXT explains special effects a card has during
                    gameplay. Reminder text can sometimes appear (in
                    parentheses, like this) to clarify how abilities work. For a
                    List of common Magic keywords and effects, click here.
                  </li>
                  <li>
                    FLAVOR TEXT / STORY TEXT does not affect gameplay but exists
                    to provide the backstory of the card. Flavor text is always
                    italicized.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Power</strong> - Attack / Defense: The left number shows
                a creature's power (damage it deals) and the right number shows
                toughness (damage it takes to destroy it). If a creature takes
                damage but isn't destroyed, it will recover at the end of the
                turn.
              </li>
              <li>
                <strong>Creator / Illustrator</strong>
              </li>
            </ol>
          </div>
        </div>
        <Link to={'/about'}>
            <button className="btn-31">
              <span className="text-container">
                <span className="text">Back</span>
              </span>
            </button>
          </Link>
        </div>
    </section>
  );
}

export default ReadCards;
