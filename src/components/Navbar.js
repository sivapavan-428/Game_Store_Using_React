import { Link, NavLink } from "react-router-dom";
import React from "react";
import { CgGames} from "react-icons/cg";
import {FaxTwitter} from "react-icons/fa6"
import "./Navbar.css";
import { FashoppingCart, FaHeart, FaUser } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-name">
                <CgGames className="logo" />
                <p>FEQuest</p>
            </div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/catagories">Catagories</Link></li>
                <li><Link to="/library">My Library</Link></li>
                <li><Link to="/cart">cart</Link></li>
            </ul>
            <ul>
                
            </ul>


        </nav>
    );
};

export default Navbar;