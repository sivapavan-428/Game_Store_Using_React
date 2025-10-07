import React, { useContext, useState } from "react";
import {Link, NavLink } from "react-router-dom";
import { CgGames } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { CartContext } from "../utils/CartContext";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
    closeMenu();
  };

  return (
    <>
      <aside className="sidebar desktop-sidebar">
        <div className="logo-name">
          <CgGames className="logo" />
          <p>FEQuest</p>
        </div>

        <div className="search-containerr">
          {/* <FaMagnifyingGlass className="search-iconn" /> */}
          <input
            type="search"
            name="SearchBTN"
            id="searchbtn"
            placeholder="Search games..." />
        </div>

        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={closeMenu}>
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/library"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={closeMenu}>
              Library
            </NavLink>
          </li>
        </ul>

        <div className="auth-btn">
          {isLoggedIn ? (
            <button className="profile-btn" onClick={handleAuth}><FiUser /> Profile</button>
          ) : (
            <button className="signin-btn" onClick={handleAuth}><FiUser /> Login</button>
          )}
        </div>
      </aside>

      <div className="topbar mobile-topbar">
        <div className="logo-name">
          <CgGames className="logo" />
          <p>FEQuest</p>
        </div>

        <div className="right-actions">
          <Link to="/cart">
            <div className="cart">
              <FaCartShopping size={25} />
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </div>
          </Link>
          <GiHamburgerMenu className="hamburger" onClick={toggleMenu} />
        </div>
      </div>

      <aside className={`sidebar mobile-drawer ${menuOpen ? "open" : ""}`}>

        <div className="logo-name">
          <CgGames className="logo" />
          <p>FEQuest</p>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search games..." />
        </div>

        <ul>
          <li><NavLink to="/home" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/categories" onClick={closeMenu}>Categories</NavLink></li>
          <li><NavLink to="/library" onClick={closeMenu}>Library</NavLink></li>
        </ul>

        <div className="auth-btn">
          {isLoggedIn ? (
            <button className="profile-btn" onClick={handleAuth}><FiUser /> Profile</button>
          ) : (
            <button className="signin-btn" onClick={handleAuth}><FiUser /> Login</button>
          )}
        </div>
      </aside>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;
