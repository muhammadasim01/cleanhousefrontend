import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Accordian() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="flex flex-col p-3 border-b text-gray-light cursor-pointer border-2"
    >
      <div className="flex flex-row">
        <p
          className={`font-subHeading text-xl w-[80%]  font-bold mx-2 leading-6 ${
            expanded ? "text-secondaryColor" : "text-darkColor"
          }`}
        >
          Am I eligible to become a cleaner?
        </p>
        <p
          className={`text-3xl ${
            expanded ? "text-secondaryColor" : "text-darkColor"
          }`}
        >
          {expanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </p>
      </div>
      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
          expanded ? "max-h-30" : "max-h-0"
        }`}
      >
        <p className="font-text text-base text-darkColor leading-5 mx-2 my-3">
          You must be a resident of Canada or USA. You need to be at least 18
          years old and have no criminal record. You also must have a mobile
          phone with a data plan and have a bank account (in Canada/USA). Our
          cleaners come from a variety of backgrounds, including students,
          recent graduates, babysitters, nannies, seasonal workers, entry-level
          job seekers, retirees, and contract workers. But of course, nothing is
          more important than a having the freedom to work when you want.
        </p>
      </div>
    </div>
  );
}

export default Accordian;
