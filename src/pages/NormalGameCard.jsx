

// import React from "react";
// import "./NormalGameCard.css";

// function NormalGameCard({ game, onAddToCart }) {
//   const discountedPrice = game.discount
//     ? Math.round(game.price * (1 - game.discount / 100))
//     : game.price;

//   return (
//     <div className="normal-card">
//       <div className="image-wrapper">
//         <img
//           src={game.imgBase64 || "/default-game.png"}
//           alt={game.name}
//           className="game-imagee"
//         />
//         <button
//           className="add-to-cartt-btnn"
//           onClick={() => onAddToCart(game)}
//         >
//           +
//         </button>
//       </div>
//       <div className="game-details">
//         <h3>{game.name}</h3>
//         <div className="price-info">
//           {game.discount && <span className="discountt">-{game.discount}%</span>}
//           {game.discount && <span className="original-price">₹{game.price}</span>}
//           <span className="final-price">₹{discountedPrice}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NormalGameCard;




import React from "react";
import "./NormalGameCard.css";

function NormalGameCard({ game, onAddToCart }) {
  const isFree = !game.price || game.price === 0;

  const discountedPrice = !isFree && game.discount
    ? Math.round(game.price * (1 - game.discount / 100))
    : game.price;

  return (
    <div className="normal-card">
      <div className="image-wrapper">
        <img
          src={game.imgBase64 || "/default-game.png"}
          alt={game.name}
          className="game-imagee"
        />
        {!isFree && (
          <button
            className="add-to-cartt-btnn"
            onClick={() => onAddToCart(game)}
          >
            +
          </button>
        )}
      </div>

      <div className="game-details">
        <h3>{game.name}</h3>

        <div className="price-info">
          {isFree ? (
            <span className="free-label">Free</span>
          ) : (
            <>
              {game.discount && (
                <span className="discountt">-{game.discount}%</span>
              )}
              {game.discount && (
                <span className="original-price">₹{game.price}</span>
              )}
              <span className="final-price">₹{discountedPrice}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NormalGameCard;
