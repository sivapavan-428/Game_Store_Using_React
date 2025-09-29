import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Orders() {
  const navigate = useNavigate();
  return (
    <div className="profile-page">
      <h1>Orders</h1>
      <p>No orders yet.</p>
      <button onClick={() => navigate(-1)} className="back-btn">Back</button>
    </div>
  );
}

export default Orders;
