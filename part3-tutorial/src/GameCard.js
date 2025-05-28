import React from 'react';

const GameCard = ({ game, onDelete }) => {
  return (
    <div className="person-card">
      <h3>{game.title}</h3>
      <p><strong>Genre:</strong> {game.genre}</p>
      <p><strong>Platform:</strong> {game.platform}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default GameCard;
