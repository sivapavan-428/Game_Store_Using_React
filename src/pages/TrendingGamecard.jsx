

import React from "react";
import "./TrendingGameCard.css";

function TrendingGameCard({ game , onAddToCart}) {
  return (
    <div className="trending-card">
      <img src={game.imgBase64 || "/default-game.png"} alt={game.name} className="game-image" />

      <div className="game-info-overlay">
        <h3>{game.name}</h3>
        <p className="price">₹{game.price}</p>
        {/* {game.discount && <p className="discount">-{game.discount}.Rs</p>} */}
        <button className="buy-btn trending-btn" onClick={() => onAddToCart && onAddToCart(game)}>Buy Now</button>
      </div>
    </div>
  );
}

export default TrendingGameCard;
