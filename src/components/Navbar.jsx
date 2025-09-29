// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { CgGames } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo-name">
        <CgGames className="logo" />
        <p>FEQuest</p>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>

      <ul className={menuOpen ? "show" : ""}>
        <li>
          <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/categories" className={({ isActive }) => (isActive ? "active" : "")}>Categories</NavLink>
        </li>
        <li>
          <NavLink to="/library" className={({ isActive }) => (isActive ? "active" : "")}>Library</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>Cart</NavLink>
        </li>
      </ul>

      <div className="signin">
        <Link to="/login" className="signin-btn">Sign In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
