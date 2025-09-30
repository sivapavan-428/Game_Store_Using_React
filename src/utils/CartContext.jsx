import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [purchasedGames, setPurchasedGames] = useState([]); // NEW

  const addToCart = (game) => {
    if (!cartItems.find((item) => item.id === game.id)) {
      setCartItems([...cartItems, game]);
    } else {
      alert(`${game.name} is already in your cart.`);
    }
  };

  const removeFromCart = (gameId) => {
    setCartItems(cartItems.filter((item) => item.id !== gameId));
  };

  const purchaseAll = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty.");
      return;
    }

    // Add items to purchasedGames
    setPurchasedGames([...purchasedGames, ...cartItems]);

    alert(
      "Purchase successful! You bought: " + cartItems.map((g) => g.name).join(", ")
    );

    setCartItems([]); // empty cart after purchase
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, purchaseAll, purchasedGames }}
    >
      {children}
    </CartContext.Provider>
  );
};
