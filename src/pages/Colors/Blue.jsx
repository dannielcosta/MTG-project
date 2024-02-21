import React from "react";
import blueCol from "../../images/mtg-colors/blue.png";
import { Link } from "react-router-dom";


function Blue() {
  return (
    <section className="Colors">


      {/* ------------------------------------- BUTTON TO CHANGE PAGE AND COLOR IMAGE   <- / ->   -------------------------------------------------- */}
      <Link to="/about/black">
        <div class="container">
          <button class="about-pageBtnLeft">Button</button>
          <span class="arrow first">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
          <span class="arrow second">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
          <span class="arrow third">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
        </div>

      </Link>

      <div>
        <img src={`${blueCol}`} />
      </div>

      <Link to="/about/green">
        <div class="container">
          <button class="about-pageBtnRight">Button</button>
          <span class="arrow first">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
          <span class="arrow second">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
          <span class="arrow third">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
        </div>
      </Link>


      {/*   ------------------------------------- ABOUT SECTION      -------------------------------------------------- */}



      <div>
        <strong>The Story </strong>
      </div>
      <div>
        Blue's philosophy revolves around viewing the world as an opportunity
        filled with wonders and possibilities. Central to Blue's essence is a
        profound desire to unearth the world's secrets and transform dreams into
        reality, driven by the belief in tabula rasa—the notion that all things
        begin existence without predetermined destiny or purpose. In contrast to
        green's conviction in predetermined life paths, Blue emphasizes that the
        essence of a thing is shaped by its journey, molded by the tumultuous
        currents of existence. Those wielding knowledge and willpower wield the
        power to mold and reshape reality at will, perceiving essence as fluid
        and adaptable like clay. The pursuit of mastery over possibility and
        essence propels Blue's reverence for knowledge. With omniscience as its
        beacon, Blue endeavors to unlock boundless potential and refine itself
        towards perfection. Its core principles highlight preference for
        illusion over reality, thought over action, and an unwavering focus on
        the future's potential over the constraints of the past or present.
      </div>
      <br />
      <div>
        <strong>The Allies</strong>
      </div>
      <div className="Allies">
        <div className="Humanoid/Intelligent Races">
          <strong>Humanoid/Intelligent Races: </strong>
          <br />
          <ul>
            <li>Merfolk (characteristic creature)[11]</li>
            <li>Amphin</li>
            <li>Aven (Birds; shared with white)</li>
            <li>Cephalids</li>
            <li>Djinni</li>
            <li>Faeries (shared with black)</li>
            <li>Harpies (shared with black)</li>
            <li>Homarids</li>
            <li>Homunculi</li>
            <li>Kappa</li>
            <li>Metathran</li>
            <li>Moonfolk</li>
            <li>Mutant (shared with green)</li>
            <li>Nagas (shared with green)</li>
            <li>Noggles (shared with red)</li>
            <li>Reflection</li>
            <li>Shapeshifters</li>
            <li>Sirens</li>
            <li>Soratami</li>
            <li>Spirits</li>
            <li>Sphinxes (iconic creature)</li>
            <li>Thalakos</li>
            <li>Vedalken</li>
            <li>Zombies (shared with black and white)</li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <div className="Monstrous/Subservient Types">
          <strong>Monstrous/Subservient Types:</strong>
          <br />

          <ul>
            <li>Birds (shared with white)</li>
            <li>Chimeras (shared with green)</li>
            <li>Crabs</li>
            <li>Crocodiles</li>
            <li>Drakes</li>
            <li>Elementals (shared with red and green)</li>
            <li>Fish</li>
            <li>Frogs</li>
            <li>Hippos (shared with green)</li>
            <li>Illusions</li>
            <li>Incarnations</li>
            <li>Jellyfish</li>
            <li>Krakens</li>
            <li>Leeches</li>
            <li>Leviathan</li>
            <li>Licids</li>
            <li>Nautili</li>
            <li>Octopuses</li>
            <li>Oysters</li>
            <li>Serpents</li>
            <li>Ships</li>
            <li>Snakes (shared with green)</li>
            <li>Spawn</li>
            <li>Squids</li>
            <li>Starfish</li>
            <li>Surrakar (shared with black)</li>
            <li>Turtles</li>
            <li>Weirds (shared with red)</li>
            <li>Whales</li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <div className="Classes">
          <strong>Classes:</strong>
          <br />
          <ul>
            <li>Artificers (shared with white and red)</li>
            <li>Monks (shared with white)</li>
            <li>Ninjas (shared with black)</li>
            <li>Pirates (shared with black and red)</li>
            <li>Rogues (shared with black and red)</li>
            <li>Wizards (shared with black and red)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Blue;
