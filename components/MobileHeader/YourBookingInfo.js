import { useState } from "react";
import { useRouter } from "next/router";
import LargeButton from "./LargeButton";
import { GoPrimitiveDot } from "react-icons/go";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import Header from "../Header";
function YourBookingInfo() {
  const router = useRouter();

  const navigation = (e) => {
    e.preventDefault();
    router.push("/cleanerdate");
  };
  const [toggle, setToggle] = useState(true);
  const handleYes = () => {
    !toggle && setToggle(true);
  };
  const handleNo = () => {
    toggle && setToggle(false);
  };
  const [levelcount, setlevelCout] = useState(1);
  const [bedroomcount, setBedroomCount] = useState(1);
  const [extrabedroomcount, setExtrabedRoomCount] = useState(1);
  const [bathroomscount, setBathroomscount] = useState(1);
  const [extrabathroomcount, setExtrabathroomCount] = useState(1);
  const [livingroomcount, setLivingRoomCount] = useState(1);
  const [extralivingroomcount, setExtralivingRoomCount] = useState(1);
  const [extraRoom, setExtraRoom] = useState(1);
  const [extraRoomTask, setExtraRoomTask] = useState(1);
  const [kitchen, setKitchen] = useState(1);
  const [kitchenExtraTask, setKitchenExtraTask] = useState(1);
  const [needIroning, setNeedIroning] = useState(true);
  const [addedOnTop, setAddedOnTop] = useState(true);
  const [ironPieces, setIronPieces] = useState(1);
  const [isOrganizingneeded, setIsOrganizingneeded] = useState(true);
  const [extraTime, setExtraTime] = useState(30);
  const [applianceCleaning, setApplianceCleaning] = useState(true);
  const [extraHours, setExtraHours] = useState(2.5);
  const [isalarmSystem, setISAlarmSystem] = useState(true);
  const [isvisitorParking, setIsVisitorParking] = useState(true);
  const [isPetInHouse, setIsPetInHouse] = useState(true);
  return (
    <div className="">
      <h2 className="font-subHeading text-[26px] font-bold text-darkColor mb-5 mt-[6px]">
        Get your quote
      </h2>
      <p className="font-text text-[16px] leading-[140%] font-medium text-darkColor">
        What Type of <span className="font-heading">cleaning/services </span>
        do you need?
        <br /> Click the <span className="font-heading">Box</span> that applies.
      </p>
      <div className="flex flex-wrap justify-between my-2">
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center py-[4px]">
            Regular <br /> Cleaning
          </p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center py-[4px]">
            Deep
            <br /> Cleaning
          </p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center py-[4px]">
            Move In/Out
            <br /> Cleaning
          </p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center py-[4px]">
            Post Renovation <br />
            Cleaning
          </p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center py-[4px]">
            Organizing <br />
            Only
          </p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-[5px] text-center py-[4px]">
            Appliance Cleaning
            <br /> Only
          </p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center py-[4px]">
            Laundry <br /> Only
          </p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="px-2 text-center py-[4px]">
            Ironing <br /> Only
          </p>
        </div>
      </div>
      <p className="font-text text-base font-medium text-darkColor">
        Not sure which <span className="font-heading">cleaning service</span>{" "}
        you need? Here in the table is our <span></span>
        <span className="font-heading">cleaning checklists </span> for each of
        the services provided.
      </p>
      <LargeButton
        Text="Cleaning Checklist"
        color="text-lightColor"
        customCode="justify-center bg-secondaryColor"
        font="font-bold"
      />
      <p className="font-text text-base leading-6 ">
        Let us know below if there is anything from the cleaning checklist from
        the service you requested that you
        <span> </span>
        <span className="font-heading">DO NOT NEED TO BE CLEANED</span> below.
      </p>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          I do not need these areas/items to be cleaned:
        </p>
        <input
          type="text"
          className="w-full h-24 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <p className="font-text text-base font-normal">
        What type of <span className="font-heading">property</span> needs
        cleaning?
      </p>
      <div className="flex flex-wrap justify-between">
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">House</p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">Apartment</p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">Bungalow</p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">Condo</p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">Townhouse</p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">Duplex</p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">
            Holiday Rentel
          </p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">Office</p>
        </div>
        <div className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-4 px-2 w-[45%] rounded-md bg-secondaryColor bg-opacity-10 my-2">
          <p className="font-text text-center text-md font-medium">
            Commercial
          </p>
        </div>
      </div>
      <div className="my-4">
        <p>Other:</p>
        <input
          type="text"
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md"
        />
      </div>
      <div className="my-4">
        <p>
          How <span className="font-heading">often</span> do you need cleaning?
        </p>
        <select className="border-[1px] border-[rgba(103,98,240,0.5)] w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md">
          <option value="once a week">Once a week</option>
          <option value="2x a week">2x a week</option>
          <option value="3x a week">3x a week</option>
          <option value="4x a week">4x a week</option>
          <option value="5x a week">5x a week</option>
          <option value="6x a week">6x a week</option>
          <option value="7x a week">7x a week</option>
          <option value="bi-weekly">Bi-weekly</option>
          <option value="1x a month">1x a month</option>
          <option value="one time only">One Time Only</option>
        </select>
      </div>
      <div className="my-4">
        <p>
          When was your property
          <span className="font-heading">cleaned last?</span>
        </p>
        <select className="border-[1px] border-[rgba(103,98,240,0.5)] w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md">
          <option value="1 week ago">1 week ago</option>
          <option value="2 weeks ago">2 weeks ago</option>
          <option value="3 weeks ago">3 weeks ago</option>
          <option value="4 weeks ago">4 weeks ago</option>
          <option value="more than a month">More than a Month</option>
        </select>
      </div>
      <div className="my-4">
        <p>
          Size of <span className="font-heading">property</span> property (sq
          ft)
        </p>
        <select className="border-[1px] border-[rgba(103,98,240,0.5)] w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md">
          <option value="1 Week ago">101 - 500</option>
        </select>
      </div>
      <div className="my-4">
        <p>
          Do you want the <span className="font-heading">WHOLE</span> property
          to be cleaned?
        </p>
        <div className="w-28 flex justify-between  mb-5 bg-secondaryColor bg-opacity-10 rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              toggle ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={handleYes}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !toggle ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={handleNo}
          >
            No
          </button>
        </div>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          If no, explain the areas not to clean:
        </p>
        <textarea
          type="text"
          placeholder="e.g. 'do not clean the basement area'"
          className="w-full h-24 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <p>
        How many <span className="font-heading">levels of the property</span> do
        you want cleaned? (Including if there is a basement level)
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-5 rounded-[7px]">
        <button
          onClick={() => levelcount !== 1 && setlevelCout(levelcount - 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center ">Level-{levelcount}</p>
        <button
          onClick={() => setlevelCout(levelcount + 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">Bedrooms</h3>
      <p>
        How many <span className="font-heading">bedrooms</span> need cleaning?
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-5 rounded-[7px]">
        <button
          onClick={() =>
            bedroomcount !== 0 && setBedroomCount(bedroomcount - 1)
          }
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center">{bedroomcount}-Bedroom</p>
        <button
          onClick={() => setBedroomCount(bedroomcount + 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          Priority to clean in the{" "}
          <span className="font-heading">bedrooms</span> areas:
        </p>
        <textarea
          type="text"
          placeholder="e.g. ‘vacuum floors, mop and sweep under bed’"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          Do NOT CLEAN items/areas in the bedroom:
        </p>
        <textarea
          type="text"
          placeholder="e.g. ‘do not clean the antique chair in the master bedroom’"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Bedroom extra tasks
      </h3>
      <p className="font-text text-lg font-normal leading-5">
        Extra tasks required to be added to your
        <span className="font-subHeading "> REGULAR CLEANING</span>. Click all
        the boxes that apply and we will estimate how much time extra you may
        need.
      </p>
      <p className="font-text text-[15px] font-normal leading-5 py-3">
        Click how many <span className="font-subHeading">bedrooms </span> to
        request extra tasks.
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-4 rounded-[7px]">
        <button
          onClick={() =>
            extrabedroomcount !== 0 &&
            setExtrabedRoomCount(extrabedroomcount - 1)
          }
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center">{extrabedroomcount}-Bedroom</p>
        <button
          onClick={() => setExtrabedRoomCount(extrabedroomcount + 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>
      <p className="font-text text-base font-normal">Extra Tasks</p>
      <div className="flex flex-wrap justify-between">
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Change Bedsheets
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Furniture Polishing
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Move Furniture To Vacuum & Mop
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Vacuum & Mop Under Area Rugs
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Light Fixtures
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Ceiling Fan
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Top Of Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Disinfecting Knobs
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Switches
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Wastebaskets
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Windows
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Window Tracks
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Window Sills
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Blinds
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Spot Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Baseboards
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2   
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Floor Washing
          </p>
        </div>
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">Bathrooms</h3>
      <p className="font-text text-lg font-normal leading-5 py-2">
        How many <span className="font-bold">bathrooms</span> need cleaning?
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-5 rounded-[7px]">
        <button
          onClick={() =>
            bathroomscount !== 0 && setBathroomscount(bathroomscount - 1)
          }
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center">{bathroomscount}-bathroom</p>
        <button
          onClick={() => setBathroomscount(bathroomscount + 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>

      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          Priority to clean in the
          <span className="font-subHeading font-bold"> bathroom </span> areas:
        </p>
        <textarea
          type="text"
          placeholder="e.g. ‘floor, sink, shower & vacuum mat’"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal">
          Do <span className="font-subHeading font-bold">NOT CLEAN </span>
          items/areas in the bathroom:
        </p>
        <textarea
          type="text"
          placeholder="e.g. ‘do not clean top shelf in the master bathroom’"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Bathrooms extra tasks
      </h3>
      <p className="font-text text-lg font-normal leading-5">
        Extra tasks required to be added to your
        <span className="font-subHeading font-bold"> REGULAR CLEANING</span>.
        Click all the boxes that apply and we will estimate how much time extra
        you may need.
      </p>
      <p className="font-text text-lg font-normal leading-5 py-3">
        Click how many
        <span className="font-subHeading font-bold"> bathrooms</span> to request
        extra tasks.
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-5 rounded-[7px]">
        <button
          onClick={() =>
            extrabathroomcount !== 0 &&
            setExtrabathroomCount(extrabathroomcount - 1)
          }
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center">{extrabathroomcount}-bathroom</p>
        <button
          onClick={() => setExtrabathroomCount(extrabathroomcount + 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>
      <p className="font-text text-base font-normal">Extra Tasks</p>
      <div className="flex flex-wrap justify-between">
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Bathroom Cabinets
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Medicine Cabinet
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-[14.5px] font-normal">
            Deep Clean Bathroom Tile Grout
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Light Fixtures
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Ceiling Fan
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Top Of Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Disinfecting Knobs
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Switches
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Wastebaskets
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Windows
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Window Tracks
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Window Sills
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Blinds
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Spot Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Floor Washing
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Baseboards
          </p>
        </div>
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Living Rooms/Family Rooms
      </h3>
      <p className="font-text text-lg font-normal leading-5 py-2">
        How many{" "}
        <span className="font-subHeading font-bold">
          living rooms/family rooms
        </span>{" "}
        need cleaning? (including the basement area)
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-5 rounded-[7px]">
        <button
          onClick={() =>
            livingroomcount !== 0 && setLivingRoomCount(livingroomcount - 1)
          }
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center">{livingroomcount}-Living / Family Rooms</p>
        <button
          onClick={() => setLivingRoomCount(livingroomcount + 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Priority to clean in the{" "}
          <span className="font-subHeading font-bold">
            living room/family room
          </span>{" "}
          areas:
        </p>
        <textarea
          placeholder="e.g. ‘dust top of the wall shelf as last cleaner forgot’"
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Do <span className="font-subHeading font-bold">NOT CLEAN </span>
          items/areas in the living room/family room:
        </p>
        <textarea
          placeholder="e.g. ‘do not touch any screen TV’s or glassware’"
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Living room/family room extra tasks
      </h3>
      <p className="font-text text-lg font-normal leading-5">
        Extra tasks required to be added to your{" "}
        <span className="font-subHeading font-bold">REGULAR CLEANING. </span>
        Click all the boxes that apply and we will estimate how much time extra
        you may need.
      </p>
      <p className="font-text text-lg font-normal leading-5 py-3">
        Click how many{" "}
        <span className="font-subHeading font-bold">
          Living room/family room extra tasks
        </span>{" "}
        to request extra tasks.
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-5 rounded-[7px]">
        <button
          onClick={() =>
            extralivingroomcount !== 0 &&
            setExtralivingRoomCount(extralivingroomcount - 1)
          }
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center">
          {extralivingroomcount}-Living / Family Rooms
        </p>
        <button
          onClick={() => setExtralivingRoomCount(extralivingroomcount + 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>
      <p className="font-text text-base font-normal">Extra Tasks</p>
      <div className="flex flex-wrap justify-between">
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Furniture Polishing
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Move Furniture To Vacuum & Mop
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Vacuum & Mop Under Area Rugs
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Light Fixtures
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Ceiling Fan
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Top Of Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Disinfecting Knobs
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Switches
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Wastebaskets
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Windows
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Window Tracks
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Window Sills
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Blinds
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Spot Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Floor Washing
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Baseboards
          </p>
        </div>
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">Extra rooms</h3>
      <p className="font-text text-lg font-normal leading-5">
        How many{" "}
        <span className="font-subHeading font-bold">
          extra rooms including: dining rooms, office rooms, sun rooms, laundry
          rooms, gym rooms and any other rooms
        </span>{" "}
        need cleaning? (including the basement area)
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-5 rounded-[7px]">
        <button
          onClick={() => extraRoom !== 0 && setExtraRoom(extraRoom - 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center">{extraRoom}- Extra Room</p>
        <button
          onClick={() => setExtraRoom(extraRoom + 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>

      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Please describe what are the{" "}
          <span className="font-subHeading font-bold">extra rooms </span> you
          want cleaned:
        </p>
        <textarea
          placeholder="e.g. ‘clean the sunroom and dining room’"
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Do <span className="font-subHeading font-bold">NOT CLEAN </span>
          items/areas in these rooms:
        </p>
        <textarea
          placeholder="e.g. ‘do not clean the office room and gym room’"
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Extra room tasks
      </h3>
      <p className="font-text text-lg font-normal leading-5">
        Extra tasks required to be added to your
        <span className="font-subHeading font-bold"> REGULAR CLEANING </span>.
        Click all the boxes that apply and we will estimate how much time extra
        you may need.
      </p>
      <p className="font-text text-base font-normal py-2">
        How many <span className="font-subHeading font-bold"> rooms </span> need
        extra tasks?
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-5 rounded-[7px]">
        <button
          onClick={() =>
            extraRoomTask !== 0 && setExtraRoomTask(extraRoomTask - 1)
          }
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center">{extraRoomTask}- Extra Room</p>
        <button
          onClick={() => setExtraRoomTask(extraRoomTask + 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>
      <p className="font-text text-base font-normal">Extra Tasks</p>
      <div className="flex flex-wrap justify-between">
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Furniture Polishing
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Move Furniture To Vacuum & Mop
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Vacuum & Mop Under Area Rugs
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Light Fixtures
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Ceiling Fan
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Top Of Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Disinfecting Knobs
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Switches
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Wastebaskets
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Windows
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Window Tracks
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Window Sills
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Blinds
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Spot Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Floor Washing
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%] h-[64px]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Baseboards
          </p>
        </div>
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">Kitchen</h3>
      <p className="font-text text-lg font-normal leading-5 py-3">
        How many <span className="font-subHeading font-bold"> kitchens </span>
        need cleaning?
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-5 rounded-[7px]">
        <button
          onClick={() => kitchen !== 0 && setKitchen(kitchen - 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center">{kitchen}-Kitchen</p>
        <button
          onClick={() => setKitchen(kitchen + 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Priority and notes to clean in the
          <span className="font-subHeading font-bold"> kitchen </span> area:
        </p>
        <textarea
          placeholder="e.g. ‘make sure to mop the kitchen floor with lysol only’"
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Do <span className="font-subHeading font-bold">NOT CLEAN</span>
          items/areas in the kitchen:
        </p>
        <textarea
          placeholder="e.g. ‘no need to clean the kitchen window and do not use bleach on kitchen cupboards, only fantastic cleaner’"
          type="text"
          className="w-full h-32 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <h3 className="font-subHeading text-2xl font-bold py-3">
        Kitchen extra tasks
      </h3>
      <p className="font-text text-lg font-normal leading-5">
        Extra tasks required to be added to your
        <span className="font-subHeading font-bold"> REGULAR CLEANING. </span>
        Click all the boxes that apply and we will estimate how much time extra
        you may need.
      </p>
      <p className="font-text text-lg font-normal leading-5 py-3">
        Click how many
        <span className="font-subHeading font-bold"> kitchens </span> need extra
        tasks.
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-5 rounded-[7px]">
        <button
          onClick={() =>
            kitchenExtraTask !== 0 && setKitchenExtraTask(kitchenExtraTask - 1)
          }
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center">{kitchenExtraTask}- Kitchen</p>
        <button
          onClick={() => setKitchenExtraTask(kitchenExtraTask + 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>
      <p className="font-text text-base font-normal">Extra Tasks</p>
      <div className="flex flex-wrap justify-between">
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Wash Dishes By Hand
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Empty Dishwasher
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Load Dishwasher
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Range Hood
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-[14px] font-normal">
            Stove Cleaning Inside (Self Clean Oven)
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-[14px] font-normal">
            Stove Cleaning Inside (Non-Self Clean Oven)
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Quick Clean Inside Fridge
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Inside Fridge
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Top Of Fridge & Sides
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-[14px] font-normal">
            Deep Clean Kitchen Small Appliances
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Kitchen Cabinets
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-[14px] font-normal">
            Deep Clean Outside Of Kitchen Cabinets
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Ceiling Fan
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Light Fixtures
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Disinfecting Knobs
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Top Of Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Wastebaskets
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Switches
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Window Tracks
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Inside Windows
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Clean Blinds
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Window Sills
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Spot Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Walls & Doors
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Baseboards
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-base font-normal">
            Deep Clean Floor Washing
          </p>
        </div>
      </div>
      <p className="font-text text-lg font-normal leading-6 py-3">
        Do you require any
        <span className="font-subHeading font-bold"> laundry </span> to be done?
      </p>
      <p className="font-text text-sm font-normal">
        If you require ironing service only, there is a 2.5 hour minimum
        required
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              needIroning ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !needIroning && setNeedIroning(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !needIroning ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => needIroning && setNeedIroning(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="font-text text-lg font-normal leading-6">
        Do you require this service to be
        <span className="font-subHeading font-bold"> added ontop </span> of your
        CLEANING SERVICE?
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              addedOnTop ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !addedOnTop && setAddedOnTop(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !addedOnTop ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => addedOnTop && setAddedOnTop(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="fon-text text-base font-normal leading-6 text-darkColor">
        How many loads of
        <span className="font-subHeading font-bold"> laundry </span> do you need
        done?
      </p>
      <p className="font-text text-sm font-normal text-darkColor py-2">
        (Make sure to have the laundry ready and colours separated into baskets.
        Leave baskets in laundry room with a note attached &#39;Please
        wash&#39;. Each load on average takes 1 hour to wash and 1 hour to dry.)
      </p>
      <div className="my-4">
        <select className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md">
          <option value="2x a week">1 Load</option>
          <option value="3x a week">2 Load</option>
          <option value="3x a week">3 Load</option>
        </select>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Please leave detailed laundry instructions in the text box below:
        </p>
        <textarea
          placeholder="e.g. ‘clean all loads on cold wash only’"
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <p className="fon-text text-base font-normal leading-6 text-darkColor py-2">
        Do you require any
        <span className="font-subHeading font-bold"> ironing </span> to be done?
      </p>
      <p className="font-text text-sm font-normal">
        If you require ironing service only, there is a 2.5 hour minimum
        required
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              needIroning ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !needIroning && setNeedIroning(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !needIroning ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => needIroning && setNeedIroning(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="font-text text-lg font-normal leading-6">
        Do you require this service to be
        <span className="font-subHeading font-bold"> added ontop </span> of your
        CLEANING SERVICE?
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              addedOnTop ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !addedOnTop && setAddedOnTop(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !addedOnTop ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => addedOnTop && setAddedOnTop(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="fon-text text-base font-normal leading-6 text-darkColor">
        How pieces do you need
        <span className="font-subHeading font-bold"> ironed</span>?
      </p>
      <p className="font-text text-sm font-normal text-darkColor py-2">
        (Make sure to have the ironing placed in a basket next to the ironing
        board and have the iron unplugged on the ironing board. Please attach
        note on the basket &#39;Please iron&#39;. Each regular piece on average
        takes 5 minutes to iron. Extra time needed for larger pieces)
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-5 rounded-[7px]">
        <button
          onClick={() => ironPieces !== 0 && setIronPieces(ironPieces - 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center">{ironPieces}- Piece</p>
        <button
          onClick={() => setIronPieces(ironPieces + 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal py-2">
          Please leave detailed ironing instructions in the text box below:
        </p>
        <textarea
          placeholder="e.g. ‘use low heat only on the silk shirts’"
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <p className="font-text text-lg font-normal leading-6">
        Do you require any
        <span className="font-subHeading font-bold"> organizing </span> to be
        done?
      </p>
      <p className="font-text text-sm font-normal leading-5 py-3">
        If you require organizing service only, there is a 2.5 hour minimum
        required
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              isOrganizingneeded
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => !isOrganizingneeded && setIsOrganizingneeded(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !isOrganizingneeded
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => isOrganizingneeded && setIsOrganizingneeded(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="font-text text-lg font-normal leading-6">
        Do you require this service to be
        <span className="font-subHeading font-bold"> added ontop </span> of your
        CLEANING SERVICE?
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              addedOnTop ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !addedOnTop && setAddedOnTop(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !addedOnTop ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => addedOnTop && setAddedOnTop(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="font-text text-base font-normal text-darkColor leading-6">
        If so how much extra time do you require?
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-5 rounded-[7px]">
        <button
          onClick={() => extraTime !== 0 && setExtraTime(extraTime - 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center">{extraTime}- Minutes</p>
        <button
          onClick={() => setExtraTime(extraTime + 1)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>
      <p className="font-text text-lg font-normal leading-6 text-darkColor">
        Do you require
        <span className="font-subHeading font-bold"> appliance cleaning </span>
        only?
      </p>
      <p className="font-text text-sm font-normal leading-5 py-3">
        This service means you want for example your fridge or stove to be
        cleaned only. No other cleaning is needed.
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              applianceCleaning
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => !applianceCleaning && setApplianceCleaning(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !applianceCleaning
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => applianceCleaning && setApplianceCleaning(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="font-text text-base font-normal text-darkColor leading-5">
        If so, how much extra time do you require?
      </p>
      <p className="font-text text-base font-normal text-darkColor leading-5 py-3">
        There is a 2.5 hour minimum requirement for appliance cleaning only
        service
      </p>
      <div className="h-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 bg-secondaryColor bg-opacity-[0.1] flex justify-between  my-5 rounded-[7px]">
        <button
          onClick={() => extraHours !== 0 && setExtraHours(extraHours - 0.5)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiMinus />
        </button>
        <p className="self-center">{extraHours}- Hours</p>
        <button
          onClick={() => setExtraHours(extraHours + 0.5)}
          className=" bg-secondaryColor bg-opacity-[0.1] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md h-[100%] w-[40px]  border-[1px] flex justify-center items-center"
        >
          <HiPlus />
        </button>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal leading-6 py-2">
          Explain what appliances you want cleaned?
        </p>
        <textarea
          placeholder="e.g. ‘need fridge and oven cleaned only’"
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <p className="font-text text-base font-normal leading-6 py-2">
        If you want the stove cleaned, is the stove self cleaning or non self
        cleaning? (Click the button below that applies)
      </p>
      <div className="flex flex-wrap justify-between">
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-[14px] font-normal">
            Stove Cleaning Inside (Self Clean Oven)
          </p>
        </div>
        <div
          className="border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 flex justify-center items-center py-1 px-2 
        w-[48%]  rounded-md bg-secondaryColor bg-opacity-10 my-2"
        >
          <p className="font-text text-center text-[14px] font-normal">
            Stove Cleaning Inside (Non-Self Clean Oven)
          </p>
        </div>
      </div>
      <h3 className="font-heading text-2xl font-bold leading-6 text-darkColor py-3">
        Your Time Estimate
      </h3>
      <p className="font-text text-xl font-normal leading-6 text-darkColor py-3">
        We recommend selecting
        <span className="font-subHeading font-bold">______hours</span>
      </p>
      <p className="font-text text-sm font-normal">
        (Our minimum service is 2.5 hours)
      </p>
      <div className="flex justify-between items-center flex-wrap">
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 h-10 w-[85px] rounded-lg flex items-center justify-center my-3">
          2.5
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 h-10 w-[85px] rounded-lg flex items-center justify-center my-3">
          3.0
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 h-10 w-[85px] rounded-lg flex items-center justify-center my-3">
          3.5
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 h-10 w-[85px] rounded-lg flex items-center justify-center my-3">
          4.0
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 h-10 w-[85px] rounded-lg flex items-center justify-center my-3">
          4.5
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 h-10 w-[85px] rounded-lg flex items-center justify-center my-3">
          5.0
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 h-10 w-[85px] rounded-lg flex items-center justify-center my-3">
          5.5
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 h-10 w-[85px] rounded-lg flex items-center justify-center my-3">
          6.0
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 h-10 w-[85px] rounded-lg flex items-center justify-center my-3">
          6.5
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 h-10 w-[85px] rounded-lg flex items-center justify-center my-3">
          7.0
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 h-10 w-[85px] rounded-lg flex items-center justify-center my-3">
          7.5
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 h-10 w-[85px] rounded-lg flex items-center justify-center my-3">
          8.0
        </div>
      </div>
      <h3 className="font-subHeading text-2xl font-bold text-darkColor leading-7 my-3">
        You can also click on the time box you prefer.
      </h3>
      <p className="font-text text-sm font-normal text-darkColor leading-6">
        Note: you may be asked to click on fewer or more tasks based on your
        requested time.
      </p>
      <h3 className="font-subHeading text-2xl font-bold text-darkColor leading-7 my-3">
        Estimated time to clean a home
      </h3>
      <p className="font-text text-sm font-normal text-darkColor leading-6">
        Click the link to see our estimated cleaning time chart.
      </p>
      <LargeButton
        Text="Estimated Time Chart"
        customCode="justify-center bg-secondaryColor"
        color="text-lightColor"
        font="font-bold"
      />
      <p className="font-text text-lg font-normal leading-6">
        How can your cleaner access the property?
      </p>
      <div className="flex justify-between items-center flex-wrap py-5">
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-lg h-14 w-[48%] flex items-center justify-center py-6 px-2 my-2">
          Someone At Home
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-lg h-14 w-[48%] flex items-center justify-center py-6 px-8 my-2">
          Concierge
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-lg h-14 w-[48%] flex items-center justify-center py-6 px-8 my-2">
          Key Safe
        </div>
        <div className="bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-lg h-14 w-[48%] flex items-center justify-center py-6 px-6 my-2">
          Key Hidden
        </div>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal leading-6 py-2">
          Where is the key hidden?
        </p>
        <textarea
          placeholder="e.g. ‘under the front mat’"
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal leading-6 py-2">
          What is the key safe code?
        </p>
        <input
          type="number"
          className="w-full h-10 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <p className="font-text text-lg font-normal leading-6">
        Do you have an
        <span className="font-subHeading font-bold mr-2"> alarm system </span>
        on?
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              isalarmSystem ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !isalarmSystem && setISAlarmSystem(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !isalarmSystem
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => isalarmSystem && setISAlarmSystem(false)}
          >
            No
          </button>
        </div>
      </div>
      <p className="font-text text-lg font-normal text-darkColor leading-6">
        If yes, please have the system turned off at time of your clean or let
        your cleaner know the system code to turn off.
      </p>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal leading-6 py-2">
          What is the alarm code?
        </p>
        <input
          type="number"
          className="w-full h-10 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <p className="font-text text-lg font-normal leading-6">
        Is there
        <span className="font-subHeading font-bold mr-2">
          {" "}
          visitors parking{" "}
        </span>
        available?
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              isvisitorParking
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => !isvisitorParking && setIsVisitorParking(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !isvisitorParking
                ? "bg-darkColor text-lightColor "
                : "text-darkColor"
            }`}
            onClick={() => isvisitorParking && setIsVisitorParking(false)}
          >
            No
          </button>
        </div>
      </div>
      <div className="w-full my-5">
        <input
          type="text"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <p className="font-text text-lg font-normal leading-6">
        Do you have any
        <span className="font-subHeading font-bold mr-2"> pets </span> in the
        house when the cleaner will arrive?
      </p>
      <div className="my-4">
        <div className="w-28 flex justify-between  mb-5 bg-[#6762f01a] rounded-full">
          <button
            className={`font-text  text-base font-semibold w-[50%] py-1 rounded-full ${
              isPetInHouse ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => !isPetInHouse && setIsPetInHouse(true)}
          >
            Yes
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !isPetInHouse ? "bg-darkColor text-lightColor " : "text-darkColor"
            }`}
            onClick={() => isPetInHouse && setIsPetInHouse(false)}
          >
            No
          </button>
        </div>
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal leading-6 py-2">
          If so, explain what kind and how many?
        </p>
        <textarea
          placeholder="e.g. ‘3 cats and 1 dog’"
          type="number"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal leading-5 py-2">
          If you have <span className="font-subHeading font-bold"> dogs</span>,
          explain the breed and will they be ok with a cleaner in the house?
        </p>
        <textarea
          placeholder="e.g. ‘1 friendly hypoallergic poodle’"
          type="number"
          className="w-full h-20 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <div className="w-full my-5">
        <p className="font-text text-base font-normal leading-6 py-2">
          Please explain where your
          <span className="font-subHeading font-bold mr-2"> products</span>and
          <span className="font-subHeading font-bold mx-2"> supplies</span>be
          kept:
        </p>
        <textarea
          placeholder="e.g. ‘supplies will be left in the kitchen on the counter and vacuum, mop, broom left in the kitchen too.’"
          type="number"
          className="w-full h-32 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
      </div>
      <p className="font-text text-base font-normal leading-5 py-2">
        Click on the button for the list of{" "}
        <span className="font-subHeading"> cleaning supplies </span> and
        equipment we recommend to have ready for your clean.
      </p>
      <LargeButton
        Text="List of supplies"
        customCode="justify-center bg-secondaryColor"
        color="text-lightColor"
        font="font-bold"
      />
      <p className="font-text text-lg font-normal text-darkColor leading-5  my-5">
        Other <span className="font-subHeading font-bold mr-2">notes</span>you
        want to mention to your cleaner:
      </p>
      <p className="font-text text-sm text-darkColor font-normal leading-5">
        (Explain for example: where to dispose the trash, where to leave the
        dirty rags, if a family member will enter the home while the cleaner is
        there, what rooms or levels of the house you would prefer the cleaner to
        start and any other important notes your cleaner should know of)
      </p>
      <div className="w-full my-5">
        <input
          type="number"
          className="w-full h-80 bg-secondaryColor bg-opacity-10 border-[1px] border-[rgba(103,98,240,0.5)] border-opacity-70 rounded-md"
        />
        <p className="font-text text-xs font-normal text-darkColor">
          2000 word limit.
        </p>
      </div>
      <h3 className="font-text text-lg font-normal text-darkColor leading-6 my-5">
        What we <span className="font-subHeading font-bold">DO NOT</span> Clean
      </h3>
      <div className="bg-accentColor bg-opacity-20 rounded-md">
        <div className="flex py-4 px-4">
          {/*ICOn*/}
          <div className="w-[10%]">
            <GoPrimitiveDot className="text-secondaryColor text-lg mt-[3px] ml-1" />
          </div>
          <div className="w-[90%]">
            <p className="font-text text-sm font-normal text-darkColor leading-5 pr-4">
              We do not offer these services: carpets cleaning, upholstery
              cleaning, mattress cleaning, duct cleaning.
            </p>
          </div>
        </div>
        <div className="flex py-2 px-4">
          <div className="w-[10%]">
            <GoPrimitiveDot className="text-secondaryColor text-lg mt-[3px] ml-1" />
          </div>
          <div className="w-[90%]">
            <p className="font-text text-sm font-normal text-darkColor leading-5 pr-4">
              We do not clean the exterior of your property; no outside windows,
              walkways, driveways, garages, sheds, gardens, lawns, patio
              furniture, outside walls, etc.
            </p>
          </div>
        </div>
        <div className="flex py-2 px-4">
          <div className="w-[10%]">
            <GoPrimitiveDot className="text-secondaryColor text-lg mt-[3px] ml-1" />
          </div>
          <div className="w-[90%]">
            <p className="font-text text-sm font-normal text-darkColor leading-5 pr-4">
              We do not lift, pull out, or move heavy furniture or appliances
              such as: couches, fridges, ovens, bookshelves, washers, dryers,
              etc. The cleaners will try to reach underneath or around but we
              can&#39;t guarantee that that area will be completely cleaned
              under and around all furniture. If you want to have the area
              cleaned under a heavy piece of furniture or appliance, please move
              any large furniture beforehand.
            </p>
          </div>
        </div>
        <div className="flex py-2 px-4">
          <div className="w-[10%]">
            <GoPrimitiveDot className="text-secondaryColor text-lg mt-[3px] ml-1" />
          </div>
          <div className="w-[90%]">
            <p className="font-text text-sm font-normal text-darkColor leading-5 pr-4">
              The cleaners do not clean expensive breakable ornaments, expensive
              glassware, antiques, TV and computer screens, inside fireplaces,
              etc.
            </p>
          </div>
        </div>
        <div className="flex py-2 px-4">
          <div className="w-[10%]">
            <GoPrimitiveDot className="text-secondaryColor text-lg mt-[3px] ml-1" />
          </div>
          <div className="w-[90%]">
            <p className="font-text text-sm font-normal text-darkColor leading-5 pr-4">
              The cleaners not clean the inside of washers, dryers, and
              dishwashers.
            </p>
          </div>
        </div>
        <div className="flex py-2 px-4">
          <div className="w-[10%]">
            <GoPrimitiveDot className="text-secondaryColor text-lg mt-[3px] ml-1" />
          </div>
          <div className="w-[90%]">
            <p className="font-text text-sm font-normal text-darkColor leading-5 pr-4">
              The cleaners do not clean cat litter trays, empty cat litters or
              scoop out pet excrement from cat litters.
            </p>
          </div>
        </div>
        <div className="flex py-2 px-4">
          <div className="w-[10%]">
            <GoPrimitiveDot className="text-secondaryColor text-lg mt-[3px] ml-1" />
          </div>
          <div className="w-[90%]">
            <p className="font-text text-sm font-normal text-darkColor leading-5 pr-4">
              The cleaners not clean pet or human bodily fluids or excrement,
              mold, hazardous materials, dangerous chemicals, or deceased
              rodents/ vermin.
            </p>
          </div>
        </div>
        <div className="flex py-2 px-4">
          <div className="w-[10%]">
            <GoPrimitiveDot className="text-secondaryColor text-lg mt-[3px] ml-1" />
          </div>
          <div className="w-[90%]">
            <p className="font-text text-sm font-normal text-darkColor leading-5 pr-4">
              The cleaners do not clean ceilings or areas outside of a
              cleaner&#39;s reasonable reach (ie. high walls, high chandeliers,
              high shelves, light fixtures, or the tops of windows, any
              surfaces/area that is out of reach to the cleaner) If you provide
              a step ladder they will use that to reach areas just out of their
              reach, the cleaners do NOT climb on full ladders to clean
              chandeliers, for example.
            </p>
          </div>
        </div>
        <div className="flex py-2 px-4">
          <div className="w-[10%]">
            <GoPrimitiveDot className="text-secondaryColor text-lg mt-[3px] ml-1" />
          </div>
          <div className="w-[90%]">
            <p className="font-text text-sm font-normal text-darkColor leading-5 pr-4">
              The cleaners not wash or mop unfinished concrete.
            </p>
          </div>
        </div>
        <div className="flex py-2 px-4">
          <div className="w-[10%]">
            <GoPrimitiveDot className="text-secondaryColor text-lg mt-[3px] ml-1" />
          </div>
          <div className="w-[90%]">
            <p className="font-text text-sm font-normal text-darkColor leading-5 pr-4">
              The cleaners do not wash and delicate dishes like crystal, fine
              glassware or antique or laundry by hand.
            </p>
          </div>
        </div>
        <div className="flex py-2 px-4">
          <div className="w-[10%]">
            <GoPrimitiveDot className="text-secondaryColor text-lg mt-[3px] ml-1" />
          </div>
          <div className="w-[90%]">
            <p className="font-text text-sm font-normal text-darkColor leading-5 pr-4">
              The cleaners do not take any garbage or junk off the premises.
            </p>
          </div>
        </div>
        <div className="flex py-2 px-4">
          <div className="w-[10%]">
            <GoPrimitiveDot className="text-secondaryColor text-lg mt-[3px] ml-1" />
          </div>
          <div className="w-[90%]">
            <p className="font-text text-sm font-normal text-darkColor leading-5 pr-4">
              The cleaners has a right to refuse any cleaning jobs or areas that
              deem unsafe, extreme unsanitary conditions, or any other reason to
              their discretion.
            </p>
          </div>
        </div>
        <div className="flex py-2 px-4">
          <div className="w-[10%]">
            <GoPrimitiveDot className="text-secondaryColor text-lg mt-[3px] ml-1" />
          </div>
          <div className="w-[90%]">
            <p className="font-text text-sm font-normal text-darkColor leading-5 pr-4">
              If any reason the cleaner feels uncomfortable or unsafe on the
              premises for any reason, the cleaner has a right to leave the
              premises immediately.
            </p>
          </div>
        </div>
      </div>
      <p className="font-subHeading text-base font-bold leading-5 text-darkColor my-5">
        If the customer has not supplied the tools, equipment and cleaning
        supplies adequate enough to complete the clean, the cleaner has the
        right to refuse the cleaning job and the clean will be cancelled and can
        be rescheduled.
      </p>
      <LargeButton
        Text="Continue"
        color="text-lightColor"
        customCode="justify-center bg-secondaryColor"
        font="font-bold"
        toggle={navigation}
      />
      {/* <button className="next" type="submit" onClick={navigation}>
        Next
      </button> */}
      {/* <Link href="/cleanerdate">
        <a>next</a>
      </Link> */}
    </div>
  );
}

export default YourBookingInfo;
