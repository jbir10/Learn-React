import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">🏠 Home</Link>
      <Link to="/leaderboard">🏆 Leaderboard</Link>
      <Link to="/profile">👤 Profile</Link>
      <Link to="/search">🔍 Search</Link>
      <Link to="/friends">🧑‍🤝‍🧑 Friends</Link>
    </nav>
  );
};

export default Navbar;
