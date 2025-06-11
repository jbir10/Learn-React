import React, { useState } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import games from '../data/games';

const Search = () => {
  const [query, setQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState('');

  const genres = [...new Set(games.map(game => game.genre))]; // unique genres

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(query.toLowerCase()) &&
    (genreFilter === '' || game.genre === genreFilter)
  );

  return (
    <div className="page">
      <h2>🎮 Search Games</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
      />

      <select
        value={genreFilter}
        onChange={(e) => setGenreFilter(e.target.value)}
        style={{ padding: '10px', marginBottom: '20px', width: '100%' }}
      >
        <option value="">All Genres</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>

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
