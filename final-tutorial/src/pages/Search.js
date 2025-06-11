import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import games from '../data/games';

const Search = () => {
  const [query, setQuery] = useState('');

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page">
      <h2>🎮 Search Games</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', marginBottom: '20px', width: '100%' }}
      />

      <div className="card-list">
        {filteredGames.map((game) => (
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
