import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Friends from './pages/Friends';
import GameProfile from './pages/GameProfile';
import Login from './pages/Login'; 
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) setUsername(storedUser);
  }, []);

  const handleLogin = (uname) => {
    setUsername(uname);
    localStorage.setItem('username', uname); 
  };

  const handleLogout = () => {
    setUsername('');
    localStorage.removeItem('username');
  };

  if (!username) return <Login onLogin={handleLogin} />;

  return (
    <Router>
      <Navbar username={username} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/games/:id" element={<GameProfile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
