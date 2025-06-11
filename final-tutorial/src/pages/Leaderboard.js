import React from 'react';
import leaderboardData from '../data/leaderboardData';
import './Leaderboard.css';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  return (
    <div className="page">
      <h2>🏆 Global Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Game</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index}>
              <td>#{index + 1}</td>
              <td>{entry.username}</td>
              <td><Link to={`/games/${entry.gameId}`}>{entry.game}</Link></td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
