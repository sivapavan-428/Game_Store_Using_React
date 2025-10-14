// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const GameList = () => {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8081/games/getAll") 
//       .then(res => setGames(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1>All Games</h1>
//       {games.map(game => (
//         <div key={game.id}>
//           <h2>{game.name}</h2>
//           <p>{game.description}</p>
//           <p>Price: ${game.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GameList;
