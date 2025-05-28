import React from 'react';
import GameCard from './GameCard';

const GameList = ({ games, onDelete }) => {
  if (games.length === 0) return <p>No games added yet.</p>;

  return (
    <div>
      <h2>My Games</h2>
      {games.map((game, index) => (
        <GameCard key={index} game={game} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default GameList;
