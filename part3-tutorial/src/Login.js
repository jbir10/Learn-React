import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return alert('Enter a username');
    onLogin(username.trim());
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <h2>Login to Favorite Games Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
