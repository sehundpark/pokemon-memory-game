# Pokemon Memory Card Game

This project is a fun and interactive memory game featuring Pokemon characters. Players click on Pokemon cards to earn points, but must remember which ones they've clicked to avoid repeating and losing the game.

## Live Demo

Try out the game here: [Pokemon Memory Card Game](https://pokemon-memory-game-sehundpark.netlify.app/)

## Features

- Dynamic grid of Pokemon cards
- Score tracking (current score and best score)
- Interactive card selection
- Responsive design for various screen sizes

## Tech Stack

- React
- CSS for styling

## Project Structure

- `src/`
  - `components/`: Reusable React components
    - `Card.jsx`: Individual Pokemon card component
    - `CardGrid.jsx`: Grid layout for Pokemon cards
    - `Header.jsx`: Game title and instructions
    - `Scoreboard.jsx`: Displays current and best scores
  - `App.css`: Styles for the application
  - `App.jsx`: Main application component
  - `index.jsx` or `main.jsx`: Entry point of the application

## Key Components

- `Card.jsx`: Renders individual Pokemon cards with image and name
- `CardGrid.jsx`: Manages the layout of multiple Card components
- `Header.jsx`: Displays the game title and instructions
- `Scoreboard.jsx`: Shows the current score and best score

## How to Play

1. The game starts with a grid of Pokemon cards.
2. Click on any card to earn a point.
3. After each click, the cards will be randomly rearranged.
4. Try to click on each Pokemon only once.
5. If you click on a Pokemon you've already selected, the game ends.
6. Aim to achieve the highest score possible!

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/sehundpark/pokemon-memory-game.git
   ```
2. Navigate to the project directory:
   ```
   cd pokemon-memory-card-game
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Styling

The game uses custom CSS for styling, creating a visually appealing interface with:
- A responsive card grid layout
- Hover effects on cards
- A clean, user-friendly design

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
