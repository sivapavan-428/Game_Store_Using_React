import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { CgProfile } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      {/* Back arrow */}
      <button className="back-arrow" onClick={() => navigate("/home")}>
        <FaArrowLeft size={20} />
      </button>

      <h1>Profile</h1>

      <div className="profile-sectionn">
        <CgProfile className="profile-pic" size={150} color="white" />
        <div className="details">
          <p className="name">John Doe</p>
          <p className="email">john@example.com</p>
          <Link to="/profile/personal" className="edit-btn">Edit</Link>
        </div>
      </div>

      <div className="remaining-details">
        <div className="profile-section">
          <Link to="/profile/address" className="view-btn">Address</Link>
        </div>

        <div className="profile-section">
          <Link to="/profile/orders" className="view-btn">View Orders</Link>
        </div>

        <div className="profile-section">
          <Link to="/profile/settings" className="view-btn">Go to Settings</Link>
        </div>

        <div className="profile-section">
          <Link to="/profile/security" className="view-btn">Manage Security</Link>
        </div>

        <div className="profile-section logout-section">
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
