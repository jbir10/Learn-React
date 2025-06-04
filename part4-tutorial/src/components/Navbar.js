import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout, username, toggleTheme, setAccentColor }) => {
  const avatarLetter = username ? username[0].toUpperCase() : '?';

  const handleAccentChange = (e) => {
    const selected = e.target.value;
    setAccentColor(selected);
    localStorage.setItem('accent', selected);
  };

  return (
    <div className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div className="avatar">{avatarLetter}</div>
        <Link to="/games">Games</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <select onChange={handleAccentChange} defaultValue={localStorage.getItem('accent') || '#00f0ff'}>
          <option value="#00f0ff">Neon Blue</option>
          <option value="#39ff14">Neon Green</option>
          <option value="#ff4fe1">Hot Pink</option>
          <option value="#ff3131">Neon Red</option>
          <option value="#bc13fe">Neon Purple</option>
        </select>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
