// src/pages/Categories.jsx
import React from "react";
import "./Categories.css";

const categories = [
  { id: 1, name: "Action", img: "https://via.placeholder.com/150" },
  { id: 2, name: "RPG", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Adventure", img: "https://via.placeholder.com/150" },
  { id: 4, name: "Strategy", img: "https://via.placeholder.com/150" },
];

function Categories() {
  return (
    <div className="categories-page">
      <h1>Game Categories</h1>
      <div className="categories-list">
        {categories.map((cat) => (
          <div className="category-card" key={cat.id}>
            <img src={cat.img} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
