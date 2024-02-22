import React from 'react'
import {Link} from 'react-router-dom'
import MultiCards from '../../images/multipleCards.png'
import Lands from '../../images/lands.png'

function TypesCards() {
  return (
<section className="Colors">
        <div className="TypesCards">
        <img src={`${MultiCards}`} className="typeCardsImg"/>
    <div class="spell">
    <h2>What’s a Spell:</h2>
    <p>
      In Magic: The Gathering (MTG), a spell encompasses any card played
      by a player during the game. Normally, spells originate from your
      hand, but there are exceptions where they can be cast from different
      zones like your library or graveyard. Notably, land cards stand
      apart as they aren't categorized as spells.
    </p>
  </div>

  <div class="creatures">
    <h2>Creatures:</h2>
    <p>
      Creature cards in Magic: The Gathering are your main force for
      attacking, defending, and activating abilities during your turn.
      They come in various forms and strengths, influencing the damage
      they deal and receive. Each creature card has unique abilities based
      on factors like color and cost.
    </p>
    <p>
      When a creature enters the battlefield, it can't attack right away
      due to "summoning sickness." You can use creatures to either attack
      your opponent directly or to block incoming attacks from other
      players' creatures.
    </p>
    <p>
      During combat, if an attacking creature isn't blocked, it deals
      damage equal to its power to the opponent. If it's blocked, it deals
      damage to the creatures blocking it. If a creature takes damage
      equal to or greater than its toughness in a single turn, it's
      destroyed. However, creatures recover from damage at the end of each
      turn if they're still alive.
    </p>
  </div>

  <div class="artifacts">
    <h2>Artifacts:</h2>
    <p>
      Harness the power of artifact cards to outsmart your opponent!
      Artifacts represent a range of special items, devices, and tools,
      offering unique abilities to enhance your gameplay.
    </p>
    <p>
      With artifact cards, you can gain advantages such as additional
      mana, card drawing abilities, and novel ways to engage with the
      battlefield. Because they're not limited to a specific color, most
      artifacts can complement any deck strategy, providing versatility
      and adaptability to your game plan.
    </p>
  </div>

  <div class="enchantments">
    <h2>Enchantments:</h2>
    <p>
      Enchantment cards in Magic: The Gathering offer versatile ways to
      disrupt your opponent's strategy, bolster your defenses, or alter
      the dynamics of the game. Once cast, an enchantment remains on the
      battlefield until it's removed.
    </p>
    <p>
      These cards exert a lasting influence, granting ongoing advantages
      while in play. Enchantments can enhance your creatures' abilities,
      grant them new powers like flying, and more. Like artifacts and
      creatures, enchantments persist on the battlefield unless removed by
      an opponent, adding an extra layer of offense or defense to your
      tactics.
    </p>
    <p>
      Many enchantments take the form of auras, meant to be attached to
      other permanents, such as creatures. Auras can enhance or modify the
      abilities of the permanents they're attached to, offering further
      strategic depth and customization to your gameplay.
    </p>
  </div>

  <div class="sorcery">
    <h2>Sorcery:</h2>
    <p>
      Sorcery cards in Magic: The Gathering provide potent spells that
      create immediate, impactful effects, ideal for shaking up your
      opponent's plans or fortifying your own strategy. Unlike other card
      types, sorceries don't stick around on the battlefield; they go
      straight to the graveyard after use.
    </p>
    <p>
      You can use sorceries to achieve various goals, like dealing damage,
      summoning creature tokens, wiping out your opponent's creatures, and
      more. Just keep in mind, sorceries can only be cast during your Main
      Phases, so plan your moves accordingly.
    </p>
  </div>

  <div class="instant">
    <h2>Instant:</h2>
    <p>
      Instant cards in Magic: The Gathering offer quick, one-time effects
      that can turn the tide of a game. Whether dealing damage or
      searching your library, they provide versatile options. You can play
      instants during your turn or in response to your opponent's actions.
      Like sorceries, instants go to the graveyard after use, bypassing
      the battlefield entirely.
    </p>
    <p>
      Use instants to keep your opponent on their toes and seize crucial
      moments in combat with strategic precision.
    </p>
  </div>

  <div class="planeswalker">
    <h2>Planeswalker:</h2>
    <p>
      Planeswalker cards in Magic: The Gathering are formidable allies
      that can turn the tide of battle with their reusable abilities,
      granting you various advantages like extra draws, increased life
      points, or clearing your opponent's creatures from the field.
    </p>
    <p>
      Each planeswalker starts with a set number of loyalty counters,
      shown on the card's bottom right corner. You can activate a
      planeswalker's abilities by adjusting these counters. However, you
      can only activate one loyalty ability per planeswalker per turn, and
      only during your main phase.
    </p>
    <p>
      Your opponents have the option to direct their attacks towards your
      planeswalker instead of targeting you directly. Damage dealt to
      planeswalkers reduces their loyalty counters. Once a planeswalker's
      loyalty counters hit zero, it's removed from the battlefield and
      placed in the graveyard.
    </p>
  </div>

  <div class="battle">
    <h2>Battle:</h2>
    <p>
      Battle cards in Magic: The Gathering are double-faced cards that
      start on the battlefield face-up, displaying defense counters. These
      counters show how much damage the card can withstand.
    </p>
    <p>
      The controller of a battle card doesn't aim to protect it but rather
      wants to defeat it. When a battle card enters the battlefield, its
      controller chooses an opponent to act as its protector. This
      protector can block creatures that attack the battle card, while all
      other players, including the controller, can attack it.
    </p>
    <p>
      Whenever the battle card takes damage, whether from combat or spells
      targeting it, the corresponding number of defense counters are
      removed. Once all defense counters are gone, the battle card is
      exiled, and you can cast the back face of the card without paying
      its mana cost.
    </p>
  </div>

  <div class="lands">
    <h2>Lands:</h2>
    <p>
      In Magic: The Gathering, land cards represent different terrains and
      environments across the Multiverse. They're crucial because they
      generate mana, the resource needed to cast spells and use card
      abilities.
    </p>
    <p>
      During your turn, you can play one land card from your hand, usually
      before casting spells. Most lands can be tapped to produce specific
      colors of mana, like white from Plains, blue from Islands, red from
      Mountains, green from Forests, and black from Swamps. These colors
      match the spells you want to cast.
    </p>
    <p>
      Apart from basic lands, there are also nonbasic lands with unique
      abilities and color combinations. It's important to note that while
      lands produce mana of different colors, the lands themselves don't
      have a color.
    </p>
  </div>
  <img src={`${Lands}`} className="typeCardsImg"/>
  </div>
  <div className="ButtonCentered">
  <Link to={'/about'}>
            <button className="btn-31">
              <span className="text-container">
                <span className="text">Back</span>
              </span>
            </button>
          </Link>
          </div>
  </section>
  )
}

export default TypesCards