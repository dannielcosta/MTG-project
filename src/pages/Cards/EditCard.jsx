import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import JSON_SERVER_LINK from "../../data/json-backend-cards-created";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EditCard() {
  const [name, setName] = useState("");
  const [mana, setMana] = useState("1");
  const [elements, setElements] = useState([]);
  const [type, setType] = useState("");
  const [mainAb, setMainAb] = useState("");
  const [combatAb, setCombatAb] = useState("");
  const navigate = useNavigate();
  const jsonServerLink = JSON_SERVER_LINK();

  const [prompt, setPrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const { cardId } = useParams();

  useEffect(() => {
    axios
      .get(`${jsonServerLink}/${cardId}`)
      .then((response) => {
        console.log(response.data);
        const cardData = response.data;
        setName(cardData.name);
        setMana(cardData.mana);
        setElements(cardData.elements);
        setType(cardData.type);
        setMainAb(cardData.mainAb);
        setCombatAb(cardData.combatAb);
        setImageURL(cardData.imageURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function generateImages() {
    console.log(import.meta.env.VITE_API_KEY);
    setIsLoading(true);

    try {
      const requestData = {
        prompt: prompt,
        n: 1,
        size: "256x256", // Set the desired image size here
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
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

    const newCard = { name, mana, elements, type, mainAb, combatAb, imageURL };
    axios
      .put(`${jsonServerLink}/${cardId}`, newCard)
      .then(() => {
        navigate("/custom-cards");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newCard = { name, mana, elements, type, mainAb, combatAb, imageURL };
    axios
      .put(`${jsonServerLink}/${cardId}`, newCard)
      .then(() => {
        navigate("/custom-cards");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setElements((prevElements) => {
      // If prevElements is undefined, default to an empty array
      prevElements = prevElements || [];

      if (checked) {
        // Add the value to the array if it doesn't exist
        if (!prevElements.includes(value)) {
          return [...prevElements, value];
        }
      } else {
        // Remove the value from the array
        return prevElements.filter((element) => element !== value);
      }
      // If the checkbox state hasn't changed, return the previous state
      return prevElements;
    });
  };

  return (
    <div className="pageContainer">
    <div className="createCard">
      <h1>Edit Your Card</h1>
      <form onSubmit={handleSubmit}>
        <section className="nameInput">
          {/* Nome */}
          <label>Name Your Character:</label>
          <input
            type="text"
            name="name"
            placeholder="Name your character"
            value={name}
            required
            maxLength={25}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </section>

        <section className="nameInput">
          {/* Mana Cost */}
          <label>What's your card's Mana Cost:</label>
          <input
            type="number"
            name="mana"
            value={mana}
            required
            min="1"
            className="numberMana"
            onChange={(e) => {
              setMana(e.target.value);
            }}
          />
        </section>
        <section className="elementsInput">
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
        </section>
        {/* Type */}
        <section className="nameInput">
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={type}
            required
            maxLength={30}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </section>
        <section className="nameInput">
          {/* Description of the Abillities of the card when it's in battle */}
          <label>Main Abillities:</label>
          <input
            type="text"
            name="main-abillities"
            value={mainAb}
            required
            maxLength={30}
            onChange={(e) => {
              setMainAb(e.target.value);
            }}
          />
        </section>

        {/* Description of what happens when the card enters the game */}
        <section className="nameInput">
          <label>Combat Abillities:</label>
          <input
            type="text"
            name="combat-abillities"
            value={combatAb}
            required
            maxLength={40}
            onChange={(e) => {
              setCombatAb(e.target.value);
            }}
          />
        </section>
        <section className="nameInput">
          {/* Propmpt for the AI Image generator */}
          <label>Write the prompt for your card's image:</label>
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </section>
        <section className="butonsInput">
          <button onClick={generateImages} disabled={isLoading}>
            {isLoading ? "Generating..." : "Generate Images"}
          </button>
          <button type="submit">Submit</button>
        </section>

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
      </form>
      <div className="ButtonCentered">
        <Link to={"/"}>
          <button className="btn-31">
            <span className="text-container">
              <span className="text">Back</span>
            </span>
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
}
export default EditCard;
