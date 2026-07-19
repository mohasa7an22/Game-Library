# Game library

## Overview
Game Library is a full stack web applicaation that allows users to store their collection of games and sort them with the name of the game, the genre of the game, an image of the game, the platform of the games i.e. Steam Playstation Nintendo, review the games, and update status on whether they finished the games, still playing, and did not play, users can login and signup.
## Screenshots

## Technologies Used
EJS
CSS
JavaScript
Mongoose
express
## Getting Started

## Installation

## User Stories
1. As a user i want to sign up and make an account.
2. As a user i want to login to my account.
3. As a user i want to be able to sign out of my account.
4. As a user i want to be able to see games that have already been added.
5. As a user i want to be able to add games to my library.
6. As a user i want to be able to add new games to the website.
7. As a user i want to be able update my status on the games.
8. As a user i want to be able to review the games that i have played.
9. As a user i want to see the status of reviewers on whether they finished the game or not.
10. As a user i want to be able to delete a game from my list.
11. As a user i want to be able to add an image to the game i am adding.
12. as a user i want to be able to delete the reviews i made on a game.
## Database Design



## Routes

| GET    | /               | Homepage         |
|--------|-----------------|------------------|
| GET    | /games          | list all games   |
| GET    | /games/mygames  | list users games |
| GET    | /games/new      | add new game     |
| POST   | /games          | create listing   |
| GET    | /games/:id      | View game        |
| GET    | /games/:id/edit | Edit listing     |
| PUT    | /games/:id      | update game      |
| DELETE | /games/:id      | delete game      |


## Features

- Full crud functionality 
- Protected routes where only users can manage their own library

## Future Enhancements

- Adding search feature
- Adding filter to specify specific Genres and platform
- Integrate public API for games library 
- Adding other users and have the ability to user other users library


## Credits