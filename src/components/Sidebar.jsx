import React from "react";
import LinkButton from "./LinkButton";
import { Link, useLocation } from "react-router-dom";
import { getHouseStyle } from "../constants/houseStyles";

const Sidebar = ({ house = "default" }) => {
  const location = useLocation();

  const getCurrentHouse = () => {
    if (house && house !== "default") {
      return house;
    }
    if (location.pathname.includes("/characters/")) {
      return "default";
    }
    return "default";
  };

  const currentHouse = getCurrentHouse();

  const houseStyle = getHouseStyle(currentHouse);

  return (
    <div
      className={`flex flex-col gap-2 w-[270px] h-full px-4 py-5 border-r-2 fixed left-0 top-0 overflow-y-auto ${houseStyle.container}`}
    >
      <Link
        to={"/"}
        className={`mb-2 text-4xl font-heading text-center ${houseStyle.text}`}
      >
        Harry Potter Explorer
      </Link>
      <input
        type="text"
        placeholder="Search characters..."
        className={`w-full mb-2 px-2 py-1 border focus:outline-none focus:ring-2 focus:border-transparent ${houseStyle.input}`}
      />

      <LinkButton to={"/characters"} className="text-xl" house={currentHouse}>
        Characters
      </LinkButton>
      <LinkButton to={"/spells"} className="text-xl" house={currentHouse}>
        Spells
      </LinkButton>
    </div>
  );
};

export default Sidebar;
