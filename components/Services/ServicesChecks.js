import { BsCheckLg } from "react-icons/bs";

function ServicesChecks({ CheckText }) {
  return (
    <div className="flex items-start mx-2">
      <p>
        {" "}
        <BsCheckLg className="mr-2 mt-2 text-xl text-secondaryColor" />
      </p>
      <p className="font-text text-[22px] font-bold text-darkColor">
        {CheckText}
      </p>
    </div>
  );
}

export default ServicesChecks;
