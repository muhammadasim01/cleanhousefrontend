import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";
import photo from "../../public/assets/Features-Card-Image2.png";
import CheckList from "./CheckList";
function FeaturedCard2({ Title, src }) {
  return (
    <div className="px-5 bg-lightColor mt-10 rounded-md shadow-[2px_6px_20px_-6px_rgba(0,0,0,0.5)]">
      <h3 className="font-subHeading text-[40px] font-bold py-5">Services</h3>
      <div>
        <img src="assets/Features-Card-Image2.png" alt="" />
      </div>
      <div className="pt-5 py-3">
        <CheckList CheckText="House cleaning, apartment cleaning, condo cleaning, office cleaning, commercial cleaning and holiday rental cleaning" />
        <CheckList CheckText="Weekly cleaning, bi-weekly, monthly and one time cleaning" />
        <CheckList CheckText="Regular cleaning" />
        <CheckList CheckText="Deep cleaning" />
        <CheckList CheckText="Spring cleaning" />
        <CheckList CheckText="Move in/out cleaning" />
        <CheckList CheckText="Post construction & home renovation cleaning" />
        <CheckList CheckText="Appliance cleaning" />
        <CheckList CheckText="Organizing & decluttering" />
        <CheckList CheckText="Laundry" />
        <CheckList CheckText="Ironing" />
      </div>
    </div>
  );
}

export default FeaturedCard2;
