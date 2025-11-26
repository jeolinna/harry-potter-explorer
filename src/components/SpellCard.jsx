import React from "react";

const SpellCard = ({ spell }) => {
  return (
    <div className="bg-[#281A0F] border-2 border-[#3c2718] rounded-lg py-2 px-4">
      <h3 className="text-xl lg:text-2xl font-body text-[#FDD42D] mb-1">
        {spell.name}
      </h3>
      <p className="text-white text-lg lg:text-xl font-body mb-1">
        {spell.description}
      </p>
    </div>
  );
};

export default SpellCard;
