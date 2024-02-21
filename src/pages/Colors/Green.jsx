import React from "react";
import greenCol from "../../images/mtg-colors/green.png";
import { Link } from "react-router-dom";

function Green() {
  return (
    <section className="Colors">
      <div className="Buttons-Logo">

      {/* ------------------------------------- BUTTON TO CHANGE PAGE AND COLOR IMAGE   <- / ->   -------------------------------------------------- */}
      <Link to="/about/blue">
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
        <img src={`${greenCol}`} />
      </div>

      <Link to="/about/red">
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
        Green is the color most in tune with nature. Whereas the other colors
        seek to modify the world around them, Green believes that the best
        course of action is to simply allow nature to take its course. Thus,
        Green is often seen as the least confrontational of the colors: it does
        not seek to impose its values on others; it just wants to coexist as
        peacefully as possible. This does not mean that Green will not defend
        itself when it feels threatened, but it generally will not seek to
        impose its opinion on others. Green therefore also places value on the
        concept of community. Although it does not take this as far as White
        does, Green sees intrinsic value in coming together for the benefit of
        the whole group. It draws this example from nature, having observed such
        examples as the way that bees gather pollen from flowers to make honey
        and in doing so allow the flowers to cross-pollinate, or the way that
        thallids produce saprolings, which in turn nourish the thallids again,
        embodying the circle of life. Green communities seek to live in the same
        harmonious way, taking only what they need from others and giving back
        to them in due course. Tying in with Green's affinity with nature,
        another of the color's core principles is strength and the concept of
        the survival of the fittest. Green sees the struggle between predator
        and prey as a central part of the natural order and so places great
        value on strength. When in battle, Green does not favor trickery or
        evasion to steal the victory, relying instead on pitting its' natural
        strength against that of its opponents. The strong will triumph, and the
        weak will fall. Whether Green wins or loses the contest, it has filled
        its place in the natural order. Green also relies on instinct. Green
        embodies this in the primal sense, being the color most attuned to wild
        animals. However, even Green's more intelligent users dislike
        overthinking matters, preferring to rely on their gut instinct to make
        judgments, rather than wasting time thinking about things. This primal
        aspect can lead to conflict with others, as Green does not restrain the
        wild animals it is in tune with, allowing them to attack others as their
        instincts dictate: if they cannot defend themselves, then they were
        simply filling the role of prey in the natural cycle. Furthermore,
        Green's reliance on gut instinct and first impressions can make it
        vulnerable to deception. One of Green's more negative outlooks is its
        hatred of the artificial. It dislikes the trappings of civilization,
        believing that natural laws are the only laws that should be obeyed. It
        has a particular dislike of magical creations, seeing them as
        distortions of the real. As an extension of accepting its role in the
        world, Green is also strongly fatalistic, trusting in destiny to divine
        the way things should go. At best, this makes Green a romantic,
        believing that the good things in life were predestined; at worst, it
        makes it hostile to the idea of free will and the right of individuals
        to do as they want instead of as they were born to do.
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
            <li>Elves (characteristic creature) [14]</li>
            <li>Apes</li>
            <li>Catfolk (shared with white)</li>
            <li>Centaurs</li>
            <li>Dryads</li>
            <li>Elementals (shared with blue and red)</li>
            <li>Loxodon (shared with white)</li>
            <li>Faeries (shared with blue and black)</li>
            <li>Maro-Sorcerers</li>
            <li>Merfolk (shared with blue)</li>
            <li>Nagas (shared with blue)</li>
            <li>Nantuko</li>
            <li>Orochi</li>
            <li>Ouphes</li>
            <li>Rhox</li>
            <li>Saprolings</li>
            <li>Satyrs</li>
            <li>Thallids</li>
            <li>Treefolk</li>
            <li>Trolls</li>
            <li>Werewolves (shared with red)</li>
            <li>Wolfir</li>
            <li>Sylvok</li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <div className="Monstrous/Subservient Types">
          <strong>Monstrous/Subservient Types:</strong>
          <br />

          <ul>
            <li>Antelope (shared with white)</li>
            <li>Apes</li>
            <li>Aurochs</li>
            <li>Badgers</li>
            <li>Basilisks</li>
            <li>Bears</li>
            <li>Beasts (shared with red and white)</li>
            <li>Boars</li>
            <li>Brushwaggs</li>
            <li>Cats (shared with white)</li>
            <li>Camels (shared with white)</li>
            <li>Caribou</li>
            <li>Chimeras (shared with blue)</li>
            <li>Cockatrices</li>
            <li>Dinosaurs</li>
            <li>Dogs</li>
            <li>Elephants (shared with white)</li>
            <li>Elk (shared with white)</li>
            <li>Frogs</li>
            <li>Fungus</li>
            <li>Germs</li>
            <li>Hippos (shared with blue)</li>
            <li>Horses</li>
            <li>Hydras (iconic creature)</li>
            <li>Hyenas (shared with white and red)</li>
            <li>Insects</li>
            <li>Kavu (shared with red)</li>
            <li>Lizards</li>
            <li>Ooze (shared with black)</li>
            <li>Oxen</li>
            <li>Plants</li>
            <li>Rabbits</li>
            <li>Sheep</li>
            <li>Snakes (shared with blue)</li>
            <li>Spiders (mostly)</li>
            <li>Spikes</li>
            <li>Squirrels</li>
            <li>Mongooses</li>
            <li>Rhinos</li>
            <li>Wolverines (shared with red)</li>
            <li>Wolves</li>
            <li>Wombats</li>
            <li>Worms</li>
            <li>Wurms</li>
            <li>Yetis (shared with red)</li>
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

      {/*   ------------------------------------- BACK BUTTON      -------------------------------------------------- */}
      <Link to="/about">
        <div class="container">
          <button class="backButton">Back</button>
        </div>
      </Link>
    </section>
  );
}

export default Green;
