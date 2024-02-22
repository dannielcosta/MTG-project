import React from 'react'

function HowToPlay() {
    return (
        <section className="How-to-play">
            <div class="game-actions">
                <h2>GAME ACTIONS</h2>
                <p>This segment outlines the activities you'll engage in during a game, encompassing tapping your cards, invoking spells, and engaging in combat with creatures.</p>
            </div>

            <div class="tapping-and-untapping">
                <h2>TAPPING AND UNTAPPING</h2>
                <p>To tap a card is to rotate it sideways, indicating its utilization for the current turn. This occurs when you utilize a land to generate mana, when you initiate an attack with a creature, or when you activate an ability requiring the tap symbol (depicted as ). Once tapped, a permanent cannot be tapped again until it's untapped (rotated back upright). At the commencement of your turn, untap all tapped cards for subsequent use.</p>
            </div>

            <div class="casting-spells">
                <h2>CASTING SPELLS</h2>
                <p>To cast a spell, you must fulfill its mana cost (displayed in the upper right corner of the card) by tapping lands (or other permanents) to generate the requisite amount and type of mana. For instance, if casting Serra Angel, with a mana cost of , you may tap three basic lands of any kind to meet  plus two Plains to meet . Once a spell is cast, one of two outcomes arises. If the spell is an instant or a sorcery, execute the instructions on the card and subsequently place it into your graveyard. Conversely, if the spell is a creature, artifact, or enchantment, place the card on the table in front of you, signifying its presence on the battlefield. Cards present on the battlefield are denoted as permanents to distinguish them from instants and sorceries, which never enter this zone.</p>
            </div>

            <div class="attacking-and-blocking">
                <h2>ATTACKING AND BLOCKING</h2>
                <p>The primary method to secure victory in the game involves launching attacks with your creatures. Should an attacking creature go unblocked by an opponent, it inflicts damage equivalent to its power upon said opponent.</p>
{/*                 <!-- Other paragraphs for attacking and blocking... -->
 */}            </div>

            <div class="advanced-topics">
                <h2>ADVANCED TOPICS</h2>
                <p>One of the most captivating aspects of the Magic game lies in the plethora of distinct cards available, each offering a wide spectrum of possibilities within any given match. This section serves as a resource for delving deeper into the intricacies of Magic's rules.</p>
{/*                 <!-- Other paragraphs for advanced topics... -->
 */}            </div>

            <div class="parts-of-the-turn">
                <h2>PARTS OF THE TURN</h2>
                <p>Every turn unfolds in a consistent sequence. Upon entering a new step or phase, any triggered abilities associated with that step or phase are activated and placed on the stack. The active player (i.e., the player whose turn it is) commences by casting spells and activating abilities, followed by each subsequent player in turn order. Once all players opt not to take further actions and the stack is devoid of pending resolutions, the game proceeds to the subsequent step.</p>
{/*                 <!-- Other paragraphs for parts of the turn... -->
 */}            </div>
        </section>
    )
}

export default HowToPlay