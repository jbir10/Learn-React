import React, { useState, useEffect } from 'react';
import './App.css';
import GameForm from './GameForm';
import GameList from './GameList';
import Login from './Login';

function App() {
  const [username, setUsername] = useState('');
  const [games, setGames] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');


  useEffect(() => {
    const savedUser = localStorage.getItem('username');
    const storedGames = localStorage.getItem('games');
    if (savedUser) setUsername(savedUser);
    if (storedGames) setGames(JSON.parse(storedGames));
  }, []);

  useEffect(() => {
    localStorage.setItem('games', JSON.stringify(games));
  }, [games]);

  const handleLogin = (uname) => {
    setUsername(uname);
    localStorage.setItem('username', uname);
  };

  const handleLogout = () => {
    setUsername('');
    localStorage.removeItem('username');
  };

  const addGame = (game) => {
    setGames((prev) => [...prev, { ...game, username }]);
  };

  const deleteGame = (indexToDelete) => {
    setGames((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  const userGames = games.filter((g) => g.username === username);

  const sortedGames = [...userGames].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  console.log("Username state:", username);
  if (!username) return <Login onLogin={handleLogin} />;

  return (
    <div className="App">
      <h1>🎮 {username}'s Game Tracker</h1>
      <button onClick={handleLogout}>Logout</button>

      <GameForm addGame={addGame} />

      <div>
        <label>Sort by Title: </label>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">A – Z</option>
          <option value="desc">Z – A</option>
        </select>
      </div>

      <GameList games={sortedGames} onDelete={deleteGame} />
    </div>
  );
}

export default App;
