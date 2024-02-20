import React from 'react'
import MTGcolors from '../../images/mtg-colors.png'
import { Link } from 'react-router-dom'

// Cards
import artifactCol from "../../images/mtg-colors/artifact.png";
import blackCol from "../../images/mtg-colors/black.png";
import blueCol from "../../images/mtg-colors/blue.png";
import greenCol from "../../images/mtg-colors/green.png";
import redCol from "../../images/mtg-colors/red.png";
import whiteCol from "../../images/mtg-colors/white.png";


function About() {
  return (
    <section className="About">
      <div className="About-Colors">
      <Link to="/about/black"><img src={`${blackCol}`} /></Link>
      <Link to="/about/blue"><img src={`${blueCol}`} /></Link>
      <Link to="/about/green"><img src={`${greenCol}`} /></Link>
      <Link to="/about/red"><img src={`${redCol}`} /></Link>
      <Link to="/about/white"><img src={`${whiteCol}`} /></Link>
      <Link to="/about/artifacts"><img src={`${artifactCol}`} /></Link> 
</div>

      <div className="about-intro">
        Released in 1993 by Wizards of the Coast, Magic was the first trading card game and had approximately 
        fifty million players as of February 2023, and over twenty billion Magic cards were produced in the period 
        from 2008 to 2016, during which time it grew in popularity.
      </div>

    <img className="mtgcolorsImg" src={`${MTGcolors}`}></img>
    <div className="about-colors">
    The five colors of Magic: The Gathering
    <br/>
    Most cards in Magic are based on one of five colors that make up the game's "Color Wheel" or "Color Pie", 
    shown on the back of each card, and each representing a school or realm of magic: white, blue, black, red, and green. 
    The arrangement of these colors on the wheel describes relationships between the schools, which can broadly affect deck construction and game execution. For a given color such as white, the two colors immediately adjacent to it, green and blue, are considered complementary, while the two colors on the opposite side, black and red, are its opposing schools. The Research and Development (R&D) team at Wizards of the Coast aimed to balance power and abilities among the five colors by using the Color Pie to differentiate the strengths and weaknesses of each. This guideline lays out the capabilities, themes, and mechanics of each color and allows for every color to have its own distinct attributes and gameplay. The Color Pie is used to ensure new cards are thematically in the correct color and do not infringe on the territory of other colors.
    The concepts behind each of the colors on the Color Wheel, based on a series of articles written by Mark Rosewater , 
    are as follows:
    <br/>
    * White represents order, peace, and light, and draws mana from plains. White planeswalkers can summon individually 
    weak creatures that are collectively strong as a group such as soldiers, as well as powerful creatures and leaders that 
    can strengthen all of the player's creatures with additional abilities or strength. Their spells tend to focus on healing 
    or preventing damage, protecting their allies, and neutralizing an opponent's advantages on the battlefield.
    <br/>
    * Blue represents intellect, logic, manipulation, and trickery, and pulls its mana from islands. Its magic is typically 
    associated with the classical elements of air and water. Many of Blue's spells can interact or interfere with the opponent's 
    spells as well as with the general flow of the game. Blue's magic is also associated with control, allowing the player to gain 
    temporary or full control of the opponent's creatures. Blue creatures often tend to be weak but evasive and difficult to target.
    <br/>
    * Black represents power, death, corruption, and sacrifice, drawing mana from swamps. Many of Black's creatures are undead, and 
    several can be sacrificed to make other creatures more powerful, destroy opponent's creatures or permanents, or other effects. 
    Black creatures may be able to draw the life taken in an attack back to their caster, or may even be able to kill creatures 
    through a deathtouch effect. Black's spells similarly coerce sacrifice by the player or their opponent through cards or life.
    <br/>
    * Red represents freedom, chaos, fury, and warfare, pulling its power from mountains. Its powers are associated with the 
    classical fire and earth elements, and tends to have the strongest spells such as fireballs that can be powered-up by tapping 
    additional mana when cast. Red is an offense-oriented class: in addition to powerful creatures like dragons, red planeswalkers 
    can summon weak creatures that can strike quickly to gain the short-term edge.
    <br/>
    * Green is the color of life, nature, evolution, and indulgence, drawing mana from forests. Green has the widest array of 
    creatures to draw upon, ranging across all power levels, and generally is able to dominate the battlefield with many creatures 
    in play at once. Green creatures and spells can generate life points and mana, and can also gain massive strength through spells.
    </div>
      
      
      
      
      
      
      <div>
      Magic: The Gathering is a trading card game. 
        Players buy and trade cards, and build their own card decks. 
        Decks must have at least 60 cards. Players can play in tournaments, and there are even professional Magic players.</div>
    </section>
  )
}

export default About