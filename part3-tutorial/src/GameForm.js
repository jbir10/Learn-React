import React, { useState } from 'react';

const GameForm = ({ addGame }) => {
  const [form, setForm] = useState({ title: '', genre: '', platform: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, genre, platform } = form;
    if (!title || !genre || !platform) return alert('Fill all fields');
    addGame(form);
    setForm({ title: '', genre: '', platform: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Game Title" value={form.title} onChange={handleChange} />
      <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} />
      <input name="platform" placeholder="Platform" value={form.platform} onChange={handleChange} />
      <button type="submit">Add Game</button>
    </form>
  );
};

export default GameForm;
