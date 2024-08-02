const Footer_com = () => {
  return (
    <footer className="mt-16 md:mt-8  ">
      <div className="main_footer  flex flex-col items-center md:flex-row md:justify-between py-7 md:gap-3">
        <div className="download app  flex flex-col gap-2 text-right">
          <div>
            <h3 className="font-semibold gap-2 flex flex-col">
              <h2 className="font-extrabold text-xl">حمل تطبيقنا على</h2>
              حمل تطبيق بازار على جوالك واطلب بضغطة زر
            </h3>
            <div className="sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row gap-1 items-center">
              <img className="" src="appstore-download-btn 2.png" alt="" />
              <img className="" src="appstore-download-btn 1.png" alt="" />
            </div>
          </div>
          <div className=" gap-2 flex flex-col">
            <h3 className="font-extrabold text-xl">بريدنا الإلكتروني</h3>
            <p className="font-semibold">
              أدخل بريدك الإلكتروني و احصل على اخر الاخبار :
            </p>
            <div className="gap-3 flex">
              <button className="p-3 bg-[#FF7D29] rounded-xl">إشترك</button>
              <input
                className="w-full placeholder:text-right outline-none"
                type="text"
                placeholder="بريدك الإلكتروني"
              />
            </div>
          </div>
        </div>
        <div className=" gap-4 flex flex-col text-right">
          <h2 className="font-extrabold text-xl">صفحاتنا</h2>
          <p>الرئيسية</p>
          <p>التصنيفات</p>
          <p>أفضل المتاجر</p>
          <p>حسابي</p>
          <p>تسجيل الدخول</p>
        </div>
        <div className=" gap-4 flex flex-col text-right">
          <h2 className="font-extrabold text-xl">تصنيفات</h2>
          <p>الرجال</p>
          <p>النساء</p>
          <p>الأطفال</p>
          <p>ملابس</p>
          <p>اكسيسوارات </p>
        </div>
        <div className=" gap-4 flex flex-col text-right">
          <h2 className="font-extrabold text-xl">صفحاتنا</h2>
          <p>الرئيسية</p>
          <p>التصنيفات</p>
          <p>أفضل المتاجر</p>
          <p>حسابي</p>
          <p>تسجيل الدخول</p>
        </div>
        <div className=" text-right flex flex-col gap-4 ">
          <div>
            <img src="Beyond Logo 1.png" alt="" />
          </div>
          <div>
            <p className="text-right">
              بازار: الارتقاء بمشروعك من خلال حلول <br />
              B2B الشراء بالجملة الشاملة بين الشركات
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-extrabold text-xl">إشترك عندنا</h2>
            <div className="flex flex-wrap lg:justify-between justify-center gap-2">
              <img
                className="w-8 h-8 md:w-9 md:h-9 "
                src="Rectangle 228.png"
                alt=""
              />
              <img
                className="w-8 h-8 md:w-9 md:h-9"
                src="Rectangle 229.png"
                alt=""
              />
              <img
                className="w-8 h-8 md:w-9 md:h-9"
                src="Rectangle 230.png"
                alt=""
              />
              <img
                className="w-8 h-8 md:w-9 md:h-9"
                src="Rectangle 231.png"
                alt=""
              />
              <img
                className="w-8 h-8 md:w-9 md:h-9"
                src="Rectangle 232.png"
                alt=""
              />
              <img
                className="w-8 h-8 md:w-9 md:h-9"
                src="Rectangle 233.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="low_footer text-xl flex justify-center items-center  pb-2 gap-2">
        <p className="text-[#FF7D29] font-bold">BAZZAR </p> @2024 CREATED BY
        <p className="text-black font-bold">APPLAI TECH</p>
      </div>
    </footer>
  );
};

export default Footer_com;
