import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import "./Toptool.css";
import { CartContext } from "../utils/CartContext";
import { AuthContext } from "../utils/AuthContext"; 

function Toptool() {
  const { cartItems } = useContext(CartContext);
  const { isLoggedIn, login, logout } = useContext(AuthContext); 
  return (
    <div className="toptool">
      <div className="search-container">
        <FaMagnifyingGlass className="search-iconn" />
        <input
          type="search"
          name="SearchBTN"
          id="searchbtn"
          placeholder="Search games..."
        />
      </div>

      <Link to="/cart">
        <div className="cart">
          <FaCartShopping size={25} />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </div>
      </Link>

      <div className="auth">
        {isLoggedIn ? (
          <Link to="/profile" className="profile-icon">
            <CgProfile size={25} />
          </Link>
        ) : (
          <button className="signin-btnn">
            <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
              Sign In
            </Link>
          </button>
        )}
      </div>
    </div>
  );
}

export default Toptool;
