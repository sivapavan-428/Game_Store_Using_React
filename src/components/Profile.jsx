import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { CgProfile } from "react-icons/cg";
import {
  FaArrowLeft,
  FaBoxOpen,
  FaHeart,
  FaGift,
  FaCog,
  FaShieldAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

function Profile() {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  },[navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setShowLogout(false);
    navigate("/login");
  };

  return (
    <div className="profile-page">
      
      <div className="back-button">
        <button className="back-arrow" onClick={() => navigate("/home")}>
          <FaArrowLeft size={18} />
        </button>
        <h1>My Profile</h1>
      </div>

      <div className="profile-header">
        <CgProfile className="profile-pic" size={120} />
        <div className="details">
          <p className="name">{user.firstName} { user.lastName}</p>
          <p className="email">{user.email}</p>
          <Link to="/profile/personal" className="edit-btn">Edit Profile</Link>
        </div>
      </div>

      <div className="quick-stats">
        <div className="stat-card">
          <FaBoxOpen />
          <p>12 Orders</p>
        </div>
        <div className="stat-card">
          <FaHeart />
          <p>5 Wishlist</p>
        </div>
        <div className="stat-card">
          <FaGift />
          <p>2 Rewards</p>
        </div>
      </div>

      <div className="remaining-details">
        <div className="profile-section">
          <FaMapMarkerAlt className="section-icon" />
          <Link to="/profile/address" className="view-btn">My Address</Link>
        </div>

        <div className="profile-section">
          <FaBoxOpen className="section-icon" />
          <Link to="/profile/orders" className="view-btn">My Orders</Link>
        </div>

        <div className="profile-section">
          <FaCog className="section-icon" />
          <Link to="/profile/settings" className="view-btn">Settings</Link>
        </div>

        <div className="profile-section">
          <FaShieldAlt className="section-icon" />
          <Link to="/profile/security" className="view-btn">Security</Link>
        </div>

        <div className="profile-section logout-section">
          <button className="logout-btn" onClick={() => setShowLogout(true)}>
            Logout
          </button>
        </div>
      </div>

      {showLogout && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout?</p>
            <div className="modal-actions">
              <button onClick={() => setShowLogout(false)} className="cancel-btn">Cancel</button>
              <button onClick={handleLogout} className="confirm-btn">Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
