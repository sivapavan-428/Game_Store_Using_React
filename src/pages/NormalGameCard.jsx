// import React from "react";
// import "./NormalGameCard.css";

// function NormalGameCard({ game }) {
//   return (
//     <div className="normal-card">
//       <img
//         src={game.imgBase64 || "/default-game.png"}
//         alt={game.name}
//         className="normal-image"
//       />
//       <div className="normal-info">
//         <h3>{game.name}</h3>
//         <p className="price">₹{game.price}</p>
//         {game.discount && <p className="discount">-{game.discount} Rs</p>}
//         <button className="normal-buy-btn">Buy Now</button>
//       </div>
//     </div>
//   );
// }

// export default NormalGameCard;


import React from "react";
import "./NormalGameCard.css";

function NormalGameCard({ game }) {
  return (
    <div className="game-card normal-card">
      <img src={game.imageName} alt={game.name} className="game-image" />
      <div className="game-info">
        <h3>{game.name}</h3>
        <p className="price">₹{game.price}</p>
        {game.discount && <p className="discount">-{game.discount}%</p>}
        <button className="buy-btn normal-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default NormalGameCard;
