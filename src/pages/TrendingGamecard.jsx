// import React from "react";
// import "./TrendingGameCard.css";

// function TrendingGameCard({ game }) {
//   return (
//     <div className="trending-card">
//       <img
//         src={game.imgBase64 || "/default-game.png"}
//         alt={game.name}
//         className="trending-image"
//       />
//       <div className="trending-info">
//         <h3>{game.name}</h3>
//         <p className="price">₹{game.price}</p>
//         {game.discount && <p className="discount">-{game.discount} Rs</p>}
//         <button className="trending-buy-btn">Buy Now</button>
//       </div>
//     </div>
//   );
// }

// export default TrendingGameCard;



import React from "react";
import "./TrendingGameCard.css";

function TrendingGameCard({ game }) {
  return (
    <div className="game-card trending-card">
      <img src={game.imageName} alt={game.name} className="game-image" />
      <div className="game-info">
        <h3>{game.name}</h3>
        <p className="price">₹{game.price}</p>
        {game.discount && <p className="discount">-{game.discount}%</p>}
        <button className="buy-btn trending-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default TrendingGameCard;
