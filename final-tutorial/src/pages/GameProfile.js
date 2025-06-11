import React from 'react';
import { useParams } from 'react-router-dom';
import games from '../data/games';

const GameProfile = () => {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);

  if (!game) {
    return <h2>Game not found</h2>;
  }

  return (
    <div className="page">
      <h2>{game.title}</h2>
      <p><strong>Genre:</strong> {game.genre}</p>
      <p><strong>Platform:</strong> {game.platform}</p>
      <p>{game.description}</p>
    </div>
  );
};

export default GameProfile;
