import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <button className="relative group px-1 py-1 font-body text-[#FDD42D] text-sm sm:text-xl lg:text-4xl overflow-hidden">
        {children}
        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#FDD42D] scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
      </button>
    </>
  );
};

export default Button;
