import React from "react";
import "./GameCard.css";

function GameCard({ game, type }) {
  return (
    <div className={`game-card ${type === "trending" ? "trending-card" : "normal-card"}`}>
      <img
        src={game.image}
        alt={game.name}
        className={`game-image ${type === "trending" ? "trending-image" : "normal-image"}`}
      />
      <div className="game-info">
        <h3 className="game-title">{game.name}</h3>
        <p className="price">₹{game.price}</p>
        {game.discount && <p className="discount">-{game.discount}.Rs</p>}
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default GameCard;
