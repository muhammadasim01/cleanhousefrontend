import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import BannerMain from "../../public/assets/BannerMain.png";
import star from "../../public/assets/star.png";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
const Banner = () => {
  const [inputVal, setInputVal] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    setInputVal("");
  };
  return (
    <>
      <div className="bg-[url('../public/assets/Mobile-Banner.png')] bg-top sm:bg-center bg-no-repeat h-[700px] w-[100%] bg-cover  sm:h-[780px]  md:h-[700px] md:bg-center lg:bg-cover xl:bg:contain 2xl:bg:contain xl-h-[500px] 2xl:h-[800px]">
        <div className="flex flex-row items-center justify-center pt-[9rem] md:pt-[15rem] lg:pt-[10rem] xl:pt-[7rem]">
          <div className="flex flex-col  w-[100%]">
            <span className="flex self-start pl-7 pb-5 ">
              <img src="./assets/star.png" width={17} height={0} />
              <img src="./assets/star.png" width={17} height={0} />
              <img src="./assets/star.png" width={17} height={0} />
              <img src="./assets/star.png" width={17} height={0} />
              <img src="./assets/star.png" width={17} height={0} />
            </span>
            <h1 className="font-heading text-lightColor text-[40px] leading-[2.7rem] font-bold pl-7  w-[100%] ">
              <p>Book a local</p>
              <p className="">cleaner in your</p>
              area <span />
              <span className="font-subHeading text-lg font-light">
                Canada & USA
              </span>
            </h1>
            <p className="text-lightColor font-text text-lg font-medium py-5 pl-7 ">
              <span className="flex items-center font-semibold mb-2">
                <BsCheckLg className="mr-2 text-secondaryColor" />
                Rated 5 star cleaners.
              </span>
              <span className="flex items-center font-semibold mb-2 ">
                <BsCheckLg className="mr-2 text-secondaryColor" />
                Pay and book online.
              </span>
              <span className="flex items-center font-semibold ">
                <BsCheckLg className="mr-2 mb-6 text-secondaryColor" />
                GPS tracking when your <br />
                cleaner is on route.
              </span>
            </p>
            <form className="flex relative items-center justify-center w-full pl-7 sm:w-[600px] ">
              <input
                type="number"
                placeholder="Enter your postcode/zip code"
                className="h-14 w-[350px] my-4 rounded-md font-medium text-normal text-darkColor"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <button
                onClick={submitHandler}
                className="p-1 w-12 h-11 bg-primaryColor  
              flex  text-lightColor relative right-12
              rounded-md justify-center items-center sm:w-[13rem] sm:right-[10rem]  "
              >
                <img src="./assets/search.png" alt="" width={20} />
                <span className="hidden sm:flex">Search Now</span>
              </button>
            </form>
          </div>
          <div className="hidden lg:block lg:pr-[2rem] ">
            <img src="assets/BannerMain.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
