import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "./Address.css";

function Address() {
  const navigate = useNavigate();

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "+91 1234567890",
      house: "123",
      landmark: "Near Park",
      street: "MG Road",
      city: "Hyderabad",
      zip: "500001",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);

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
    if (currentAddress.id) {
      setAddresses(
        addresses.map((addr) =>
          addr.id === currentAddress.id ? currentAddress : addr
        )
      );
    } else {
      setAddresses([...addresses, { ...currentAddress, id: Date.now() }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
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
              <p><strong>{addr.name}</strong></p>
              <p>{addr.phone}</p>
              <p>{addr.house}, {addr.landmark}</p>
              <p>{addr.street}, {addr.city} - {addr.zip}</p>
            </div>
            <div className="address-actions">
              <button onClick={() => openModal(addr)} className="edit-btn">Edit</button>
              <button onClick={() => handleDelete(addr.id)} className="delete-btn">
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
                disabled={!isFormValid()}>
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
