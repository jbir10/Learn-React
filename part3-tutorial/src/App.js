import React, { useState, useEffect } from 'react';
import './App.css';
import GameForm from './GameForm';
import GameList from './GameList';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('games');
    if (stored) setGames(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('games', JSON.stringify(games));
  }, [games]);

  const addGame = (game) => {
    setGames((prev) => [...prev, game]);
  };

  const deleteGame = (indexToDelete) => {
    setGames((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  return (
    <div className="App">
      <h1>🎮 Favorite Games Tracker</h1>
      <GameForm addGame={addGame} />
      <GameList games={games} onDelete={deleteGame} />
    </div>
  );
}

export default App;
