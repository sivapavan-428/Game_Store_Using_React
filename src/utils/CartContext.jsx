
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { user, isLoggedIn } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!user) {
      setCartItems([]);
      return;
    }

    fetch(`http://localhost:8081/cart/user/${user.id}`)
      .then((res) => res.json())
      .then((data) => setCartItems(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error("Error fetching cart:", err);
        setCartItems([]);
      });
  }, [user]);

  // const addToCart = async (game) => {
  //   if (!isLoggedIn) return alert("Please login first");

  //   if (cartItems.some((item) => item.game.id === game.id)) {
  //     return alert(`${game.name} is already in the cart`);
  //   }

  //   try {
  //     const res = await fetch(
  //       `http://localhost:8081/cart/add?userId=${user.id}&gameId=${game.id}`,
  //       { method: "POST" }
  //     );

  //     if (!res.ok) {
  //       const errData = await res.json();
  //       throw new Error(errData.message || "Failed to add to cart");
  //     }

  //     const newItem = await res.json();
  //     setCartItems((prev) => (Array.isArray(prev) ? [...prev, newItem] : [newItem]));
  //     alert(`${game.name} added to cart ✅`);
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message || "Failed to add item to cart");
  //   }
  // };

  const addToCart = async (game) => {
  if (!isLoggedIn) return alert("Please login first");
  if (!game || !game.id) return alert("Invalid game object");

  if (cartItems.some((item) => item.gameId === game.id)) {
    return alert(`${game.name} is already in the cart`);
  }

  try {
    const res = await fetch(
      `http://localhost:8081/cart/add?userId=${user.id}&gameId=${game.id}`,
      { method: "POST" }
    );

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.message || "Failed to add to cart");
    }

    const newItem = await res.json();
    const normalizedItem = {
      gameId: newItem.gameId || game.id,
      name: newItem.name || game.name,
      imgBase64: newItem.imgBase64 || game.imgBase64,
      price: newItem.price || game.price,
      discount: newItem.discount || game.discount || 0,
    };

    setCartItems((prev) => (Array.isArray(prev) ? [...prev, normalizedItem] : [normalizedItem]));
    alert(`${game.name} added to cart ✅`);
  } catch (err) {
    console.error(err);
    alert(err.message || "Failed to add item to cart");
  }
};


  // const removeFromCart = async (gameId) => {
  //   if (!isLoggedIn) return alert("Please login first");

  //   try {
  //     const res = await fetch(
  //       `http://localhost:8081/cart/remove?userId=${user.id}&gameId=${gameId}`,
  //       { method: "DELETE" }
  //     );

  //     if (!res.ok) throw new Error("Failed to remove item");

  //     setCartItems((prev) =>
  //       Array.isArray(prev) ? prev.filter((item) => item.game.id !== gameId) : []
  //     );
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message || "Failed to remove item from cart");
  //   }
  // };

  const removeFromCart = async (gameId) => {
  if (!isLoggedIn) return alert("Please login first");

  try {
    const res = await fetch(
      `http://localhost:8081/cart/remove?userId=${user.id}&gameId=${gameId}`,
      { method: "DELETE" }
    );

    if (!res.ok) throw new Error("Failed to remove item");

    setCartItems((prev) =>
      Array.isArray(prev) ? prev.filter((item) => item.gameId !== gameId) : []
    );
  } catch (err) {
    console.error(err);
    alert(err.message || "Failed to remove item from cart");
  }
};


  const clearCart = async () => {
    if (!isLoggedIn) return alert("Please login first");

    try {
      const res = await fetch(`http://localhost:8081/cart/clear/${user.id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to clear cart");

      setCartItems([]);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to clear cart");
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}



