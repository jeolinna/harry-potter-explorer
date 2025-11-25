import { Link } from "react-router-dom";

const LinkButton = ({ children, to, className }) => {
  return (
    <Link
      to={to}
      className={`relative group py-1 font-body text-[#FDD42D] overflow-hidden ${className}`}
    >
      {children}
      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#FDD42D] scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
    </Link>
  );
};

export default LinkButton;
