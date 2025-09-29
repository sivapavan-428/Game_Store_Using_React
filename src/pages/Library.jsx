// src/pages/Library.jsx
import React, { useState } from "react";
import "./Library.css";

const ownedGames = [
  { id: 1, name: "CyberQuest", img: "https://via.placeholder.com/200x250" },
  { id: 2, name: "Pixel Racer", img: "https://via.placeholder.com/200x250" },
];

function Library() {
  const [games] = useState(ownedGames);

  return (
    <div className="library-page">
      <h1>My Library</h1>
      {games.length === 0 ? (
        <p>You don't own any games yet!</p>
      ) : (
        <div className="library-list">
          {games.map((game) => (
            <div className="library-card" key={game.id}>
              <img src={game.img} alt={game.name} />
              <h3>{game.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Library;
