import Link from "next/link";
import { useRouter } from "next/router";
import { RiCheckboxBlankLine } from "react-icons/ri";
import logo2 from "../../public/assets/Maidzly-logo.png";
import Header from "../Header";
import GetAQuoteForm from "./GetAQuoteForm";
import LargeButton from "./LargeButton";
function GetAQuoteForm3() {
  const router = useRouter();
  const navigation = (e) => {
    e.preventDefault();
    router.push("/cleanerpayment");
  };
  return (
    <>
      <Header logo={logo2} position={"relative"} bgColor={"bg-lightColor"} />
      <GetAQuoteForm Title="Get Your Quote" />
      <div className="p-4">
        <h2 className="font-subHeading  text-[26px] font-bold leading-[33px] text-left mt-2 mb-4">
          Contact Information
        </h2>
        <p className="font-text text-[18px] font-normal leading-[25px]">
          Already have an account?{" "}
          <span className="text-secondaryColor">Log In</span>
        </p>
        <form>
          <div className="my-4">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border-2 border-secondaryColor border-opacity-50 w-full py-3 px-2 bg-secondaryColor bg-opacity-10 rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center px-2">
          <div className="w-[15%] bg-lightColor flex justify-center">
           <input
           type="checkbox"
           className="h-[30px] w-[30px] border-2 border-secondaryColor border-opacity-50 bg-secondaryColor bg-opacity-10 rounded-lg"
           />
          </div>
            <div className="w-[85%]">
              <p className="font-text text-base font-normal leading-[22px] my-4 px-3">
                Email me with news and offers
              </p>
            </div>
          </div>
          <div className="my-4">
            <p className="font-subHeading text-[26px] font-bold leading-[33px] mb-4">Address</p>
            <input
              type="text"
              placeholder="First Name"
              className="border-2 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-lg"
            />
          </div>
          <div className="my-4">
            <input
              type="text"
              placeholder="Last Name"
              className="border-2 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-lg"
            />
          </div>
          <div className="my-4">
            <select className="border-2 border-secondaryColor border-opacity-50 w-full py-2 bg-secondaryColor bg-opacity-10 rounded-lg">
              <option value="once a week">Country</option>
              <option value="2x a week">USA</option>
              <option value="3x a week">CANADA</option>
            </select>
          </div>
          <div className="my-4">
            <input
              type="text"
              placeholder="Address"
              className="border-2 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-lg"
            />
          </div>
          <div className="my-4">
            <input
              type="text"
              placeholder="Apt, suite, floor, etc (optional)"
              className="border-2 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-lg"
            />
          </div>
          <div className="my-4">
            <select className="border-2 border-secondaryColor border-opacity-50 w-full py-2 bg-secondaryColor bg-opacity-10 rounded-lg">
              <option value="once a week">Province</option>
              <option value="2x a week">USA</option>
              <option value="3x a week">CANADA</option>
            </select>
          </div>
          <div className="my-4">
            <input
              type="number"
              placeholder="Postal Code / Zip Code"
              className="border-2 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-lg"
            />
          </div>
          <div className="my-4">
            <input
              type="number"
              placeholder="Phone Number"
              className="border-2 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-lg"
            />
          </div>
          <LargeButton
            Text="Continue"
            customCode="justify-center bg-secondaryColor"
            color="text-lightColor"
            font="font-bold"
            toggle={navigation}
          />
          {/* <button className="next" type="submit" onClick={navigation}>
            next
          </button> */}
          {/* <Link href="/cleanerpayment">
            <a>next</a>
          </Link> */}
        </form>
      </div>
    </>
  );
}

export default GetAQuoteForm3;
