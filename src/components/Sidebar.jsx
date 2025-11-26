import React from "react";
import LinkButton from "./LinkButton";
import { Link, useLocation } from "react-router-dom";
import { getHouseStyle } from "../constants/houseStyles";
import SearchBar from "./SearchBar";
import { X } from "lucide-react";

const Sidebar = ({ house = "default", open, onClose }) => {
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
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`flex flex-col gap-2 w-full lg:w-[270px] px-4  h-full  py-5 lg:border-r-2 fixed left-0 top-0 transition-transform duration-300 z-50 ${
          houseStyle.container
        } ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:z-auto`}
      >
        <button
          onClick={onClose}
          className={`self-end lg:hidden ${houseStyle.text} mb-2`}
        >
          <X size={24} />
        </button>

        <Link
          to={"/"}
          className={`mb-2 text-4xl font-heading text-center ${houseStyle.text}`}
          onClick={() => window.innerWidth < 1024 && onClose()}
        >
          Harry Potter Explorer
        </Link>

        <SearchBar houseStyle={houseStyle} />

        <LinkButton
          to={"/characters"}
          className="text-xl"
          house={currentHouse}
          onClick={() => window.innerWidth < 1024 && onClose()}
        >
          Characters
        </LinkButton>
        <LinkButton
          to={"/spells"}
          className="text-xl"
          house={currentHouse}
          onClick={() => window.innerWidth < 1024 && onClose()}
        >
          Spells
        </LinkButton>
      </div>
    </>
  );
};

export default Sidebar;
