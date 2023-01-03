import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

function MobileMenu({ logo }) {
  return (
    <div className="text-center flex flex-col sm:hidden bg-darkColor bg-opacity-80 absolute w-[100%] z-40">
      <form className="flex items-center justify-center w-full pl-7 mt-3 sm:w-[600px]">
        <input
          type="text"
          placeholder="Search Cleaners"
          className="h-10 p-5 w-full my-4 rounded-md  "
        />
        <button className="py-1 px-1 relative right-10 bg-primaryColor rounded-md">
          <BiSearch className="h-6 w-6 text-lightColor" />
        </button>
      </form>
      <nav>
        <ul>
          <li className="text-lightColor text-start font-subHeading text-xl  font-bold py-3 ml-5">
            <Link href="/">Search Cleaners</Link>
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            <Link href="/">Our Services</Link>
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            <Link href="/">Register As A Cleaner</Link>
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            <Link href="/">Sign Up</Link>
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            <Link href="/">Sign In</Link>
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            <Link href="/">Book A Cleaning</Link>
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            <Link href="/">Post a Job</Link>
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            <Link href="/">Job board</Link>
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            <Link href="/">FAQ&#39;s</Link>
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            <Link href="/">Inbox</Link>
          </li>
          <p className="border-b-2 border-lightColor mx-5"></p>
          <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
            <Link href="/">Log Out</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
