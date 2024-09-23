import { useState, useEffect } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import CardGrid from "./components/CardGrid";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12"
      );
      const data = await response.json();
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      setCards(
        pokemonData.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.front_default,
          clicked: false,
        }))
      );
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  const shuffleCards = () => {
    setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
  };

  const handleCardClick = (id) => {
    setCards((prevCards) => {
      const clickedCard = prevCards.find((card) => card.id === id);

      if (clickedCard.clicked) {
        // Card was already clicked, end the game
        setScore(0);
        return prevCards.map((card) => ({ ...card, clicked: false }));
      } else {
        // Card wasn't clicked before, continue the game
        setScore((prevScore) => {
          const newScore = prevScore + 1;
          setBestScore((prevBestScore) => Math.max(newScore, prevBestScore));
          return newScore;
        });
        return prevCards.map((card) =>
          card.id === id ? { ...card, clicked: true } : card
        );
      }
    });

    shuffleCards();
  };

  return (
    <div className="App">
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </div>
  );
};

export default App;
