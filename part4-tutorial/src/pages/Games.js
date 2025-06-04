import React, { useState, useEffect } from 'react';

const Games = ({ username }) => {
  const [games, setGames] = useState([]);
  const [form, setForm] = useState({
    title: '',
    genre: '',
    platform: '',
    date: ''
  });
  const [search, setSearch] = useState('');
  const [editIndex, setEditIndex] = useState(null);

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
    if (!form.title || !form.genre || !form.platform || !form.date) {
      return alert('Fill all fields');
    }

    if (editIndex !== null) {
      const updatedGames = [...games];
      updatedGames[editIndex] = { ...form, username };
      setGames(updatedGames);
      setEditIndex(null); // exit edit mode
    } else {
      const newGame = { ...form, username };
      setGames((prev) => [...prev, newGame]);
    }

    setForm({ title: '', genre: '', platform: '', date: '' });
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this game?");
    if (!confirmDelete) return;

    setGames((prev) => prev.filter((_, i) => i !== index));
    if (editIndex === index) setEditIndex(null);
  };


  const handleEdit = (index) => {
    const game = userGames[index];
    setForm({
      title: game.title,
      genre: game.genre,
      platform: game.platform,
      date: game.date
    });

    const actualIndex = games.findIndex(
      (g) =>
        g.username === username &&
        g.title === game.title &&
        g.date === game.date
    );
    setEditIndex(actualIndex);
  };

  const userGames = games
    .filter((g) => g.username === username)
    .filter((g) => g.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App">
      <h2>🎮 {username}'s Game List</h2>

      <input
        type="text"
        placeholder="Search games by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {editIndex !== null && (
        <p style={{ color: '#00f0ff' }}>
          Editing Game #{editIndex + 1}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Game Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="genre"
          placeholder="Genre"
          value={form.genre}
          onChange={handleChange}
        />
        <input
          name="platform"
          placeholder="Platform"
          value={form.platform}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <button type="submit">{editIndex !== null ? 'Update Game' : 'Add Game'}</button>
      </form>

      {userGames.map((game, i) => (
        <div className="card" key={i}>
          <h3>{game.title}</h3>
          <p><strong>Genre:</strong> {game.genre}</p>
          <p><strong>Platform:</strong> {game.platform}</p>
          {game.date && <p><strong>Played On:</strong> {game.date}</p>}
          <button onClick={() => handleEdit(i)}>Edit</button>
          <button onClick={() => handleDelete(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Games;
