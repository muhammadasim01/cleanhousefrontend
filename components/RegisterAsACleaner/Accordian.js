import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
function Accordian({heading,text,listItem1,listItem2,listItem3,checklist1,checklist2,checklist3,
  checklist4,checklist5,checklist6,checklist7,checklist8,checklist9}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="flex flex-col p-3 border-b-2 text-[#77777733] cursor-pointer"
    >
      <div className="flex flex-row">
        <p
          className={`font-text text-[22px] w-[80%]  font-medium mx-2 leading-[26px] ${
            expanded ? "text-secondaryColor" : "text-darkColor"
          }`}
        >
         {heading}
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
        <p className="font-text text-base text-darkColor font-normal leading-5 mx-2 my-3">
         {text}
        </p>
        <div>
          <div>
          <p className="font-text text-base text-darkColor font-normal leading-5 mx-2 my-3">
            {listItem1}
          </p>
          <p className="font-text text-base text-darkColor font-normal leading-5 mx-2 my-3">
            {listItem2}
          </p>
          <p className="font-text text-base text-darkColor font-normal leading-5 mx-2 my-3">
            {listItem3}
          </p>
          </div>
          <div>
          {checklist1 && 
          <div>
          <p className="font-text text-base flex  text-darkColor font-normal leading-5 mx-2 my-3">
           <p className="w-[20%] mt-[2px]"><GiCheckMark /></p>
           <p className="text-left">{checklist1}</p>
          </p>
          <p className="font-text text-base flex  text-darkColor font-normal leading-5 mx-2 my-3">
           <p className="w-[10%] mt-[2px]"><GiCheckMark /></p>
           <p className="text-left">{checklist2}</p>
          </p>
          <p className="font-text text-base flex  text-darkColor font-normal leading-5 mx-2 my-3">
           <p className="w-[30%] mt-[2px]"><GiCheckMark /></p>
           <p className="text-left">{checklist3}</p>
          </p>
          <p className="font-text text-base flex  text-darkColor font-normal leading-5 mx-2 my-3">
           <p className="w-[30%] mt-[2px]"><GiCheckMark /></p>
           <p className="text-left">{checklist4}</p>
          </p>
          <p className="font-text text-base flex  text-darkColor font-normal leading-5 mx-2 my-3">
           <p className="w-[25%] mt-[2px]"><GiCheckMark /></p>
           <p className="text-left">{checklist5}</p>
          </p>
          <p className="font-text text-base flex  text-darkColor font-normal leading-5 mx-2 my-3">
           <p className="w-[20%] mt-[2px]"><GiCheckMark /></p>
           <p className="text-left">{checklist6}</p>
          </p>
          <p className="font-text text-base flex  text-darkColor font-normal leading-5 mx-2 my-3">
           <p className="w-[20%] mt-[2px]"><GiCheckMark /></p>
           <p className="text-left">{checklist7}</p>
          </p>
          <p className="font-text text-base flex  text-darkColor font-normal leading-5 mx-2 my-3">
           <p className="w-[30%] mt-[2px]"><GiCheckMark /></p>
           <p className="text-left">{checklist8}</p>
          </p>
          <p className="font-text text-base flex  text-darkColor font-normal leading-5 mx-2 my-3">
           <p className="w-[30%] mt-[2px]"><GiCheckMark /></p>
           <p className="text-left">{checklist9}</p>
          </p>
          </div>
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
