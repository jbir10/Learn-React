import React from 'react';
import games from '../data/games';
import { Link } from 'react-router-dom';

const Home = () => {
  const featured = games.slice(0, 3);

  return (
    <div className="page">
      <h2>🎉 Welcome to GameHub!</h2>
      <p>Track your favorite games, log scores, and climb the leaderboard.</p>

      <h3>🔥 Featured Games</h3>
      <div className="card-list">
        {featured.map(game => (
          <div className="card" key={game.id}>
            <h3>{game.title}</h3>
            <p>{game.genre}</p>
            <Link to={`/games/${game.id}`}>View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
