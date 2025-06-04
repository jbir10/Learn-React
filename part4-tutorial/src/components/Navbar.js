import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout, username, toggleTheme }) => {
  const avatarLetter = username ? username[0].toUpperCase() : '?';

  return (
    <div className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div className="avatar">{avatarLetter}</div>
        <Link to="/games">Games</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Navbar;