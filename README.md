# Magic The Gathering Project 

This ReactJS web app is designed to implement CRUD operations.
The Read part is done by fetching information from the API, while the Create, Update and Delete functions are all done on a mock backend json server.
The user can use the website to:
- View some of the existing cards, reading from the API;
- Create, update and delete their own cards, where the image is AI generated, by prompts inputted by the user.
- Explore the story, rules and how to play the game.


## Table of Contents

| # | Section                 |
|---|-------------------------|
| 1 | [Deployment link](#deployment-link) |
| 2 | [API Link](#api-link) |
| 3 | [Challenges](#challenges) |
| 4 | [Features](#features) |
| 5 | [Future Improvements](#future-improvements) |
| 6 | [Screenshots](#screenshots) |
| 7 | [Technologies Used](#technologies-used) |
| 8 | [Credits](#credits) |


## 1 - Deployment link

Vercel deployment service: https://mtg-project.vercel.app/

## 2 - API Link

The API used is a snippet from a much more complete and detailed API (with almost 10k cards).
Link: https://api.scryfall.com/cards//search?q=c

## 3 - Challenges

- Dealing with the integration of an AI image generator.
- The initial size of the API.

## 4 - Features

- Accessing a DB of existing Matgic The Gathering cards.
- Create, Edit and Delete your cards, where you can use an AI image generator to get the image for your card.
- Consult the Card and Fact of the Day, and a big list of fun facts about the game.
- Learn how to play the game, and the lore behind it.
- Utilize the Navigation bar to enter different routes inside the web app
- Utilize the footer to access the information of the web app's creators, and links to the brand's owners.

## 5 - Future Improvements

1. Implement a fake login, in order to make the custom cards only editable by the user that created them.
2. After the fake login implementation, have a card inspection for the custom cards, where you can see who was the user that created it.


## 6 - Screenshots

<img src="https://github.com/FilipeTeixeira09/MTG-project/assets/123658545/09d56710-542e-4866-80e6-a9d223811e90" width="600">
<img src="https://github.com/FilipeTeixeira09/MTG-project/assets/123658545/32a89ff3-c10f-409e-a7dd-bd5ec0aa4f7d" width="600">
<img src="https://github.com/FilipeTeixeira09/MTG-project/assets/123658545/13109634-4c9d-47a3-9b58-68455638fafa" width="600">
<img src="https://github.com/FilipeTeixeira09/MTG-project/assets/123658545/dacf7173-c237-4ac6-8487-68faee1e20d6" width="600">
<img src="https://github.com/FilipeTeixeira09/MTG-project/assets/123658545/566cc9a5-31bb-49fb-ab0c-b34098204ae9" width="600">
<img src="https://github.com/FilipeTeixeira09/MTG-project/assets/123658545/1c1c036c-ebf1-4df3-be1a-7bbb29e64f4d" width="600">


## 7 - Technologies Used

- React: Frontend development framework
- JSON Server: Mock backend for CRUD operations
- AI Image Generator: Tool for generating card artwork
- Magic the Gathering API: Source of existing card data

## 8 - Credits

This Web App was created by 🛠️ [Filipe](https://github.com/FilipeTeixeira09) and 🛠️ [Daniel](https://github.com/dannielcosta) as a project for the second module of Ironhack WebDev Bootcamp.

---

Feel free to contribute, report issues, or suggest improvements! Thank you for visiting and using our website! 🔥
