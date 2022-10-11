import React from "react";

function Button({ children }) {
  return (
    <button
      className="text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
  duration-500"
    >
      {children}
    </button>
  );
}

export default Button;
