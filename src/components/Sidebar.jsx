import React from "react";
import LinkButton from "./LinkButton";
import { Link, useLocation } from "react-router-dom";
import { getHouseStyle } from "../constants/houseStyles";
import SearchBar from "./SearchBar";

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

      <SearchBar houseStyle={houseStyle} />

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
