import React from "react";
import { Link } from "react-router-dom";
import manaPay from "../../images/mana-pay.png"
import attack from "../../images/attack.png"
import attackDef from "../../images/attack-def.png"
import attackDef1 from "../../images/attack-def-1.png"
import def from "../../images/def.png"
import mulAttack from "../../images/mul-attack.png"
import BoardTable from "../../images/GameBoard.png"


function HowToPlay() {
  return (
    <section className="Colors">
      <div class="game-actions">
        <h2>GAME ACTIONS</h2>
        <p>
          This segment outlines the activities you'll engage in during a game,
          encompassing tapping your cards, invoking spells, and engaging in
          combat with creatures.
        </p>
      <div className="howToPlayIntro">
        <img src={`${manaPay}`} className="howToPlayIMG3" />
        <img src={`${BoardTable}`} className="howToPlayIMG4" />
        </div>
      </div>

      <div class="tapping-and-untapping">
        <h2>TAPPING AND UNTAPPING</h2>
        <p>
          Tapping a card involves rotating it sideways to indicate its use for
          the turn. This action is performed when you utilize a land to generate
          mana, when you initiate an attack with a creature, or when you
          activate an ability requiring the tapping symbol (the symbol typically
          indicating "tap this permanent"). Once a permanent is tapped, it
          cannot be tapped again until it's untapped, returning it to its
          upright position. At the start of your turn, untap any tapped cards,
          allowing you to utilize them once more.
        </p>
      </div>

      <div class="casting-spells">
        <h2>CASTING SPELLS</h2>
        <p>
          When you want to cast a spell, you need to pay its mana cost, which
          you can do by tapping lands or other permanents to generate the
          required type and amount of mana. Once the spell is cast, it either
          resolves immediately if it's an instant or sorcery, and then goes to
          the graveyard, or if it's a creature, artifact, or enchantment, it
          stays on the battlefield in front of you. Permanents on the
          battlefield are different from instants and sorceries, which don't
          stay there.{" "}
        </p>
      </div>

      <div class="attacking-and-blocking">
        <h2>ATTACKING AND BLOCKING</h2>
        <p>
          The main way to win in the game is by attacking with your creatures.
          When your creature attacks an opponent and isn't blocked, it deals
          damage equal to its power to that opponent. During the combat phase,
          which is in the middle of each turn, you choose which of your
          creatures will attack and which opponent they will attack. Tap your
          attacking creatures to indicate they're attacking. Then, your
          opponents decide which, if any, of their creatures will block. Tapped
          creatures can't block. Once blockers are chosen, all creatures
          involved deal damage simultaneously based on their power. If an
          attacking creature isn't blocked, it damages the player it's
          attacking. If it's blocked, it damages the blocking creature, and vice
          versa. Damage dealt to a player reduces their life total. If your
          attacking creature is blocked by multiple creatures, you decide how to
          distribute its damage among them, ensuring enough to destroy each
          blocking creature before moving to the next. If a creature receives
          damage equal to or greater than its toughness in one turn, it's
          destroyed and goes to the graveyard. Otherwise, it remains on the
          battlefield, with damage wearing off at the end of the turn.
        </p>
        <div className="gameEx">
        <img src={`${attack}`} className="howToPlayIMG1" />
        <img src={`${def}`} className="howToPlayIMG2" />
        </div>
      </div>

      <div class="advanced-topics">
        <h2>ADVANCED TOPICS</h2>
        <p>
          Magic: The Gathering offers an exciting experience due to its vast
          array of cards, each offering unique abilities and interactions. This
          diversity ensures that every game can bring about a multitude of
          outcomes and surprises. If you ever need more information about the
          game's rules, this section serves as a handy reference guide.
        </p>
      </div>

      <div class="parts-of-the-turn">
        <h2>TARGETING</h2>
        <p>
          In Magic, some spells and abilities have the word "target," indicating
          what they affect. You must select all targets for a spell when you
          cast it or for an ability when it activates. If you can't meet the
          targeting requirements (like if there are no creatures on the
          battlefield for a spell that says "Destroy target creature"), you
          can't use that spell or ability. For spells that "deal damage to any
          target," you can choose any creature, player, or planeswalker as the
          target. Once you've chosen targets, you can't change your mind. When
          the spell or ability resolves, it checks if the targets are still
          legal. If not, it has no effect. If none of the targets are legal, the
          spell or ability does nothing.
        </p>
      </div>
      <div className="turn-description">
        <h2>PARTS OF THE TURN</h2>
        <p>
          Each turn proceeds in the same sequence. Whenever you enter a new step
          or phase, any triggered abilities that happen during that step or
          phase trigger and are put on the stack. The active player (the player
          whose turn it is) gets to start casting spells and activating
          abilities, then each other player in turn order will too. When all
          players decline to do anything more and nothing is on the stack
          waiting to resolve, the game will move to the next step.
        </p>
      </div>
      <div className="ButtonCentered">
      <Link to={"/about"}>
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

export default HowToPlay;
