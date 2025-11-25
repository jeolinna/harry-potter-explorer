import React from "react";
import LinkButton from "./LinkButton";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 w-[270px] h-full px-4 py-5 bg-[#281A0F] border-r-2 border-[#3c2718]">
      <Link
        to={"/"}
        className="mb-2 text-4xl font-heading text-center text-[#FDD42D]"
      >
        Harry Potter Explorer
      </Link>
      <input
        type="text"
        placeholder="Search characters..."
        className="w-full mb-2 px-2 py-1 bg-[#281A0F] border border-[#FDD42D] text-[#FDD42D] font-body placeholder-[#f8d95c6a] focus:outline-none focus:ring-2 focus:ring-[#FDD42D] focus:border-transparent"
      />

      {/* <div className="flex flex-col gap-2"> */}
      <LinkButton to={"/characters"} className="text-xl">
        Characters
      </LinkButton>
      <LinkButton to={"#"} className="text-xl">
        Spells
      </LinkButton>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
