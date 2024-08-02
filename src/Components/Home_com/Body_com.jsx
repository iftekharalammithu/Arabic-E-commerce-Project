import { TiDeleteOutline } from "react-icons/ti";

const Body_com = () => {
  const image_1 = [
    "Rectangle 241-2.png",
    "Rectangle 242-2.png",
    "Rectangle 243-2.png",
    "Rectangle 244-2.png",
    "Rectangle 245-2.png",
    "Rectangle 246-2.png",
  ];
  const image_2 = [
    "Rectangle 241-1.png",
    "Rectangle 242-1.png",
    "Rectangle 243-1.png",
    "Rectangle 244-1.png",
    "Rectangle 245-1.png",
    "Rectangle 246-1.png",
  ];
  const image_3 = [
    "Rectangle 264.png",
    "Rectangle 265.png",
    "Rectangle 266.png",
    "Rectangle 267.png",
  ];
  const image_4 = [
    "Rectangle 241.png",
    "Rectangle 242.png",
    "Rectangle 243.png",
    "Rectangle 244.png",
    "Rectangle 245.png",
    "Rectangle 246.png",
  ];
  return (
    <div className=" mt-3 gap-12  flex flex-col">
      <div className="frame-1  flex flex-col gap-7  ">
        <div className="flex px-3 justify-between h-12 items-center bg-gradient-to-r from-[#FF7D29] to-[#FFBF78] text-white">
          <TiDeleteOutline className="w-[30px] h-[30px]" />
          <p className="font-bold text-[12px] md:text-[16px] lg:text-[20px] text-center">
            B2B بازار: الارتقاء بمشروعك من خلال حلول الشراء بالجملة الشاملة بين
            الشركات
          </p>
          <TiDeleteOutline className="w-[30px] h-[30px]" />
        </div>

        <div className="image-1  gap-2 grid grid-cols-3 w-full ">
          {image_1.map((image, index) => {
            return (
              <div className=" flex justify-center items-center" key={index}>
                <img className="w-full flex " src={image} alt="" />
              </div>
            );
          })}
        </div>
        <div className="image-1  gap-2 mt-5  grid grid-cols-3 w-full ">
          {image_2.map((image, index) => {
            return (
              <div className=" flex justify-center items-center" key={index}>
                <img className="w-full flex " src={image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="frame-2  grid grid-cols-4 gap-2 w-full">
        {image_3.map((image, index) => {
          return (
            <div key={index} className=" flex justify-center  items-center">
              <img className="w-full flex " src={image} alt="" />
            </div>
          );
        })}
      </div>
      <div className="image-4 gap-2 grid grid-cols-3 w-full ">
        {image_4.map((image, index) => {
          return (
            <div className=" flex justify-center items-center" key={index}>
              <img className="w-full flex " src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body_com;
