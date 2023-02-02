import React from "react";

function SecondryButton({ Title, navigate }) {
  return (
    <button
      onClick={navigate}
      className="bg-secondaryColor h-12 w-[290px] flex justify-center items-center m-5 rounded-lg"
    >
      <p className="font-subHeading text-lightColor text-[20px] font-bold leading-[34px]">{Title}</p>
    </button>
  );
}

export default SecondryButton;
