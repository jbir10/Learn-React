import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <div className="navbar">
      <div>
        <Link to="/games">Games</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Navbar;