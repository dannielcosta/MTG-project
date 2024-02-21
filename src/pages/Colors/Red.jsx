import React from "react";
import redCol from "../../images/mtg-colors/red.png";
import { Link } from "react-router-dom";


function Red() {
  return (
    <section className="Colors">


      {/* ------------------------------------- BUTTON TO CHANGE PAGE AND COLOR IMAGE   <- / ->   -------------------------------------------------- */}
      <Link to="/about/green">
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
        <img src={`${redCol}`} />
      </div>

      <Link to="/about/white">
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
        Red looks on the world and sees adventure. Life is a chance to
        experience something - many things - and for Red, there is no more
        worthwhile endeavor than to enjoy life by the adventure it offers.
        Experiences are what life is about, and to appreciate the full range of
        life's experiences, Red lives by emotion. What makes one laugh, what
        makes one cry, what one hates, and what one loves, this makes up what a
        person is. Red believes that a person need only look to these things to
        find one's wishes and desires in life; to deny them is to deny one's
        life of meaning. To accord with its beliefs, Red seeks out new
        experiences, and new ways to express itself, and seizes on them. It
        finds these ends in the complementary pillars of Impulse and Chaos.
        Impulse, to Red, means emotional action. By acting (doing) as one's
        heart desires, and only by doing so, one can find happiness with the
        experience one has to show for it. With Chaos - random action - Red
        creates the freedom for anyone to express his or her emotions. In a
        sense, by opening up new possibilities, Red's Chaos frees novel
        experiences from the "lattice" of the status quo. In valuing emotion and
        adventure so greatly, what Red truly prizes is freedom. To live life the
        Red way - passionately and imminently - Red must be able to act on its
        impulses, doing what it feels each moment without delay. It doesn't want
        to be censored or controlled, because when one's passions are shackled
        from the action, a person cannot be who they are. To disallow them to be
        who they are is to destroy them; in Red's view, censorship is death. As
        such, the idea of rules, of pinning someone to one course even if their
        emotions urge them down another, is atrocious to Red. Where Red can see,
        those who dare to speak of rules and limits will meet with a furious
        ultimatum to shut up. All of these things often get Red into trouble,
        which Red seems to not really care about. Red will fight against anyone
        who restrains anyone else, and the tools that Red uses to make this
        point, and those it uses to seek its own richness of passion, are the
        basis of card design for Red.
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
            <li>Goblins (characteristic creature) [11]</li>
            <li>Cyclopes</li>
            <li>
              Dragons (iconic creature, although other colors have a little)
            </li>
            <li>Devils</li>
            <li>Dwarves</li>
            <li>Efreeti</li>
            <li>Giants</li>
            <li>Gnomes</li>
            <li>Kobolds</li>
            <li>Minotaurs</li>
            <li>Noggles (shared with blue)</li>
            <li>Orcs</li>
            <li>Orggs</li>
            <li>Viashino</li>
            <li>Vulshok</li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <div className="Monstrous/Subservient Types">
          <strong>Monstrous/Subservient Types:</strong>
          <br />

          <ul>
            <li>Goats</li>
            <li>Gremlins</li>
            <li>Hellions</li>
            <li>Hyenas (shared with green and white)</li>
            <li>Kavu (Shared with green)</li>
            <li>Leapers</li>
            <li>Manticores</li>
            <li>Ogres (shared with black)</li>
            <li>Phoenixes</li>
            <li>Salamanders</li>
            <li>Weirds (shared with blue)</li>
            <li>Wolverines (shared with green)</li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <div className="Classes">
          <strong>Classes:</strong>
          <br />
          <ul>
            <li>Artificers (shared with white and blue)</li>
            <li>Barbarians</li>
            <li>Berserkers</li>
            <li>Knights (shared with white and black)</li>
            <li>Pirates (shared with blue and black)</li>
            <li>Samurai (shared with white and black)</li>
            <li>Shamans (shared with green and black)</li>
            <li>Warriors (shared with green)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Red;
