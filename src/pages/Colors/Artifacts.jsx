import React from "react";
import artifactCol from "../../images/mtg-colors/artifact.png";
import { Link } from "react-router-dom";

function Artifact() {
  return (
    <section className="Colors">
      <Link to="/about/black">
        <div class="container">
          <button class="about-pageBtn">Next Element</button>
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
        <img src={`${artifactCol}`} />
      </div>
      <div>
        <strong>About Artifacts </strong>
      </div>
      <div>
        Up until the introduction of the colorless, non-artifact Eldrazi cards
        in the Rise of the Eldrazi set, artifacts were distinct from other card
        types in that they were the only existing cards that had wholly generic
        mana costs (meaning they can be cast using any type of mana), excluding
        certain cards which cost {0}. "Artifacts matter" has been a major
        mechanical theme of several sets and blocks. These include Antiquities,
        the Urza's block (Artifacts Cycle), the Mirrodin block, the Esper shard
        of the Alara block, the Scars of Mirrodin block, the Kaladesh block, the
        historic mechanic from Dominaria, and The Brothers' War.
      </div>
      <br />
      <br />
      <br />
      <div>
        <strong>Variations</strong>
      </div>
      <div>
        Many artifacts are also creatures. They can attack and defend like other
        creatures and are affected by anything that affects creatures (or
        artifacts). Mirrodin introduced colored activation costs for artifacts.
        Colored artifacts have colored mana costs. The Dissension expansion
        introduced the concept of colored artifacts with Transguild Courier,
        which did not yet require colored mana to cast. The Future Sight
        expansion's Sarcomite Myr was the first and only artifact card at the
        time of the set's release to require colored mana for its casting cost.
        The Shadowmoor expansion's Reaper King was the first artifact card with
        a hybrid mana cost that contained colored mana symbols, but which
        enabled players to not have to pay any colored mana to cast the card due
        to the specifics of the card's hybrid mana cost. The use of colored
        artifacts as a game concept was taken even further in Esper shard theme
        of Shards of Alara, which was the first expansion to contain many
        artifacts that require specific colors of mana to cast, and the entire
        Alara block prominently features colored artifacts that require colored
        mana to cast. Colored artifacts returned in New Phyrexia and in a minor
        capacity in the third Artifact block, Kaladesh. By Core Set 2020 they
        had become deciduous.
      </div>
      <br />
      <br />
      <br />
      <div>
        <strong>Friendly to artifacts</strong>
      </div>
      <div>
        <p>
          White and blue, as the colors of civilization, are both very friendly
          with artifacts.
        </p>
        <p>
          Red is secondary and tends to be associated with Equipment and
          Vehicles (along with white) or using artifacts as a resource
          (interacting with things like treasure artifact tokens).{" "}
        </p>
      </div>
      <br />
      <br />
      <br />
      <div>
        <strong>Unriendly to artifacts</strong>
      </div>
      <div>
        Artifact destruction most frequently occurs in Green or Red, and
        occasionally in white. Green is also the color which receives protection
        from artifacts. Green rarely interacts with artifacts positively. Red
        tends to be the color to gain benefit from sacrificing artifacts. Of the
        five colors, black generally has the fewest cards that interact on any
        level with artifacts, with almost all of those cards coming in
        "artifacts matter" sets.
      </div>
    </section>
  );
}

export default Artifact;
