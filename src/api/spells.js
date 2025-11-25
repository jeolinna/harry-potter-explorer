const BASE_URL = "https://hp-api.onrender.com/api";

export async function fetchSpells() {
  const res = await fetch(`${BASE_URL}/spells`);

  if (!res.ok) {
    throw new Error("Failed to load spells");
  }

  return res.json();
}
