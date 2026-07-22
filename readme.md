
# Game Library
 
A full-stack web application for tracking your video game backlog. Add games to a shared library, save copies to your own personal list, track your play status, and write reviews for games you've played.
 
## Overview
 
Game Library lets users sign up, log in, and build out a collection of games with details like genre, platform, and cover image. Users can browse everyone's games, "save" any game to their own list (which creates their own copy to track), update their play status (Did not start, In Progress, Dropped, Finished), and leave reviews on games tied to their current status.
 
## Screenshots
 
*(Add screenshots here)*
 
## Technologies Used
 
- Node.js
- Express 5
- MongoDB
- Mongoose
- EJS
- bcrypt
- express-session
- connect-mongo
- method-override
- morgan
- dotenv
## Getting Started
 
[Deployed App](#) *(add link once deployed)*
 
[Trello / Planning Board](#) *(optional)*
 
### Installation
 
1. Clone the repo
```bash
   git clone https://github.com/mohasa7an22/Game-Library.git
   cd Game-Library
```
2. Install dependencies
```bash
   npm install
```
3. Create a `.env` file in the root directory with the following variables:
```
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   PORT=3000
```
4. Start the server
```bash
   nodemon server.js
```
5. Visit `http://localhost:3000` in your browser
## User Stories
 
1. As a user, I want to sign up and create an account.
2. As a user, I want to log in to my account.
3. As a user, I want to be able to sign out of my account.
4. As a user, I want to see games that have already been added.
5. As a user, I want to be able to add existing games to my own library.
6. As a user, I want to be able to add new games to the website.
7. As a user, I want to be able to update my status on the games I own.
8. As a user, I want to be able to review games I have played.
9. As a user, I want to see the status of reviewers on whether they finished the game or not.
10. As a user, I want to be able to delete a game from my list.
11. As a user, I want to be able to add an image to the game I am adding.
12. As a user, I want to be able to delete reviews I made on a game.
13. As a user, I want to be able to edit a review I've already written.
14. As a user, I want to see which games I've saved separately from games I own.
15. As a user, I want to see how many other users have saved a game.
16. As a user, I want to filter games by platform so I can find what I own.
17. As a user, I want to filter games by genre so I can find games similar to ones I like.
18. As a user, I want to see an average rating or overall consensus on a game from all its reviews.
19. As a user, I want to view all the games and reviews a specific user has added.
20. As a user, I want validation and error messages if I submit a form incorrectly (e.g., missing required fields).
21. As a user, I want to be prevented from saving a game I already own or have saved.
22. As a user, I want to be redirected to sign in if I try to access a protected route while logged out.
23. As a user, I want to update my account information (e.g., username or password).
24. As a user, I want to be able to search for a game by name.
## Database Design (ERD)
 
**User**
- username
- password (hashed)
**Game**
- name
- genre
- image
- platform
- status (Did not start / In Progress / Dropped / Finished)
- owner → ref: User
- savedBy → [ref: User]
- gameReviews → [ref: Review]
**Review**
- title
- reviewBody
- reviewStatus
- owner → ref: User
- reviewedGame → ref: Game



## Routes

| Method | Route                                | Description                                    |
|--------|--------------------------------------|------------------------------------------------|
| GET    | `/`                                  | Homepage                                       |
| GET    | `/auth/sign-up`                      | Sign up form                                   |
| POST   | `/auth/sign-up`                      | Create new user                                |
| GET    | `/auth/sign-in`                      | Sign in form                                   |
| POST   | `/auth/sign-in`                      | Log in existing user                           |
| GET    | `/auth/sign-out`                     | Log out current user                           |
| GET    | `/games`                             | List all games, grouped by owner and by saver  |
| GET    | `/games/new`                         | Form to add a new game                         |
| POST   | `/games`                             | Create a new game                              |
| GET    | `/games/:id`                         | View a single game and its reviews             |
| GET    | `/games/:id/edit`                    | Form to edit a game (owner only)               |
| PUT    | `/games/:id`                         | Update a game (owner only)                     |
| DELETE | `/games/:id`                         | Delete a game (owner only)                     |
| POST   | `/games/:id/save`                    | Save a copy of a game to your own list         |
| POST   | `/games/:id/unsave`                  | Remove a game from your saved list             |
| GET    | `/games/:gameId/reviews/newReview`   | Form to write a review for a game              |
| POST   | `/games/:gameId/reviews`             | Create a review for a game                     |
| GET    | `/games/:gameId/reviews/:reviewId`   | View/edit a single review                      |


## Features

- Full CRUD functionality for games
- User authentication with hashed passwords (bcrypt) and persistent sessions (express-session + connect-mongo)
- Protected routes so only signed-in users can create, save, edit, or delete games
- Users can only edit/delete games they own
- "Save" system lets users clone another user's game into their own list to track separately
- Games grouped and displayed by owner and by saver on the main games page
- Review system tied to a game's status at the time of review
- Dynamic genre, platform, and status dropdowns with pre-selected values on edit

## Future Enhancements

- Add a search feature
- Add filters to browse by specific genres and platforms
- Integrate a public game library API (e.g., IGDB, RAWG) to auto-fill game details
- Allow users to browse and follow other users' libraries
- Allow for multiple platforms so it turns from a simple tracker to a full fledged tracker
- Image upload support (Cloudinary) instead of URL-only images

## Credits
Mohasa7an22 
codepen steam inspired game card hover https://codepen.io/andrewhawkes/pen/RwwOJrO used to display the game images
W3School for forms and navbar