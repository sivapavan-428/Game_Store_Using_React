import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "Action",
    games: [
      { id: 1, name: "CyberQuest", img: "https://via.placeholder.com/200x250", price: 2999 },
      { id: 2, name: "Dragon Slayer", img: "https://via.placeholder.com/200x250", price: 3999 },
      { id: 3, name: "Shadow Strike", img: "https://via.placeholder.com/200x250", price: 3199 },
    ],
  },
  {
    id: 2,
    name: "RPG",
    games: [
      { id: 4, name: "Mystic Quest", img: "https://via.placeholder.com/200x250", price: 2599 },
      { id: 5, name: "Dungeon Master", img: "https://via.placeholder.com/200x250", price: 2999 },
      { id: 6, name: "Epic Battle", img: "https://via.placeholder.com/200x250", price: 3999 },
    ],
  },
  {
    id: 3,
    name: "Adventure",
    games: [
      { id: 7, name: "Sky Fortress", img: "https://via.placeholder.com/200x250", price: 2999 },
      { id: 8, name: "Sky Riders", img: "https://via.placeholder.com/200x250", price: 2699 },
    ],
  },
  {
    id: 4,
    name: "Strategy",
    games: [
      { id: 9, name: "Pixel Racer", img: "https://via.placeholder.com/200x250", price: 1999 },
      { id: 10, name: "Monster Hunt", img: "https://via.placeholder.com/200x250", price: 3899 },
    ],
  },
];

function Categories() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = (gameId) => cartItems.some((item) => item.id === gameId);

  return (
    <div className="categories-page">
      {/* <h1>Game Categories</h1> */}
      {categories.map((cat) => (
        <div className="category-section" key={cat.id}>
          <h2>{cat.name}</h2>
          <div className="games-carousel">
            {cat.games.map((game) => (
              <div className="game-card" key={game.id}>
                <img src={game.img} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <p>{game.price}.Rs</p>
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

export default Categories;
