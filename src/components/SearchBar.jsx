import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCharacters } from "../api/characters";

const SearchBar = ({ houseStyle }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (term) => {
    if (term.length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    try {
      const characters = await fetchCharacters();

      const filteredCharacters = characters.filter((char) =>
        char.name.toLowerCase().includes(term.toLowerCase())
      );

      setSearchResults(filteredCharacters.slice(0, 5));
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleCharacterClick = (characterId) => {
    navigate(`/characters/${characterId}`);
    clearSearch();
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search characters..."
          className={`w-full mb-2 px-2 py-1 border placeholder:font-body font-body focus:outline-none focus:ring-2 focus:border-transparent ${houseStyle.input}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {isSearching && (
          <div
            className={`absolute right-2 top-2 w-4 h-4 border-2 ${houseStyle.border} border-t-transparent rounded-full animate-spin`}
          ></div>
        )}
      </div>

      {searchResults.length > 0 && (
        <div
          className={`absolute top-full left-0 right-0 ${houseStyle.background} border ${houseStyle.border} shadow-lg z-50 max-h-60 overflow-y-auto`}
        >
          <div className={`p-2`}>
            <h3
              className={`font-body font-semibold ${houseStyle.text} mb-2 text-sm`}
            >
              Characters ({searchResults.length})
            </h3>
            {searchResults.map((char) => (
              <button
                key={char.id}
                onClick={() => handleCharacterClick(char.id)}
                className={`block w-full text-left font-body py-1 px-2 text-sm ${houseStyle.text} hover:underline mb-1 rounded hover:bg-opacity-50 transition-colors`}
              >
                {char.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
