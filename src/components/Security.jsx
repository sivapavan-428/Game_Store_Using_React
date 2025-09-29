import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Security() {
  const navigate = useNavigate();
  return (
    <div className="profile-page">
      <h1>Security</h1>
      <p>Change Password</p>
      <p>Two-factor Authentication</p>
      <button onClick={() => navigate(-1)} className="back-btn">Back</button>
    </div>
  );
}

export default Security;
