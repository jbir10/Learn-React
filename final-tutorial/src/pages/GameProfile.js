import React from 'react';
import { useParams, Link } from 'react-router-dom';
import games from '../data/games';

const GameProfile = () => {
  const { id } = useParams();
  const game = games.find(g => g.id === id);

  if (!game) return <p>Game not found.</p>;

  return (
    <div className="page">
      <h2>{game.title}</h2>
      <p><strong>Genre:</strong> {game.genre}</p>
      <p><strong>Platform:</strong> {game.platform}</p>
      <p><strong>Description:</strong> {game.description}</p>
      <Link to="/search">← Back to Games</Link>
    </div>
  );
};

export default GameProfile;
