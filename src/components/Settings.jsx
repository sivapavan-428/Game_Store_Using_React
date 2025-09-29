import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Settings() {
  const navigate = useNavigate();
  return (
    <div className="profile-page">
      <h1>Settings</h1>
      <p>Notification Preferences</p>
      <p>Theme: Dark</p>
      <button onClick={() => navigate(-1)} className="back-btn">Back</button>
    </div>
  );
}

export default Settings;
