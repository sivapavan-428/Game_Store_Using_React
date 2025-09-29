import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../utils/CartContext";

function Cart() {
  const { cartItems, removeFromCart, purchaseAll } = useContext(CartContext);

  // Price calculations
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const gst = subtotal * 0.18; // 18% GST
  const platformCharges = cartItems.length > 0 ? 5 : 0; // fixed $5 if items exist
  const deliveryCharges = cartItems.length > 0 ? 10 : 0; // fixed $10 if items exist
  const total = subtotal + gst + platformCharges + deliveryCharges;

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-content">

          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="cart-info">
                  <div>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Price Summary</h3>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>GST (18%): ${gst.toFixed(2)}</p>
            <p>Platform Charges: ${platformCharges.toFixed(2)}</p>
            <p>Delivery Charges: ${deliveryCharges.toFixed(2)}</p>
            <hr />
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="buy-btn" onClick={purchaseAll}>
              Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
