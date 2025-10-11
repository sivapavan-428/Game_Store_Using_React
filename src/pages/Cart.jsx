import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../utils/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

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

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      {cartItems.length === 0 ? (
        <p className="empty-cart">🛒 Your cart is empty</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item) => {
              const discountedPrice = item.discount
                ? Math.round(item.price * (1 - item.discount / 100))
                : item.price;
              return (
                <div className="cart-item" key={item.id}>
                  <img
                    src={item.imgBase64 || "/default-game.png"}
                    alt={item.name}
                  />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>Awesome game for your collection</p>
                  </div>
                  <div className="item-price">
                    {item.discount ? (
                      <div className="price-block">
                        <span className="original">{item.price}₹</span>
                        <span className="discounted">{discountedPrice}₹</span>
                      </div>
                    ) : (
                      <span className="discounted">{item.price}₹</span>
                    )}
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{subtotal.toFixed()}₹</span>
            </div>
            <div className="summary-row">
              <span>GST (18%)</span>
              <span>{gst.toFixed()}₹</span>
            </div>
            <div className="summary-row">
              <span>Platform Charges</span>
              <span>{platformCharges}₹</span>
            </div>
            <div className="summary-row">
              <span>Delivery Charges</span>
              <span>{deliveryCharges}₹</span>
            </div>
            <hr />
            <div className="summary-row total">
              <strong>Total</strong>
              <strong>{total.toFixed()}₹</strong>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
