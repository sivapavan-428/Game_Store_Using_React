// import React, { useContext } from "react";
// import { CartContext } from "../utils/CartContext";
// import "./Categories.css";

// const categories = [
//   {
//     id: 1,
//     name: "Action",
//     games: [
//       { id: 1, name: "CyberQuest", img: "https://via.placeholder.com/200x250", price: 2999 },
//       { id: 2, name: "Dragon Slayer", img: "https://via.placeholder.com/200x250", price: 3999 },
//       { id: 3, name: "Shadow Strike", img: "https://via.placeholder.com/200x250", price: 3199 },
//     ],
//   },
//   {
//     id: 2,
//     name: "RPG",
//     games: [
//       { id: 4, name: "Mystic Quest", img: "https://via.placeholder.com/200x250", price: 2599 },
//       { id: 5, name: "Dungeon Master", img: "https://via.placeholder.com/200x250", price: 2999 },
//       { id: 6, name: "Epic Battle", img: "https://via.placeholder.com/200x250", price: 3999 },
//     ],
//   },
//   {
//     id: 3,
//     name: "Adventure",
//     games: [
//       { id: 7, name: "Sky Fortress", img: "https://via.placeholder.com/200x250", price: 2999 },
//       { id: 8, name: "Sky Riders", img: "https://via.placeholder.com/200x250", price: 2699 },
//     ],
//   },
//   {
//     id: 4,
//     name: "Strategy",
//     games: [
//       { id: 9, name: "Pixel Racer", img: "https://via.placeholder.com/200x250", price: 1999 },
//       { id: 10, name: "Monster Hunt", img: "https://via.placeholder.com/200x250", price: 3899 },
//     ],
//   },
// ];

// function Categories() {
//   const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

//   const isInCart = (gameId) => cartItems.some((item) => item.id === gameId);

//   return (
//     <div className="categories-page">
//       <h1>Game Categories</h1>
//       {categories.map((cat) => (
//         <div className="category-section" key={cat.id}>
//           <h2>{cat.name}</h2>
//           <div className="games-carousel">
//             {cat.games.map((game) => (
//               <div className="game-card" key={game.id}>
//                 <img src={game.img} alt={game.name} />
//                 <div className="game-info">
//                   <h3>{game.name}</h3>
//                   <p>{game.price}.Rs</p>
//                   {isInCart(game.id) ? (
//                     <button className="remove-btn" onClick={() => removeFromCart(game.id)}>Remove</button>
//                   ) : (
//                     <button className="add-btn" onClick={() => addToCart(game)}>Add to Cart</button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Categories;



import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils/CartContext";
import "./Categories.css";

function Categories() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [games, setGames] = useState([]);
  const [groupedByGenre, setGroupedByGenre] = useState({});

  useEffect(() => {
    fetch("http://localhost:8081/api/games/all")
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const grouped = games.reduce((acc, game) => {
      if (game.genres && game.genres.length > 0) {
        game.genres.forEach((genre) => {
          if (!acc[genre]) acc[genre] = [];
          acc[genre].push(game);
        });
      }
      return acc;
    }, {});
    setGroupedByGenre(grouped);
  }, [games]);

  const isInCart = (gameId) => cartItems.some((item) => item.id === gameId);

  if (games.length === 0) {
    return (
      <div className="categories-page no-games-message">
        <p>No games right now. Please come back later!</p>
      </div>
    );
  }

  return (
    <div className="categories-page">
      {Object.keys(groupedByGenre).length === 0 && (
        <p>No games available at the moment.</p>
      )}

      {Object.entries(groupedByGenre).map(([genre, genreGames]) => (
        <div className="category-section" key={genre}>
          <h2>{genre}</h2>
          <div className="games-carousel">
            {genreGames.map((game) => (
              <div className="game-card" key={game.id}>
                <img
                  src={game.imgBase64 || "/default-game.png"}
                  alt={game.name}
                />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <p>{game.price === 0 ? "Free" : `₹${game.price}`}</p>
                  {isInCart(game.id) ? (
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(game.id)}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      className="add-btn"
                      onClick={() => addToCart(game)}
                    >
                      +
                    </button>
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
