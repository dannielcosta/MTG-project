import React from "react";
import whiteCol from "../../images/mtg-colors/white.png";

function White() {
  return (
    <section className="Colors">
      <div>
        <img src={`${whiteCol}`} />
      </div>
      <div>
        <strong>The Story </strong>
      </div>
      <div>
        White places significant importance on the collective, emphasizing
        community and civilization as a whole. Its overarching objective is the
        attainment of peace, envisioning a harmonious world where safety and
        unity reign supreme. To safeguard and govern its community, White
        embraces key principles such as morality, order, uniformity, and
        structure, viewing them as essential pillars for societal well-being. In
        White's worldview, moral standards are clear-cut and deviations are
        strongly discouraged to maintain cohesion. While advocating for the
        welfare of the minority, individual autonomy is often subordinated to
        the collective good. This collective-centric stance, akin to an "Ivory
        Tower," underscores White's perceived strength and purity, though it may
        be perceived as rigid or oppressive by outsiders. To uphold its societal
        fabric, White employs a robust political apparatus and enforces strict
        adherence to its laws. Balance and conformity are highly valued to
        mitigate potential disruptions, even if it means quashing dissent.
        Despite its elitist outlook, White's stance is not inherently
        prejudiced; rather, it champions righteousness and communal prosperity,
        albeit at the expense of individual freedoms.
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
            <li>Angels (iconic creature)</li>
            <li>Archons</li>
            <li>Auriok</li>
            <li>Avatars (shared with black)</li>
            <li>Aven (shared with blue)</li>
            <li>Catfolk (shared with green)</li>
            <li>
              Dragons (specialized iconic in places like Kamigawa, Shenmeng, and
              Tarkir)
            </li>
            <li>Loxodon (shared with green)</li>
            <li>Giants (shared with red)</li>
            <li>Humans (characteristic creature)</li>
            <li>Kirin</li>
            <li>Kithkin</li>
            <li>Kitsune</li>
            <li>Lammasu</li>
            <li>Leonin</li>
            <li>Kirin (previously shared with other colors)</li>
            <li>Kor</li>
            <li>Pegasi</li>
            <li>Rhox (shared with green)</li>
            <li>Soltari</li>
            <li>Unicorns</li>
            <li>Spirits</li>
            <li>Vampires (shared with black and red)</li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <div className="Monstrous/Subservient Types">
          <strong>Monstrous/Subservient Types:</strong>
          <br />
          <ul>
            <li>Antelopes (shared with green)</li>
            <li>Birds (shared with blue)</li>
            <li>Cats (shared with green)</li>
            <li>Camels (shared with green)</li>
            <li>Elephants (shared with green)</li>
            <li>Elk (shared with green)</li>
            <li>Foxes</li>
            <li>Gargoyles</li>
            <li>Griffins</li>
            <li>Hyenas (shared with green and red)</li>
            <li>Lammasu</li>
            <li>Pegasi</li>
            <li>Thrull (shared with black)</li>
            <li>Unicorns</li>
            <li>Zombies (exclusively on Amonkhet)</li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <div className="Classes">
          <strong>Classes:</strong>
          <br />
          <ul>
            <li>Archers (shared with green)</li>
            <li>Clerics (shared with black)</li>
            <li>Knights (shared with black and red)</li>
            <li>Monks (shared with blue)</li>
            <li>Rebels</li>
            <li>Samurai (shared with black and red)</li>
            <li>Soldiers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default White;
