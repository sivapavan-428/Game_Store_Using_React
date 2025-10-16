
import React, { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import { CartContext } from "../utils/CartContext";
import { useNavigate } from "react-router-dom";
import "./NormalGameCard.css";

function NormalGameCard({ game }) {
  const { user } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const isFree = game.price === 0;
  const discountedPrice =
    !isFree && game.discount
      ? Math.round(game.price * (1 - game.discount / 100))
      : game.price;

  const handleAddToCart = () => {
    if (!user) {
      setShowLoginPopup(true);
      return;
    }
    addToCart(game);
  };

  return (
    <>
      <div className="normal-card">
        <div className="image-wrapper">
          <img
            src={game.imgUrl || game.imgBase64 || "/default-game.png"}
            alt={game.name}
            className="game-imagee"
          />
          <div className="badges">
            {isFree && <span className="badge free-badge">Free</span>}
            {game.discount > 0 && !isFree && (
              <span className="badge discount-badge">-{game.discount}%</span>
            )}
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            +
          </button>
        </div>
        <div className="game-details">
          <h3>{game.name}</h3>
          {!isFree && (
            <div className="price-info">
              {game.discount > 0 && (
                <span className="original-price">₹{game.price}</span>
              )}
              <span className="final-price">₹{discountedPrice}</span>
            </div>
          )}
        </div>
      </div>

      {showLoginPopup && (
        <div className="login-popup-overlay">
          <div className="login-popup-card">
            <h2>Login Required</h2>
            <p>You must login first to add this game to your cart.</p>
            <div className="login-popup-actions">
              <button
                onClick={() => setShowLoginPopup(false)}
                className="btn cancel"
              >
                Cancel
              </button>
              <button
                onClick={() => navigate("/login")}
                className="btn login"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NormalGameCard;
