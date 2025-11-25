import React from "react";
import Button from "../components/Button";

function HomePage() {
  return (
    <div className="h-screen bg-[url('/images/home-bg.jpg')] bg-cover bg-center">
      <div className="absolute flex items-center justify-center inset-0 bg-black opacity-75">
        <div className="text-center">
          <h1 className="mb-3 sm:mb-5 lg:mb-10 font-heading text-4xl sm:text-6xl lg:text-[120px] text-center text-[#FDD42D]">
            Harry Potter Explorer
          </h1>
          <div className="flex justify-center gap-10 sm:gap-14 lg:gap-28">
            <Button>Characters</Button>
            <Button>Spells</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
