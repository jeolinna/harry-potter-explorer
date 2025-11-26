import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <div className="w-[clamp(130px,25vw,240px)] h-[clamp(170px,32vw,314px)] p-2 sm:p-3 lg:p-4 bg-[#281A0F] border-2 border-[#3c2718] transition-transform duration-300 hover:scale-105">
      <div className="h-[70%] sm:h-[75%] bg-gray-200 flex items-center justify-center">
        {character.image ? (
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover object-[center_0] bg-[#281A0F]"
          />
        ) : (
          <img
            src="/images/wanted.jpg"
            alt={character.name}
            className="w-full h-full object-contain object-[center_0] bg-[#281A0F]"
          />
        )}
      </div>

      <div className="h-1/4 flex flex-col justify-center gap-1 min-h-[60px]">
        <Link
          to={`/characters/${character.id}`}
          className="font-body text-[#FDD42D] text-xs sm:text-sm lg:text-base truncate cursor-pointer"
          title={character.name}
        >
          Name: {character.name}
        </Link>
        <h4
          className="font-body text-[#FDD42D] text-xs sm:text-sm lg:text-base truncate"
          title={character.house || "Unknown"}
        >
          House: {character.house || "Unknown"}
        </h4>
      </div>
    </div>
  );
};

export default CharacterCard;
