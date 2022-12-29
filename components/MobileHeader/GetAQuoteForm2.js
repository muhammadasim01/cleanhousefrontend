import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import LargeButton from "./LargeButton";
import PrimaryButton from "./PrimaryButton";
import GetAQuoteForm from "./GetAQuoteForm";
import { useRouter } from "next/router";
import logo2 from "../../public/assets/Maidzly-logo.png";

import Link from "next/link";
import Header from "../Header";
function GetAQuoteForm2() {
  const router = useRouter();
  const navigation = (e) => {
    e.preventDefault();
    router.push("/cleaneraddress");
  };
  return (
    <>
      <Header logo={logo2} position={"relative"} />
      <GetAQuoteForm Title="Get Your Quote" />
      <div className="p-4">
        <h2 className="font-subHeading  text-xl font-bold text-left">
          Book Your Cleaning date
        </h2>
        <div className="flex justify-between items-center">
          <GrFormPrevious className="border-2 border-secondaryColor bg-secondaryColor bg-opacity-10 h-5 w-5 rounded-full" />
          <p className="font-subHeading text-lg font-semibold">Octuber</p>
          <MdNavigateNext className="border-2 border-secondaryColor bg-secondaryColor bg-opacity-10 h-5 w-5 rounded-full" />
        </div>
        <div className="flex">
          <div className="border-2 border-secondaryColor border-opacity-40 w-10 flex flex-col justify-between items-center p-1 m-2 rounded-lg bg-secondaryColor bg-opacity-20">
            <p className="font-text text-sm font-semibold">Fri</p>
            <p className="font-text text-sm font-semibold">28</p>
          </div>
          <div className="border-2 border-secondaryColor border-opacity-40 w-10 flex flex-col justify-between items-center p-1 m-2 rounded-lg bg-secondaryColor bg-opacity-20">
            <p className="font-text text-sm font-semibold">Fri</p>
            <p className="font-text text-sm font-semibold">28</p>
          </div>
          <div className="border-2 border-secondaryColor border-opacity-40 w-10 flex flex-col justify-between items-center p-1 m-2 rounded-lg bg-secondaryColor bg-opacity-20">
            <p className="font-text text-sm font-semibold">Fri</p>
            <p className="font-text text-sm font-semibold">28</p>
          </div>
          <div className="border-2 border-secondaryColor border-opacity-40 w-10 flex flex-col justify-between items-center p-1 m-2 rounded-lg bg-secondaryColor bg-opacity-20">
            <p className="font-text text-sm font-semibold">Fri</p>
            <p className="font-text text-sm font-semibold">28</p>
          </div>
          <div className="border-2 border-secondaryColor border-opacity-40 w-10 flex flex-col justify-between items-center p-1 m-2 rounded-lg bg-secondaryColor bg-opacity-20">
            <p className="font-text text-sm font-semibold">Fri</p>
            <p className="font-text text-sm font-semibold">28</p>
          </div>
        </div>
        <div className="flex flex-col justify-between h-40">
          <p className="font-text text-base font-medium leading-5 my-3">
            When would you like your cleaner to{" "}
            <span className="font-bold">ARRIVE?</span>
          </p>
          <p className="font-text text-base font-medium leading-5 my-3">
            Cleaners can work between 08:00-22:00 (8am-10pm) depending on their
            individual schedules
          </p>
        </div>
        <p className="font-text text-base font-normal text-center">
          Anytime between
        </p>
        <LargeButton
          Text="Flexible 09:00 - 17:00"
          customCode="bg-secondaryColor border-2 border-secondaryColor border-opacity-20 bg-opacity-10 justify-between"
          color="text-darkColor"
          Emoji="yes"
          font="font-normal"
        />
        <div>
          <div className="flex justify-between px-12">
            <p>AM</p>
            <p>PM</p>
          </div>
          <div className="flex justify-between flex-wrap">
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4">
                <BsFillEmojiSmileFill className="text-secondaryColor text-2xl border-2 rounded-full" />
                <p>Flexible</p>
              </div>
              <p>09:00 - 12:00</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4">
                <BsFillEmojiSmileFill className="text-secondaryColor text-2xl border-2 rounded-full" />
                <p>Flexible</p>
              </div>
              <p>12:00 - 17.00</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4">
                <BsFillEmojiSmileFill className="text-secondaryColor text-2xl border-2 rounded-full" />
                <p>Flexible</p>
              </div>
              <p>12:00 - 15:00</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4"></div>
              <p>12:00 - 13:00</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4"></div>
              <p>08:00 - 08:30</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4"></div>
              <p>13:00 - 14:00</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4"></div>
              <p>08:30 - 9:00</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4"></div>
              <p>14:00 - 15:00</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4"></div>
              <p>09:00 - 09:30</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4"></div>
              <p>15:00 - 16:00</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4"></div>
              <p>09:30 - 10:00</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4"></div>
              <p>16:00 - 17:00</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4"></div>
              <p>10:00 - 11:00</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4"></div>
              <p>17:00 - 18:00</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4"></div>
              <p>11:00 - 12:00</p>
            </button>
            <button className="border-2 border-secondaryColor border-opacity-20 w-[44%] bg-secondaryColor bg-opacity-10 mx-2 my-2 py-1 rounded-md">
              <div className="flex justify-between items-center mx-4"></div>
              <p>18:00 - 19:00</p>
            </button>
          </div>
        </div>
        <div className="flex p-2 mt-3">
          <div>
            <BsFillEmojiSmileFill className="text-secondaryColor text-2xl border-2 rounded-full mt-1" />
          </div>
          <p className="font-text text-sm w-full px-2 py-1 leading-4">
            Selecting a &#39;Flexible&#39; option allows your cleaner more
            flexibility arround their arrival time.
          </p>
        </div>
        <LargeButton
          Text="Continue"
          customCode="justify-center bg-secondaryColor"
          color="text-lightColor"
          font="font-bold"
          toggle={navigation}
        />
        {/* <button className="next" type="submit" onClick={navigation}>
          next
        </button> */}
        {/* <Link href="/cleaneraddress">
          <a>next</a>
        </Link> */}
      </div>
    </>
  );
}

export default GetAQuoteForm2;
