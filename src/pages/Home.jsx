import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Home.css";
import GameCard from "./GameCard";

// Backend keys → frontend section names
const sectionTitles = {
  TRENDING: "🔥 Trending Games",
  NEW_RELEASES: "🆕 New Releases",
  TOP_RATED: "⭐ Top Rated",
  FREE: "🎮 Free Games",
};

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/games/all")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error fetching games:", err));
  }, []);

  if (!games || games.length === 0) {
    return (
      <div className="no-games">
        <h2>🚫 No games available at the moment. Please check back later!</h2>
      </div>
    );
  }

  // Group games by sectionKey
  const groupedGames = games.reduce((acc, game) => {
    if (!acc[game.sectionKey]) acc[game.sectionKey] = [];
    acc[game.sectionKey].push(game);
    return acc;
  }, {});

  // Separate trending
  const trendingGames = groupedGames["TRENDING"] || [];
  const otherSections = Object.entries(groupedGames).filter(
    ([key]) => key !== "TRENDING"
  );

  const trendingSlider = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  const sectionSlider = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="home-page">
      {/* TRENDING */}
      {trendingGames.length > 0 && (
        <div className="trending-section">
          <h2>{sectionTitles["TRENDING"]}</h2>
          <Slider {...trendingSlider}>
            {trendingGames.map((game) => (
              <GameCard key={game.id} game={game} large={true} />
            ))}
          </Slider>
        </div>
      )}

      {/* OTHER SECTIONS */}
      {otherSections.map(([sectionKey, sectionGames]) => (
        <div className="game-section" key={sectionKey}>
          <h2>{sectionTitles[sectionKey] || sectionKey}</h2>
          <Slider {...sectionSlider}>
            {sectionGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
}

export default Home;
