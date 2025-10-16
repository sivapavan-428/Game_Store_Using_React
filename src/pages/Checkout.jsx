
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Checkout.css";

function Checkout() {
  const { cartItems = [], clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [placingOrder, setPlacingOrder] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => {
    const discountedPrice = item.discount
      ? Math.round(item.price * (1 - item.discount / 100))
      : item.price;
    return sum + discountedPrice;
  }, 0);

  const gst = subtotal * 0.18;
  const platformCharges = cartItems.length > 0 ? 8 : 0;
  const deliveryCharges = cartItems.length > 0 ? 31 : 0;
  const total = subtotal + gst + platformCharges + deliveryCharges;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); 
    if (user && user.id) {
      axios
        .get(`http://localhost:8081/auth/address/user/${user.id}`)
        .then((res) => setAddresses(res.data))
        .catch((err) => console.log("Address API error:", err));
    }
  }, []);

  const handlePlaceOrder = async () => {
    if (!selectedAddressId) {
      alert("Please select an address!");
      return;
    }
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setPlacingOrder(true);

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const payload = {
        userId: user.id,
        addressId: selectedAddressId,
        paymentMethod,
        gameIds: cartItems.map((item) => item.gameId),
        totalAmount: total.toFixed(),
      };

      await axios.post("http://localhost:8081/auth/order/create", payload);

      const library = JSON.parse(localStorage.getItem("library")) || [];
      const newLibrary = [
        ...library,
        ...cartItems.map((item) => ({
          gameId: item.gameId,
          name: item.name,
          imgUrl: item.imgUrl || "/default-game.png", 
        })),
      ];
      localStorage.setItem("library", JSON.stringify(newLibrary));

      clearCart();
      alert("Order placed successfully! ✅");
      navigate("/library");
    } catch (error) {
      console.error(error);
      alert("Failed to place order.");
    }

    setPlacingOrder(false);
  };

  const selectedAddress = addresses.find(a => a.id === selectedAddressId);

  return (
    <div className="checkout-page">
      <button className="back-btn" onClick={() => navigate("/cart")}>
        ← Back to Cart
      </button>

      <h1>Checkout</h1>

      <div className="checkout-section">
        <h2>Address</h2>
        <button
          onClick={() => setShowAddressModal(true)}
          className="select-address-btn"
        >
          {selectedAddress ? "Change Address" : "Select Address"}
        </button>

        {selectedAddress && (
          <div className="selected-address-box">
            <p>{selectedAddress.name}</p>
            <p>
              {selectedAddress.house}, {selectedAddress.street}, {selectedAddress.city}, {selectedAddress.zip}
            </p>
          </div>
        )}
      </div>

      {showAddressModal && (
        <div className="modal-overlay" onClick={() => setShowAddressModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Select Address</h3>
            {addresses.length === 0 ? (
              <p>No saved addresses available.</p>
            ) : (
              <div className="address-options">
                {addresses.map(addr => (
                  <label key={addr.id} className="address-radio">
                    <input
                      type="radio"
                      name="address"
                      value={addr.id}
                      checked={selectedAddressId === addr.id}
                      onChange={() => setSelectedAddressId(addr.id)}
                    />
                    {addr.name}, {addr.house}, {addr.street}, {addr.city}, {addr.zip}
                  </label>
                ))}
              </div>
            )}
            <button
              className="confirm-addresss-btn"
              onClick={() => setShowAddressModal(false)}
              disabled={!selectedAddressId}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      <div className="checkout-section">
        <h2>Payment Method</h2>
        <div className="payment-options">
          {["upi", "cod", "netbanking"].map(method => (
            <label key={method}>
              <input
                type="radio"
                value={method}
                checked={paymentMethod === method}
                onChange={e => setPaymentMethod(e.target.value)}
              />
              {method.toUpperCase()}
            </label>
          ))}
        </div>
      </div>

      <div className="checkout-section">
        <h2>Order Summary</h2>
        {cartItems.map(item => {
          const discountedPrice = item.discount
            ? Math.round(item.price * (1 - item.discount / 100))
            : item.price;
          return (
            <div className="summary-item" key={item.id}>
              <img
                src={item.imgUrl || item``.imgBase64 || "/default-game.png"}
                alt={item.name}
              />
              <div>
                <h4>{item.name}</h4>
                <p>
                  {item.discount ? (
                    <>
                      <span className="original">{item.price}₹</span>
                      <span className="discounted">{discountedPrice}₹</span>
                    </>
                  ) : (
                    <span className="discounted">{item.price}₹</span>
                  )}
                </p>
              </div>
            </div>
          );
        })}
        <hr />
        <div className="total-row">
          <strong>Total: {total.toFixed()}₹</strong>
        </div>
      </div>

      <button
        className="place-order-btn"
        onClick={handlePlaceOrder}
        disabled={placingOrder}
      >
        {placingOrder ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
}

export default Checkout;
