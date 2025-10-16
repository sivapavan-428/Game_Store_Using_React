
export const uploadImage = async (gameId, file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`http://localhost:8081/auth/api/games/uploadImage/${gameId}`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message || "Failed to upload image");
  }

  const updatedGame = await res.json();
  return updatedGame;
};
export const getAllGames = async () => {
  const res = await fetch("http://localhost:8081/auth/api/games/getAll");
  return res.json();
};

export const getGamesByGenre = async (genre) => {
  const res = await fetch(`http://localhost:8081/auth/api/games/getByGenre/${genre}`);
  return res.json();
};