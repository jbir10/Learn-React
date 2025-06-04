import React from 'react';

const Profile = ({ username }) => {
  return (
    <div className="App">
      <h2>👤 Profile</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Status:</strong> Logged in</p>
    </div>
  );
};

export default Profile;