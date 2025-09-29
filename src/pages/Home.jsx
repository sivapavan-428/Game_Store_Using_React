import React, { useContext } from "react";
import "./Home.css";
import { CartContext } from "../utils/CartContext";

const allGames = [
  { id: 1, name: "CyberQuest", img: "https://via.placeholder.com/200x250", price: 29.99 },
  { id: 2, name: "Dragon Slayer", img: "https://via.placeholder.com/200x250", price: 39.99 },
  { id: 3, name: "Pixel Racer", img: "https://via.placeholder.com/200x250", price: 19.99 },
  { id: 4, name: "Sky Fortress", img: "https://via.placeholder.com/200x250", price: 29.99 },
];

function Home() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = (gameId) => {
    return cartItems.some((item) => item.id === gameId);
  };

  return (
    <div className="home-page">
      <h1>Available Games</h1>
      <div className="games-list">
        {allGames.map((game) => (
          <div className="game-card" key={game.id}>
            <img src={game.img} alt={game.name} />
            <h3>{game.name}</h3>
            <p>${game.price}</p>
            {isInCart(game.id) ? (
              <button className="remove-btn" onClick={() => removeFromCart(game.id)}>
                Remove
              </button>
            ) : (
              <button className="add-btn" onClick={() => addToCart(game)}>
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
