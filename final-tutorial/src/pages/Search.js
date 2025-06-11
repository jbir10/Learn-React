import React from 'react';
import { Link } from 'react-router-dom';
import games from '../data/games';

const Search = () => {
  return (
    <div className="page">
      <h2>🎮 All Games</h2>
      <div className="card-list">
        {games.map((game) => (
          <div className="card" key={game.id}>
            <h3>{game.title}</h3>
            <p><strong>Genre:</strong> {game.genre}</p>
            <p><strong>Platform:</strong> {game.platform}</p>
            <Link to={`/games/${game.id}`}>View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
