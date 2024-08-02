import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex justify-between  items-center w-full h-16 p-4 md:p-6">
      <div className="flex flex-col md:flex-row flex-1 items-center gap-3 md:gap-5">
        <button className="w-full md:w-auto bg-gradient-to-r from-[#FF7D29] to-[#FFBF78] rounded-full py-2 md:py-3 px-4 md:px-6 text-white">
          تسجيل دخول
        </button>
        <div className="flex items-center gap-3 md:gap-5">
          <div className="flex items-center gap-1">
            <img
              className="w-6 h-6 md:w-8 md:h-8"
              src="\Ellipse 2.png"
              alt="Language Icon"
            />
            <span>AR</span>
          </div>
          <RiUser3Line className="w-6 h-6 md:w-8 md:h-8" />
          <div className="flex items-center">
            <CiShoppingBasket className="w-6 h-6 md:w-8 md:h-8" />
            <p className="text-lg md:text-xl">0</p>
          </div>
          <div className="flex items-center">
            <FaRegHeart className="w-6 h-6 md:w-8 md:h-8" />
            <p className="text-lg md:text-xl">0</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 md:gap-9">
        <div className="flex items-center gap-2 md:gap-5 rounded-md">
          <input
            className="w-full md:w-80 py-2 md:py-3 placeholder:text-sm md:placeholder:lg outline-none"
            type="text"
            placeholder="ابحث في أكثر من 5,000,000 منتج!"
          />
          <CiSearch className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <img
          className="w-24 md:w-[236px] h-12 md:h-16"
          src="\Beyond Logo 1.png"
          alt="Logo"
        />
      </div>
    </header>
  );
};

export default Header;
