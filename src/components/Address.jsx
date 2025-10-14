
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../utils/AuthContext"; 
import "./Address.css";

function Address() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); 

  const [addresses, setAddresses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);

  useEffect(() => {
    if (user?.id) {
      axios
        .get(`http://localhost:8081/address/user/${user.id}`)
        .then((res) => setAddresses(res.data))
        .catch((err) => console.error("Failed to fetch addresses:", err));
    }
  }, [user]);

  const openModal = (address = null) => {
    setCurrentAddress(address || {});
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentAddress(null);
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentAddress({ ...currentAddress, [name]: value });
  };

  const handleSave = () => {
    if (!user?.id) return alert("User not logged in");

    const apiCall = currentAddress.id
      ? axios.put(
          `http://localhost:8081/address/update/${currentAddress.id}`,
          currentAddress
        )
      : axios.post(
          `http://localhost:8081/address/add/${user.id}`,
          currentAddress
        );

    apiCall
      .then((res) => {
        if (currentAddress.id) {
          setAddresses(
            addresses.map((addr) =>
              addr.id === res.data.id ? res.data : addr
            )
          );
        } else {
          setAddresses([...addresses, res.data]);
        }
        closeModal();
      })
      .catch((err) => {
        console.error("Failed to save address:", err);
        alert("Failed to save address");
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8081/address/delete/${id}`)
      .then(() =>
        setAddresses(addresses.filter((addr) => addr.id !== id))
      )
      .catch((err) => console.error("Failed to delete address:", err));
  };

  const isFormValid = () => {
    if (!currentAddress) return false;
    return (
      currentAddress.name &&
      currentAddress.phone &&
      currentAddress.house &&
      currentAddress.landmark &&
      currentAddress.street &&
      currentAddress.city &&
      currentAddress.zip
    );
  };

  return (
    <div className="address-page">
      <h1>Saved Addresses</h1>

      <div className="address-list">
        {addresses.map((addr) => (
          <div key={addr.id} className="address-box">
            <div className="address-info">
              <p>
                <strong>{addr.name}</strong>
              </p>
              <p>{addr.phone}</p>
              <p>
                {addr.house}, {addr.landmark}
              </p>
              <p>
                {addr.street}, {addr.city} - {addr.zip}
              </p>
            </div>
            <div className="address-actions">
              <button onClick={() => openModal(addr)} className="edit-btn">
                Edit
              </button>
              <button
                onClick={() => handleDelete(addr.id)}
                className="delete-btn"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="add-address-btn" onClick={() => openModal({})}>
        Add Address
      </button>
      <button onClick={() => navigate(-1)} className="back-btn">
        Back
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{currentAddress.id ? "Edit Address" : "Add Address"}</h2>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={currentAddress.name || ""}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={currentAddress.phone || ""}
                onChange={handleChange}
              />
              <input
                type="text"
                name="house"
                placeholder="House No"
                value={currentAddress.house || ""}
                onChange={handleChange}
              />
              <input
                type="text"
                name="landmark"
                placeholder="Landmark"
                value={currentAddress.landmark || ""}
                onChange={handleChange}
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={currentAddress.street || ""}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={currentAddress.city || ""}
                onChange={handleChange}
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={currentAddress.zip || ""}
                onChange={handleChange}
              />
            </form>
            <div className="modal-buttons">
              <button
                onClick={handleSave}
                className="save-btn"
                disabled={!isFormValid()}
              >
                Save
              </button>
              <button onClick={closeModal} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Address;
