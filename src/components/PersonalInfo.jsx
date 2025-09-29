import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function PersonalInfo() {
  const navigate = useNavigate();
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("+91 1234567890");

  const handleSave = () => {
    alert("Details saved (for now)");
    navigate("/profile");
  };

  return (
    <div className="profile-page">
      <h1>Edit Personal Information</h1>
      <div className="form-group">
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button onClick={handleSave} className="save-btn">Save</button>
    </div>
  );
}

export default PersonalInfo;
