import React, { useContext } from "react";
import "./Home.css";
import { CartContext } from "../utils/CartContext";


const gameSections = [
  {
    title: "Trending Games",
    games: [
      { id: 1, name: "CyberQuest", img: "https://via.placeholder.com/200x250", price: 2999 },
      { id: 2, name: "Dragon Slayer", img: "https://via.placeholder.com/200x250", price: 3999 },
      { id: 3, name: "Pixel Racer", img: "https://via.placeholder.com/200x250", price: 1999 },
      { id: 4, name: "Sky Fortress", img: "https://via.placeholder.com/200x250", price: 2999 },
      { id: 5, name: "Galaxy Raiders", img: "https://via.placeholder.com/200x250", price: 3499 },
      { id: 6, name: "Mystic Quest", img: "https://via.placeholder.com/200x250", price: 2599 },
    ],
  },
  {
    title: "New Releases",
    games: [
      { id: 7, name: "Shadow Strike", img: "https://via.placeholder.com/200x250", price: 3199 },
      { id: 8, name: "Neon Drift", img: "https://via.placeholder.com/200x250", price: 2299 },
      { id: 9, name: "Monster Hunt", img: "https://via.placeholder.com/200x250", price: 3899 },
      { id: 10, name: "Sky Riders", img: "https://via.placeholder.com/200x250", price: 2699 },
      { id: 11, name: "Epic Battle", img: "https://via.placeholder.com/200x250", price: 3999 },
    ],
  },
  {
    title: "Top Rated",
    games: [
      { id: 12, name: "Star Voyager", img: "https://via.placeholder.com/200x250", price: 3599 },
      { id: 13, name: "Dungeon Master", img: "https://via.placeholder.com/200x250", price: 2999 },
      { id: 14, name: "Speed Legends", img: "https://via.placeholder.com/200x250", price: 2499 },
      { id: 15, name: "Battle Arena", img: "https://via.placeholder.com/200x250", price: 4199 },
    ],
  },
];

function Home() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = (gameId) => cartItems.some((item) => item.id === gameId);

  return (
    <div className="home-page">
      {gameSections.map((section, index) => (
        <div className="game-section" key={index}>
          <h2>{section.title}</h2>
          <div className="games-carousel">
            {section.games.map((game) => (
              <div className="game-card" key={game.id}>
                {game.isNew && <div className="ribbon">NEW</div>}
                <img src={game.img} alt={game.name} />
                <div className="price-badge">{game.price}.Rs</div>
                <div className="game-info">
                  <h3>{game.name}</h3>
                  {isInCart(game.id) ? (
                    <button className="remove-btn" onClick={() => removeFromCart(game.id)}>Remove</button>
                  ) : (
                    <button className="add-btn" onClick={() => addToCart(game)}>Add to Cart</button>
                  )}
                </div>
              </div>

            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
