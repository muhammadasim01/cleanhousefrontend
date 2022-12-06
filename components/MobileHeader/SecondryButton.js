import React from "react";

function SecondryButton({ Title, navigate }) {
  return (
    <button
      onClick={navigate}
      className="bg-secondaryColor h-10 w-28 flex justify-center items-center m-5 rounded-lg"
    >
      <p className="font-subHeading text-lightColor font-normal">{Title}</p>
    </button>
  );
}

export default SecondryButton;
