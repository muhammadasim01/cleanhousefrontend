import { useState } from "react";
import { GiUsaFlag } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Flag1 from "../../public/assets/USA_Flag.png";
import Flag2 from "../../public/assets/CANADA_Flag.png";
import Image from "next/image";
import GetAQuoteForm1 from "./GetAQuoteForm1";
import GetAQuoteForm2 from "./GetAQuoteForm2";
import GetAQuoteForm3 from "./GetAQuoteForm3";
import GetAQuoteForm4 from "./GetAQuoteForm4";
import Link from "next/link";

function GetAQuoteForm({ Title, first, second, third, fourth }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isCanada, setIsCanada] = useState(true);
  return (
    <div className="mb-4 ">
      <div className="absolute top-[5rem] right-0">
        <div className="h-[80px] w-[70px] text-right ">
          <div
            className="w-[70px] text-center rounded-lg flex justify-center items-center cursor-pointer"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            {isCanada ? (
              <>
                <Image src={Flag1} width="20" height="15" alt="" />{" "}
                <span>$0</span>
              </>
            ) : (
              <>
                <Image src={Flag2} width="20" height="15" alt="" />{" "}
                <span>$0</span>
              </>
            )}
            <MdKeyboardArrowDown />
          </div>

          {showDropDown && (
            <div className=" absolute  w-[70px] z-10">
              <div
                className="text-darkColor bg-secondaryColor bg-opacity-10  block text-center rounded-lg cursor-pointer"
                onClick={() => {
                  setIsCanada(true);
                  setShowDropDown(false);
                }}
              >
                <Image src={Flag1} width="20" height="15" alt="" /> $0
              </div>

              <div
                className="text-darkColor  block text-center rounded-lg cursor-pointer"
                onClick={() => {
                  setIsCanada(false);
                  setShowDropDown(false);
                }}
              >
                <Image src={Flag2} width="20" height="15" alt="" /> $0
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full mt-[1rem] ">
        <h2 className="font-heading  text-[36px] font-bold py-2  ">{Title}</h2>
        <div className="flex justify-between h-10  border-[1px] border-secondaryColor pl-2 pr-3 items-center bg-secondaryColor bg-opacity-10 rounded-lg ">
          <button className=" font-text text-[10px] font-extrabold text-darkColor flex items-center ">
            <p
              className={`h-[6px] w-[6px] border-[1px] border-secondaryColor ${
                first && "bg-secondaryColor"
              } rounded-full mx-[4px]`}
            ></p>
            Your Booking Info
          </button>
          <button className=" font-text text-[10px] font-bold text-darkColor flex items-center ">
            <p
              className={`h-[6px] w-[6px] border-[1px] border-secondaryColor  ${
                second && "bg-secondaryColor"
              } rounded-full mx-[4px]`}
            ></p>
            Date/Time
          </button>
          <button className=" font-text text-[10px] font-bold text-darkColor flex items-center ">
            <p
              className={`h-[6px] w-[6px] border-[1px] border-secondaryColor ${
                third && "bg-secondaryColor"
              }  rounded-full mx-[4px]`}
            ></p>
            Address
          </button>
          <button className=" font-text text-[10px] font-bold text-darkColor flex items-center ">
            <p
              className={`h-[6px] w-[6px] border-[1px] border-secondaryColor ${
                fourth && "bg-secondaryColor"
              }  rounded-full mx-[4px]`}
            ></p>
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetAQuoteForm;
