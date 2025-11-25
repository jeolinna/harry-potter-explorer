import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="flex flex-col gap-1 w-[clamp(130px,25vw,240px)] h-[clamp(170px,32vw,314px)] p-2 sm:p-3 lg:p-4 bg-[#281A0F]">
      <div className="h-3/4 bg-gray-200 flex items-center justify-center">
        {character.image ? (
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-contain bg-[#281A0F]"
          />
        ) : (
          <img
            src="/images/wanted.jpg"
            alt="Default character"
            className="w-full h-full object-contain bg-[#281A0F]"
          />
        )}
      </div>

      <h4 className="font-body text-[#FDD42D] text-sm lg:text-base ">
        Name: {character.name}
      </h4>
      <h4 className="font-body text-[#FDD42D] text-sm lg:text-base">
        House: {character.house || "Unknown"}
      </h4>
    </div>
  );
};

export default CharacterCard;
