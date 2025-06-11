import React from 'react';

const friends = [
  { name: 'Luna', favorite: 'Fortnite' },
  { name: 'Rin', favorite: 'Overwatch' },
  { name: 'Milo', favorite: 'Minecraft' },
];

const Friends = () => {
  return (
    <div className="page">
      <h2>👥 Friends List</h2>
      {friends.map((f, index) => (
        <div className="card" key={index}>
          <h3>{f.name}</h3>
          <p>Favorite Game: {f.favorite}</p>
          <button disabled>Challenge</button>
        </div>
      ))}
    </div>
  );
};

export default Friends;
