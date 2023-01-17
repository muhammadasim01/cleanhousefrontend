import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "./Home/PrimaryButton";
import logo from "../public/assets/logo.png";
import logo2 from "../public/assets/logo-2.png";
import menu from "../public/assets/menu.png";
import mobileLogo from "../public/assets/logo-mobile.png";
import Button from "./Home/Button";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
const Header = ({ bgColor, position, logo }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div
        className={`${position} h-auto sm:w-full flex justify-between px-5 py-4 items-center w-[100%] ${bgColor} `}
      >
        <Link href="/">
          <img
            src="./assets/maidzly-logo.png"
            height={0}
            width={190}
            alt=""
            className=""
          />
        </Link>
        <button
          className="z-50  text-lightColor "
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <MdClose className="h-7 w-10 sm:hidden z-50 text-primaryColor " />
          ) : (
            <>
              <Image width={29} height={23} src={menu} />
              {/* <VscMenu className="h-7 w-10 sm:hidden text-primaryColor " /> */}
            </>
          )}
        </button>
        <div className="hidden sm:block px-5 h-auto w-[100%] lg:w-[85%] sm:w-[60rem] lg-[70%] sm:text-xs text-lightColor sm:py-2">
          <ul className="w-full sm:flex sm:mx-4  sm:justify-between sm:items-center">
            <li className="font-text text-base font-medium sm:text-xs  md:text-sm md:font-medium lg:text-md">
              Our Guarantee
            </li>
            <li className="font-text text-base font-medium sm:text-xs  md:text-sm md:font-medium lg:text-lg ">
              About Us
            </li>
            <li className="font-text text-base font-medium sm:text-xs  md:text-sm md:font-medium lg:text-lg ">
              Book A Cleaner
            </li>
            <li className="font-text text-base font-medium sm:text-xs  md:text-sm md:font-medium lg:text-lg ">
              Blogs
            </li>
            <li className="font-text text-base font-medium sm:text-xs  md:text-sm md:font-medium lg:text-lg ">
              Contact Us
            </li>
            <PrimaryButton
              text="Login"
              bgColor={"bg-lightColor"}
              textColor={"text-primaryColor"}
              customCode={"sm:w-[5rem] sm:h-[2rem] lg:w-[6rem] lg:h-[2.3rem]"}
            />
            <PrimaryButton
              text="Register"
              bgColor={"bg-primaryColor"}
              border={"border-2 border-lightColor"}
              textColor={"text-lightColor"}
              customCode={"sm:w-[5rem] sm:h-[2rem] lg:w-[6rem] lg:h-[2.3rem]"}
            />
          </ul>
        </div>
      </div>
      {navbarOpen ? <MobileMenu logo={logo} /> : <div className="hidden"></div>}
    </>
  );
};

export default Header;
