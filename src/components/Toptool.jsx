import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6"; // added search icon
import "./Toptool.css";
import { CartContext } from "../utils/CartContext";
import { CgProfile } from "react-icons/cg";

function Toptool() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="toptool">
      <div className="search-container">
        <FaMagnifyingGlass className="search-icon" />
        <input
          type="search"
          name="SearchBTN"
          id="searchbtn"
          placeholder="Search games..." />
      </div>

      <Link to="/cart">
        <div className="cart">
          <FaCartShopping size={25} color="white" />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>
      </Link>

      <div className="profile">
        <Link to="/profile">
        <CgProfile />
        </Link>
      </div>
    </div>
  );
}

export default Toptool;

