import { Link } from "react-router-dom";
import { getHouseStyle } from "../constants/houseStyles";

const LinkButton = ({ children, to, className, house = "default" }) => {
  const houseStyle = getHouseStyle(house);

  return (
    <Link
      to={to}
      className={`relative group py-1 font-body overflow-hidden ${houseStyle.text} ${className}`}
    >
      {children}
      <span
        className="absolute left-0 bottom-0 w-full h-[1px] scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"
        style={{ backgroundColor: "currentColor" }}
      ></span>
    </Link>
  );
};

export default LinkButton;
