
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgGames, CgProfile } from "react-icons/cg";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { CartContext } from "../utils/CartContext";
import { AuthContext } from "../utils/AuthContext";
import "./Toptool.css";

function Toptool() {
  const { cartItems = [] } = useContext(CartContext); 
  const { isLoggedIn } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const cartCount = cartItems.length; 

  return (
    <>
      <nav className="toptool-desktop">
        <div className="logo-name">
          <CgGames size={45} className="logo" />
          <span>FEQuest</span>
        </div>

        <div className="nav-links">
          <ul>
            <li><NavLink to="/home" className="nav-link">Home</NavLink></li>
            <li><NavLink to="/categories" className="nav-link">Categories</NavLink></li>
            <li><NavLink to="/library" className="nav-link">Library</NavLink></li>
          </ul>
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search games..." />
        </div>

        <div>
          <Link to="/cart" className="cart">
            <FaCartShopping size={20} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>

          {isLoggedIn ? (
            <Link to="/profile" className="profile-btn">
              <CgProfile size={30} className="me-1" />
            </Link>
          ) : (
            <Link to="/login" className="auth-btn loginn-btn">
              Sign In
            </Link>
          )}
        </div>
      </nav>

      <nav className="toptool-mobile">
        <div className="logo-name">
          <CgGames size={30} className="logo" />
          <span>FEQuest</span>
        </div>

        <div className="right-actions">
          <Link to="/cart" className="cart">
            <FaCartShopping size={20} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <GiHamburgerMenu size={20} onClick={toggleMenu} className="hamburger" />
        </div>
      </nav>

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="logo-name">
            <CgGames size={30} className="logo" />
            <span>FEQuest</span>
          </div>
          <button className="close-btn" onClick={closeMenu}>×</button>
        </div>

        <ul className="nav-links">
          <li><NavLink to="/home" className="nav-link" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/categories" className="nav-link" onClick={closeMenu}>Categories</NavLink></li>
          <li><NavLink to="/library" className="nav-link" onClick={closeMenu}>Library</NavLink></li>
        </ul>

        <div className="search-container">
          {/* <FaMagnifyingGlass className="search-icon" /> */}
          <input type="text" placeholder="Search games..." />
        </div>

        {isLoggedIn ? (
          <Link to="/profile" className="auth-btn drawer-btn" onClick={closeMenu}>
            <CgProfile size={20} className="me-1" /> Profile
          </Link>
        ) : (
          <Link to="/login" className="auth-btn drawer-btn" onClick={closeMenu}>
            Sign In
          </Link>
        )}
      </div>

      {menuOpen && <div className="drawer-overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Toptool;
