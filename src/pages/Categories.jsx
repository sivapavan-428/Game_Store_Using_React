
// import React, { useEffect, useState, useContext } from "react";
// import { CartContext } from "../utils/CartContext";
// import NormalGameCard from "./NormalGameCard";
// import "./Categories.css";

// const genresList = ["Action", "Adventure", "RPG", "Racing", "Shooter", "Strategy", "Open World"];

// function Categories() {
//   const { addToCart } = useContext(CartContext);
//   const [gamesByGenre, setGamesByGenre] = useState({});

//   useEffect(() => {
//     genresList.forEach((genre) => {
//       fetch(`http://localhost:8081/auth/api/games/getByGenre/${genre}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setGamesByGenre((prev) => ({ ...prev, [genre]: data }));
//         })
//         .catch((err) => console.error("Error fetching games for genre:", genre, err));
//     });
//   }, []);

//   return (
//     <div className="categories-page">
//       <h1 className="categories-title">🎮 Game Categories</h1>

//       {genresList.map((genre) => (
//         <div key={genre} className="genre-section">
//           <h2 className="genre-title">{genre}</h2>
//           <div className="manual-scroll-container">
//             {gamesByGenre[genre]?.length > 0 ? (
//               gamesByGenre[genre].map((game) => (
//                 <NormalGameCard
//                   key={game.id}
//                   game={game}
//                   onAddToCart={addToCart}
//                 />
//               ))
//             ) : (
//               <p className="no-games">No games available in this genre.</p>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Categories;































import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../utils/CartContext";
import NormalGameCard from "./NormalGameCard";
import "./Categories.css";

const genresList = ["Action", "Adventure", "RPG", "Racing", "Shooter", "Strategy", "Open World"];

function Categories() {
  const { addToCart } = useContext(CartContext);
  const [gamesByGenre, setGamesByGenre] = useState({});

  useEffect(() => {
    genresList.forEach((genre) => {
      fetch(`http://localhost:8081/auth/api/games/getByGenre/${genre}`)
        .then((res) => res.json())
        .then((data) => {
          setGamesByGenre((prev) => ({ ...prev, [genre]: data }));
        })
        .catch((err) => console.error("Error fetching games for genre:", genre, err));
    });
  }, []);

  return (
    <div className="categories-page">
      <h1 className="categories-title">🎮 Game Categories</h1>

      {genresList.map((genre) => (
        <div key={genre} className="genre-section">
          <h2 className="genre-title">{genre}</h2>
          <div className="manual-scroll-container">
            {gamesByGenre[genre]?.length > 0 ? (
              gamesByGenre[genre].map((game) => (
                <NormalGameCard
                  key={game.id}
                  game={game}
                  onAddToCart={addToCart}
                />
              ))
            ) : (
              <p className="no-games">No games available in this genre.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
