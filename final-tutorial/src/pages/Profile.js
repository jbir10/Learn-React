import React from 'react';

const Profile = ({ username }) => {
  return (
    <div className="page">
      <h2>👤 User Profile</h2>
      <p><strong>Username:</strong> {username}</p>
      <p>Thanks for being part of the GameHub community!</p>
    </div>
  );
};

export default Profile;
