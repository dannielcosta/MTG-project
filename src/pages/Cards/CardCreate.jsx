import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import JSON_SERVER_LINK from "../../data/json-backend-cards-created";
import { useNavigate } from "react-router-dom";

const OPEN_API_KEY = "YOUR_AI_KEY";

function CardCreate() {
  const [name, setName] = useState("");
  const [mana, setMana] = useState("1");
  const [elements, setElements] = useState([]);
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");
  const [type, setType] = useState("");
  const [mainAb, setMainAb] = useState("");
  const [combatAb, setCombatAb] = useState("");
  const navigate = useNavigate();
  const jsonServerLink = JSON_SERVER_LINK();

  const [prompt, setPrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState("")

  async function generateImages() {
    setIsLoading(true);

    try {
      const requestData = {
        prompt: prompt,
        n: 1,
        size: "256x256", // Set the desired image size here
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPEN_API_KEY}`,
      };

      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        requestData,
        {
          headers: headers,
        }
      );

      setGeneratedImages(response.data.data);
    } catch (error) {
      console.error("Error generating images:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (generatedImages.length > 0) {
      setImageURL(generatedImages[generatedImages.length - 1].url);
    }
  }, [generatedImages]);

  function handleSubmit(e) {
    e.preventDefault();

    const newCard = { name, mana, elements, atk, def, type, mainAb, combatAb, imageURL };

    
    axios
      .post(`${jsonServerLink}`, newCard)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setElements((prevElements) => [...prevElements, value]);
    } else {
      setElements((prevElements) =>
        prevElements.filter((element) => element !== value)
      );
    }
  };

  if (generatedImages.length > 0) {
    console.log(generatedImages[generatedImages.length - 1].url);
  }

  return (
    <div className="createCard">
      <h1>Create Your Own Card</h1>
      <form onSubmit={handleSubmit}>
        {/* Nome */}
        <label>Name Your Character:</label>
        <input
          type="text"
          name="name"
          placeholder="Name your character"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        {/* Mana Cost */}
        <label>What's your card's Mana Cost:</label>
        <input
          type="number"
          name="mana"
          value={mana}
          required
          min="1"
          onChange={(e) => {
            setMana(e.target.value);
          }}
        />

        {/* Elements */}
        <input
          type="checkbox"
          id="white"
          name="element"
          value="white"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="white">White</label>

        <input
          type="checkbox"
          id="blue"
          name="element"
          value="blue"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="blue">Blue</label>

        <input
          type="checkbox"
          id="black"
          name="element"
          value="black"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="black">Black</label>

        <input
          type="checkbox"
          id="red"
          name="element"
          value="red"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="red">Red</label>

        <input
          type="checkbox"
          id="green"
          name="element"
          value="green"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="green">Green</label>

        <input
          type="checkbox"
          id="colorless"
          name="element"
          value="colorless"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="colorless">Colorless</label>

        {/* Power | Attack and Defense*/}
        <label>Power</label>
        <input
          type="text"
          name="attack"
          placeholder="ATK XX"
          value={atk}
          required
          onChange={(e) => {
            setAtk(e.target.value);
          }}
        />
        <input
          type="text"
          name="defense"
          placeholder="DEF XX"
          value={def}
          required
          onChange={(e) => {
            setDef(e.target.value);
          }}
        />

        {/* Type */}
        <label>Type</label>
        <input
          type="text"
          name="type"
          value={type}
          required
          onChange={(e) => {
            setType(e.target.value);
          }}
        />

        {/* Description of the Abillities of the card when it's in battle */}
        <label>Main Abillities</label>
        <input
          type="text"
          name="main-abillities"
          value={mainAb}
          required
          onChange={(e) => {
            setMainAb(e.target.value);
          }}
        />

        {/* Description of what happens when the card enters the game */}
        <label>Combat Abillities</label>
        <input
          type="text"
          name="combat-abillities"
          value={combatAb}
          required
          onChange={(e) => {
            setCombatAb(e.target.value);
          }}
        />

        {/* Propmpt for the AI Image generator */}
        <label>Write the prompt for your card's image</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={generateImages}
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate Images"}
        </button>

        {generatedImages.length > 0 && (
          <div>
            {generatedImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={`Generated Image ${index}`}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              
            ))}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CardCreate;
