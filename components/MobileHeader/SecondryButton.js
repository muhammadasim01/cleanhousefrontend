import React from "react";

function SecondryButton({ Title, navigate, customWidth }) {
  return (
    <button
      onClick={navigate}
      className={`bg-secondaryColor h-12 w-28 flex justify-center items-center m-5 rounded-lg ${customWidth}`}
    >
      <p className="font-subHeading text-lightColor text-[20px] font-bold leading-[34px]">
        {Title}
      </p>
    </button>
  );
}

export default SecondryButton;
