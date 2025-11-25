const BASE_URL = "https://hp-api.onrender.com/api";

export async function fetchCharacters() {
  const res = await fetch(`${BASE_URL}/characters`);

  if (!res.ok) {
    throw new Error("Failed to load characters");
  }

  return res.json();
}

export function getCharacterById(characters, id) {
  return characters.find((character) => character.id === id);
}
