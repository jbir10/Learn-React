import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Games from './pages/Games';
import Profile from './pages/Profile';
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

  return (
    <Router>
      {username && <Navbar username={username} onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={
          username
            ? <Navigate to="/games" />
            : <Login onLogin={handleLogin} />
        } />
        <Route path="/games" element={username ? <Games username={username} /> : <Navigate to="/" />} />
        <Route path="/profile" element={username ? <Profile username={username} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;