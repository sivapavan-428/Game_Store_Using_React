import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { MdShoppingCart } from 'react-icons/md';
import { BsCart } from 'react-icons/bs';
import "./Toptool.css";

function Toptool() {
    return (
        <div className="toptool">
            <a href="">
                <div className="cart">
                    <FaCartShopping size={25} color="black" />
                </div>
            </a>
            <Link to="/login">Sign In</Link>
        
        </div>
    );
};

export default Toptool;
