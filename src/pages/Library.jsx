
import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import "./Library.css";

function Library() {
  const { purchasedGames = [] } = useContext(CartContext); 

  return (
    <div className="library-page">
      <h1>🎮 My Library</h1>

      {purchasedGames.length === 0 ? (
        <p className="no-gamess">You don't own any games yet!</p>
      ) : (
        <div className="games-gridd">
          {purchasedGames.map((game) => (
            <div className="game-cardd" key={game.id}>
              <img
                src={game.imgUrl ||game.imgBase64 || "/default-game.png"}
                alt={game.name}
                className="gamme-image"
              />
              <div className="gamme-info">
                <h3>{game.name}</h3>
                <p className="ggame-price">
                  {game.price
                    ? `₹${game.discount ? Math.round(game.price * (1 - game.discount / 100)) : game.price}`
                    : "Free"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Library;
