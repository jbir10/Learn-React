import React from 'react';

const GameCard = ({ game, onDelete }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>{game.title}</h3>
      <p><strong>Genre:</strong> {game.genre}</p>
      <p><strong>Platform:</strong> {game.platform}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default GameCard;
