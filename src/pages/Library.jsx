import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import "./Library.css";

function Library() {
  const { purchasedGames } = useContext(CartContext); // We'll track purchased games

  return (
    <div className="library-page">
      <h1>My Library</h1>
      {purchasedGames.length === 0 ? (
        <p>You don't own any games yet!</p>
      ) : (
        <div className="games-carousel">
          {purchasedGames.map((game) => (
            <div className="game-card" key={game.id}>
              <img src={game.img} alt={game.name} />
              <div className="game-info">
                <h3>{game.name}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Library;
