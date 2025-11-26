import React from "react";
import LinkButton from "../components/LinkButton";

function HomePage() {
  return (
    <div className="h-screen bg-[url('/images/home-bg.jpg')] bg-cover bg-center">
      <div className="absolute flex items-center justify-center inset-0 bg-black/75">
        <div className="text-center">
          <h1 className="mb-3 sm:mb-5 lg:mb-10 font-heading text-4xl sm:text-6xl lg:text-[120px] text-center text-[#FDD42D]">
            Harry Potter Explorer
          </h1>
          <div className="flex justify-center gap-10 sm:gap-14 lg:gap-28">
            <LinkButton
              to={"/characters"}
              className="text-sm sm:text-xl lg:text-4xl"
            >
              Characters
            </LinkButton>
            <LinkButton
              to={"/spells"}
              className="text-sm sm:text-xl lg:text-4xl"
            >
              Spells
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
