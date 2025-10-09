import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../utils/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const gst = subtotal * 0.18;
  const platformCharges = cartItems.length > 0 ? 8 : 0;
  const deliveryCharges = cartItems.length > 0 ? 31 : 0;
  const total = subtotal + gst + platformCharges + deliveryCharges;

  return (
    <div className="cart-page">
      {cartItems.length === 0 ? (
        <p className="empty-cart">🛒 Your cart is empty</p>
      ) : (
        <div className="cart-content">

          <div className="cart-items-border">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-card" key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <div className="cart-info">
                    <div className="cart-details">
                      <h3>{item.name}</h3>
                      <p>Awesome game for your library</p>
                    </div>
                    <div className="cart-actions">
                      <span className="price">{item.price}.Rs</span>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <h3>Price Summary</h3>
            <div className="summary-details">
              <p>Subtotal <span>{subtotal.toFixed()}.Rs</span></p>
              <p>GST (18%) <span>{gst.toFixed()}.Rs</span></p>
              <p>Platform Charges <span>{platformCharges}.Rs</span></p>
              <p>Delivery Charges <span>{deliveryCharges}.Rs</span></p>
            </div>
            <hr />
            <h2 className="total">Total: {total.toFixed()}.Rs</h2>
            <button
              className="cart-buy-btn"
              onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
