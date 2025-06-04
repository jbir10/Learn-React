import React, { useState, useEffect } from 'react';

const Games = ({ username }) => {
  const [games, setGames] = useState([]);
  const [form, setForm] = useState({ title: '', genre: '', platform: '' });

  useEffect(() => {
    const stored = localStorage.getItem('games');
    if (stored) setGames(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('games', JSON.stringify(games));
  }, [games]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.genre || !form.platform) {
      return alert('Fill all fields');
    }
    const newGame = { ...form, username };
    setGames((prev) => [...prev, newGame]);
    setForm({ title: '', genre: '', platform: '' });
  };

  const handleDelete = (index) => {
    setGames((prev) => prev.filter((_, i) => i !== index));
  };

  const userGames = games.filter(g => g.username === username);

  return (
    <div className="App">
      <h2>🎮 {username}'s Game List</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Game Title" value={form.title} onChange={handleChange} />
        <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} />
        <input name="platform" placeholder="Platform" value={form.platform} onChange={handleChange} />
        <button type="submit">Add Game</button>
      </form>

      {userGames.map((game, i) => (
        <div className="card" key={i}>
          <h3>{game.title}</h3>
          <p><strong>Genre:</strong> {game.genre}</p>
          <p><strong>Platform:</strong> {game.platform}</p>
          <button onClick={() => handleDelete(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Games;