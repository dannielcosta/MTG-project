import React from "react";
import blackCol from "../../images/mtg-colors/black.png";
import { Link } from "react-router-dom";

function Black() {
  return (
    <section className="Colors">
      <div className="Buttons-Logo">
      {/* ------------------------------------- BUTTON TO CHANGE PAGE AND COLOR IMAGE   <- / ->   -------------------------------------------------- */}
      <Link to="/about/artifacts">
        <div class="container">
          <button class="about-pageBtnLeft">Previews Class</button>
          <span class="arrowLeft first">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
          <span class="arrowLeft second">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
          <span class="arrowLeft third">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
        </div>
      </Link>
      <div>
        <img src={`${blackCol}`} />
      </div>

      <Link to="/about/blue">
        <div class="container">
          <button class="about-pageBtnRight">Next Class</button>
          <span class="arrowRight first">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
          <span class="arrowRight second">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
          <span class="arrowRight third">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
        </div>
      </Link>
      </div>

      {/*   ------------------------------------- ABOUT SECTION      -------------------------------------------------- */}

      <div>
        <strong>The Story </strong>
      </div>
      <div>
        The essence of Black can be summarized in: having the last word on its
        own life. Black looks at the world and sees a simple reality: power is
        everything. Power dictates who succeeds and who fails; who commands and
        who submits; who lives and who dies. And whether the weak see it or not,
        they are at the mercy of the powerful. Black sees its own will as
        something so precious that the idea of losing it or giving it up is
        totally unacceptable. Thus, to live according to this notion, Black must
        preserve and expand its free will by all means; which inevitably
        translates into gaining power. It aspires to be as powerful as it could
        be, reaching omnipotence if possible. To achieve power, Black follows a
        simple rule: don't follow any rule. It looks for any opportunity to get
        ahead, and takes advantage of it without mercy or shame. Of course,
        killing and sowing terror is not a problem for Black either. All living
        beings are subject to fear, and Black does not hesitate to provoke and
        use the fear of others to achieve its purposes. The ambition of power is
        the greatest factor in Black's inner psychology, countering all forms of
        meekness, laziness and conformism. On a philosophical level, this search
        for power can be positively motivated, from the recognition of one's own
        individuality and free will as the basis of human dignity and happiness;
        or negatively, from a deep fear of defeat in all forms (including death)
        that leads to power for power's sake, losing identity and humanity in
        the process. This second perspective is the most reflected in MTG,
        stereotyping Black as the classic "Dark Lord" creator of its own ruin,
        although there are also a few examples of the first one, especially in
        recent editions. On a mechanical level, it must be noted that black
        magic is NOT creative. Black sees power dynamics as a zero-sum game not
        subordinated to anything external. That is why it uses parasitic
        mechanics (zero sum) and amoral mechanics (power does not submit to
        systems, but originates them). Life draining, abuse of the cemetery,
        theft of enemy cards and sacrifice of permanents to obtain a benefit are
        typical examples of this.
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
            <li>Aetherborn</li>
            <li>Archon (shared with white)</li>
            <li>Demons (iconic creature)</li>
            <li>Avatars (shared with white)</li>
            <li>Dauthi</li>
            <li>Faeries (shared with blue)</li>
            <li>Gorgons</li>
            <li>Gremlins</li>
            <li>Hags</li>
            <li>Harpies (shared with blue)</li>
            <li>Imps</li>
            <li>Kor (shared with white and blue)</li>
            <li>Liches</li>
            <li>Moriok</li>
            <li>Nezumi</li>
            <li>Nightstalkers</li>
            <li>Shades</li>
            <li>Specters</li>
            <li>Thrulls</li>
            <li>
              Vampires (characteristic creature, shared with red and white)
            </li>
            <li>Werewolves (shared with red and green)</li>
            <li>Wraiths</li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <div className="Monstrous/Subservient Types">
          <strong>Monstrous/Subservient Types:</strong>
          <br />
          <ul>
            <li>Bats</li>
            <li>Carriers</li>
            <li>Eyes</li>
            <li>Frogs</li>
            <li>Horrors</li>
            <li>Nightmares</li>
            <li>Ogres (shared with red)</li>
            <li>Ooze (shared with green)</li>
            <li>Pest</li>
            <li>Rats</li>
            <li>Scorpions</li>
            <li>Skeletons</li>
            <li>Slugs</li>
            <li>Surrakar (shared with blue)</li>
            <li>
              Zombies (another characteristic creature, shared with white in
              Amonkhet and blue)
            </li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <div className="Classes">
          <strong>Classes:</strong>
          <br />
          <ul>
            <li>Assassins</li>
            <li>Clerics (shared with white)</li>
            <li>Knights (shared with white and red)</li>
            <li>Mercenaries</li>
            <li>Minions</li>
            <li>Ninja (shared with blue)</li>
            <li>Pirates (shared with blue and red)</li>
            <li>Rogues (shared with blue and red)</li>
            <li>Samurai (shared with white and red)</li>
            <li>Warlocks</li>
          </ul>
        </div>
      </div>

      {/*   ------------------------------------- BACK BUTTON      -------------------------------------------------- */}
      <Link to={'/about'}>
            <button className="btn-31">
              <span className="text-container">
                <span className="text">Back</span>
              </span>
            </button>
          </Link>
    </section>
  );
}

export default Black;
