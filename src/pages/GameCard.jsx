import React from "react";
import "./GameCard.css";

function GameCard({ game, large }) {
  return (
    <div className={`game-card ${large ? "large" : ""}`}>
      <img src={game.image} alt={game.name} className="game-img" />
      <div className="game-info">
        <h3>{game.name}</h3>
        <p className="price">₹{game.price}</p>
        {game.discount && <p className="discount">-{game.discount}%</p>}
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default GameCard;
