export const HOUSE_STYLES = {
  Gryffindor: {
    container: "bg-[#360B0B] border-[#E7A32F]",
    text: "text-[#E7A32F]",
    input:
      "bg-[#360B0B] border-[#E7A32F] text-[#E7A32F] placeholder-[#E7A32F]/50",
    background: "bg-[#360B0B]",
    border: "border-[#E7A32F]",
    backgroundImage: "/images/gryff-bg.jpg",
  },
  Slytherin: {
    container: "bg-[#122915] border-[#AFB6C1]",
    text: "text-[#AFB6C1]",
    input:
      "bg-[#122915] border-[#AFB6C1] text-[#AFB6C1] placeholder-[#AFB6C1]/50",
    background: "bg-[#122915]",
    border: "border-[#AFB6C1]",
    backgroundImage: "/images/slyth-bg.jpg",
  },
  Hufflepuff: {
    container: "bg-[#1D1D1D] border-[#DFBA20]",
    text: "text-[#DFBA20]",
    input:
      "bg-[#1D1D1D] border-[#DFBA20] text-[#DFBA20] placeholder-[#DFBA20]/50",
    background: "bg-[#1D1D1D]",
    border: "border-[#DFBA20]",
    backgroundImage: "/images/huffle-bg.jpg",
  },
  Ravenclaw: {
    container: "bg-[#18283D] border-[#BBA698]",
    text: "text-[#BBA698]",
    input:
      "bg-[#18283D] border-[#BBA698] text-[#BBA698] placeholder-[#BBA698]/50",
    background: "bg-[#18283D]",
    border: "border-[#BBA698]",
    backgroundImage: "/images/raven-bg.jpg",
  },
  default: {
    container: "bg-[#281A0F] border-[#FDD42D]",
    text: "text-[#FDD42D]",
    input:
      "bg-[#281A0F] border-[#FDD42D] text-[#FDD42D] placeholder-[#FDD42D]/50",
    background: "bg-[#281A0F]",
    border: "border-[#FDD42D]",
    backgroundImage: "/images/chars-bg.jpg",
  },
};

export const getHouseStyle = (house) => {
  if (!house || house.trim() === "" || !HOUSE_STYLES[house]) {
    return HOUSE_STYLES.default;
  }
  return HOUSE_STYLES[house];
};
