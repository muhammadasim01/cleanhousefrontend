import { BsCheckLg } from "react-icons/bs";

function ServicesChecks() {
  return (
    <div className="flex border-2 border-secondaryColor items-start">
      <p>
        {" "}
        <BsCheckLg className="mr-2 mt-2 text-xl text-secondaryColor" />
      </p>
      <p className="font-text text-[22px] font-bold text-darkColor">
        GPS location of your cleaner from your app GPS location of your cleaner
        from your app GPS location of your cleaner from your app
      </p>
    </div>
  );
}

export default ServicesChecks;
