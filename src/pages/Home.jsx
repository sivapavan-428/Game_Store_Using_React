
import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import TrendingGameCard from "./TrendingGamecard.jsx"
import NormalGameCard from "./NormalGameCard.jsx";
import { CartContext } from "../utils/CartContext";
import "./Home.css";

const sectionTitles = {
  TRENDING: "🔥 Trending Games",
  NEW_RELEASES: "🆕 New Releases",
  TOP_RATED: "⭐ Top Rated",
  FEATURED: "✨ Featured Games",
  FREE: "🎮 Free Games",
};

const allowedSections = Object.keys(sectionTitles);

function Home() {
  const [games, setGames] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:8081/auth/api/games/getAll")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error fetching games:", err));
  }, []);

  const trendingGames = games.filter((g) => g.sectionKey === "TRENDING");
  const freeGames = games.filter((g) => g.sectionKey === "FREE");
  const featuredGames = games.filter((g) => g.sectionKey === "FEATURED");

  const otherSections = allowedSections
    .filter((key) => !["TRENDING", "FREE", "FEATURED"].includes(key))
    .reduce((acc, key) => {
      const sectionGames = games.filter((g) => g.sectionKey === key);
      if (sectionGames.length > 0) acc[key] = sectionGames;
      return acc;
    }, {});

  const trendingSlider = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="home-page">

      {trendingGames.length > 0 && (
        <div className="trending-section">
          <h2>{sectionTitles.TRENDING}</h2>
          <Slider {...trendingSlider}>
            {trendingGames.map((game) => (
              <TrendingGameCard
                key={game.id}
                game={game}
                onAddToCart={addToCart}
              />
            ))}
          </Slider>
        </div>
      )}

      {featuredGames.length > 0 && (
        <div className="game-section">
          <h2>{sectionTitles.FEATURED}</h2>
          <div className="manual-scroll-container">
            {featuredGames.map((game) => (
              <NormalGameCard
                key={game.id}
                game={game}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )}

      {Object.entries(otherSections).map(([key, sectionGames]) => (
        <div key={key} className="game-section">
          <h2>{sectionTitles[key]}</h2>
          <div className="manual-scroll-container">
            {sectionGames.map((game) => (
              <NormalGameCard
                key={game.id}
                game={game}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      ))}

      {freeGames.length > 0 && (
        <div className="game-section">
          <h2>{sectionTitles.FREE}</h2>
          <div className="manual-scroll-container">
            {freeGames.map((game) => (
              <NormalGameCard
                key={game.id}
                game={game}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
