import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import "./Home.css";
import TrendingGameCard from "./TrendingGamecard.jsx"
import NormalGameCard from "./NormalGameCard.jsx";
import { CartContext } from "../utils/CartContext";

const sectionTitles = {
  NEW_RELEASES: "🆕 New Releases",
  TOP_RATED: "⭐ Top Rated",
  FREE: "🎮 Free Games",
};

function Home() {
  const [games, setGames] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:8081/api/games/all")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error fetching games:", err));
  }, []);

  const trendingGames = games.filter((g) => g.sectionKey === "TRENDING");
  const groupedOthers = games
    .filter((g) => g.sectionKey !== "TRENDING")
    .reduce((acc, g) => {
      acc[g.sectionKey] = acc[g.sectionKey] || [];
      acc[g.sectionKey].push(g);
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

  // const sectionSlider = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   responsive: [
  //     { breakpoint: 1200, settings: { slidesToShow: 3 } },
  //     { breakpoint: 900, settings: { slidesToShow: 2 } },
  //     { breakpoint: 600, settings: { slidesToShow: 1 } },
  //   ],
  // };

  return (
    <div className="home-page">
      {trendingGames.length > 0 && (
        <div className="trending-section">
          <h2>🔥 Trending Games</h2>
          <div className="trending-wrapper">
            <Slider {...trendingSlider}>
            {trendingGames.map((g) => (
              <TrendingGameCard key={g.id} game={g} onAddToCart={addToCart}/>
            ))}
          </Slider>

          </div>
          
        </div>
      )}

      
      {["NEW_RELEASES", "TOP_RATED", "FREE"].map(
        (sectionKey) =>
          groupedOthers[sectionKey] && (
            <div key={sectionKey} className="game-section">
              <h2>{sectionTitles[sectionKey]}</h2>
              <div className="manual-scroll-container">
                {groupedOthers[sectionKey].map((g) => (
                  <NormalGameCard key={g.id} game={g} onAddToCart={addToCart}/>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default Home;
