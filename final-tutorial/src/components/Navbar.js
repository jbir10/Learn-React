import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ username, onLogout }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/search">Search</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/profile">Profile</Link>
      {username && (
        <button onClick={onLogout} style={{ marginLeft: '10px' }}>
          Logout ({username})
        </button>
      )}
    </nav>
  );
};

export default Navbar;
