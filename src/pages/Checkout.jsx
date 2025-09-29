import React, { useState } from "react";
import "./Checkout.css";

function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!paymentMethod) {
            alert("Please select a payment method.");
            return;
        }
        alert(`Payment successful with ${paymentMethod}`);
    };

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>

            <form onSubmit={handleSubmit} className="checkout-form">
                <h3>Select Payment Method:</h3>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="UPI"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        UPI
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="Net Banking"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Net Banking
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="Cash on Delivery"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Cash on Delivery
                    </label>
                </div>

                <button type="submit" className="pay-btn">
                    Confirm Payment
                </button>
            </form>
        </div>
    );
}

export default Checkout;
