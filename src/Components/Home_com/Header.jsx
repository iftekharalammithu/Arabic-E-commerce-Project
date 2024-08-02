import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";

const Header = () => {
  return (
    <div className=" justify-between items-center w-full flex h-20  align-middle ">
      <div className="flex gap-3  justify-between max-w-[496px] flex-1  items-center align-middle">
        <div>
          <button className=" w-48 h-12 bg-gradient-to-r from-[#FF7D29] to-[#FFBF78] rounded-full">
            تسجيل دخول
          </button>
        </div>
        <div className="w-72 h-8 flex justify-between items-center">
          <div className="flex gap-1 items-center align-middle  w-16 h-8">
            <img className="w-6 h-6" src="\Ellipse 2.png" alt="" />
            AR
          </div>
          <div>
            <RiUser3Line className="w-12 h-8" />
          </div>
          <div className="flex items-center">
            <CiShoppingBasket className="w-12 h-8" />
            <p className="text-xl">0</p>
          </div>
          <div className="flex items-center">
            <FaRegHeart className="w-12 h-8" />
            <p className="text-xl">0</p>
          </div>
        </div>
      </div>
      <div className="flex  gap-9">
        <div className="flex items-center rounded-md gap-5 ">
          <input
            className="  py-3 placeholder:text-lg outline-none placeholder:overflow-hidden"
            type="text"
            placeholder="ابحث في أكثر من 5,000,000 منتج!"
          />
          <CiSearch className="w-8 h-8" />
        </div>
        <img
          className="w-[236px]  h-16 flex "
          src="\Beyond Logo 1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
