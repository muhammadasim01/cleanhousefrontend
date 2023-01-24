import { BsCheckLg } from "react-icons/bs";

function CheckList({ CheckText }) {
  return (
    <div className="flex items-start my-[6px]">
      <p>
        <BsCheckLg className="mr-2 mt-2 text-xl font-extralight text-secondaryColor" />
      </p>
      <p className="font-text text-[21px] font-normal leading-[30px] text-darkColor">
        {CheckText}
      </p>
    </div>
  );
}

export default CheckList;
