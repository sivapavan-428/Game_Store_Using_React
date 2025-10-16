
import React, { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import { CartContext } from "../utils/CartContext";
import { useNavigate } from "react-router-dom";
import "./TrendingGameCard.css";

function TrendingGameCard({ game }) {
  const { user } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleAdd = () => {
    if (!user) {
      setShowLoginPopup(true);
      return;
    }
    addToCart(game);
  };

  return (
    <div className="trending-card">
      <img
        src={game.imgUrl || game.imgBase64 || "/default-game.png"}
        alt={game.name}
        className="game-image"
      />
      <div className="game-info-overlay">
        <h3>{game.name}</h3>
        <p className="price">₹{game.price}</p>
        <button className="buy-btn trending-btn" onClick={handleAdd}>
          Buy Now
        </button>
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
    </div>
  );
}

export default TrendingGameCard;
