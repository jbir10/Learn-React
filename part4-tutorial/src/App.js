import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Games from './pages/Games';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    const savedTheme = localStorage.getItem('theme');
    if (storedUser) setUsername(storedUser);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const handleLogin = (uname) => {
    setUsername(uname);
    localStorage.setItem('username', uname);
  };

  const handleLogout = () => {
    setUsername('');
    localStorage.removeItem('username');
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <div className={`App ${theme}`}>
      <Router>
        {username && (
          <Navbar
            username={username}
            onLogout={handleLogout}
            toggleTheme={toggleTheme}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={
              username ? (
                <Navigate to="/games" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/games"
            element={
              username ? (
                <Games username={username} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/profile"
            element={
              username ? (
                <Profile username={username} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
