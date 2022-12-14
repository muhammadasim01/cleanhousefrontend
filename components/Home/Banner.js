import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import BannerMain from "../../public/assets/BannerMain.png";
import { BiSearch } from "react-icons/bi";
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
          <div className="flex flex-col">
            <span className="flex self-start px-7 pb-5">
              <AiTwotoneStar className="text-[#FFCE31] h-5 w-5" />
              <AiTwotoneStar className="text-[#FFCE31] h-5 w-5" />
              <AiTwotoneStar className="text-[#FFCE31] h-5 w-5" />
              <AiTwotoneStar className="text-[#FFCE31] h-5 w-5" />
              <AiTwotoneStar className="text-[#FFCE31] h-5 w-5" />
            </span>
            <h1 className="font-heading text-lightColor text-4xl font-bold px-7">
              Book a local cleaner in your area <span />
              <span className="font-subHeading text-lg font-light">
                Canada & USA
              </span>
            </h1>
            <p className="text-lightColor font-text text-lg font-medium py-5 px-7">
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
            <form className="flex relative items-center justify-center w-full pl-7 sm:w-[600px]">
              <input
                type="number"
                placeholder="Enter your postcode/zip code"
                className="h-14 w-full my-4 rounded-md"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <button
                onClick={submitHandler}
                className="p-1 w-12 h-11 bg-primaryColor  
              flex  text-lightColor relative right-12
              rounded-md justify-center items-center sm:w-[13rem] sm:right-[10rem]"
              >
                <BiSearch className="h-6 w-6 text-lightColor font-bold" />
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
