import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../utils/CartContext";
import { useNavigate } from "react-router-dom";


function Cart() {
  const { cartItems, removeFromCart, purchaseAll } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const gst = subtotal * 0.18;
  const platformCharges = cartItems.length > 0 ? 8 : 0;
  const deliveryCharges = cartItems.length > 0 ? 31 : 0;
  const total = subtotal + gst + platformCharges + deliveryCharges;

  return (
    <div className="cart-page">
      {/* <h1>Shopping Cart</h1> */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items-border">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-card" key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <div className="cart-info">
                    {/* Left side: details */}
                    <div className="cart-details">
                      <h3>{item.name}</h3>
                      <p>Awesome game for your library</p>
                    </div>

                    {/* Right side: price + button */}
                    <div className="cart-actions">
                      <p>{item.price}.Rs</p>
                      <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <h3>Price Summary</h3>
            <p>Subtotal: {subtotal.toFixed()}.Rs</p>
            <p>GST (18%): {gst.toFixed()}.Rs</p>
            <p>Platform Charges: {platformCharges.toFixed()}.Rs</p>
            <p>Delivery Charges: {deliveryCharges.toFixed()}.Rs</p>
            <hr />
            <h3>Total: {total.toFixed()}.Rs</h3>
            <button
              className="buy-btn"
              onClick={() => navigate("/checkout")}>
              Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
