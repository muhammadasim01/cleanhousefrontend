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
      <Header logo={logo2} position={"relative"} />
      <GetAQuoteForm Title="Get Your Quote" />
      <div className="p-4">
        <h2 className="font-subHeading  text-xl font-bold text-left">
          Contact Information
        </h2>
        <p>
          Already have an account?{" "}
          <span className="text-secondaryColor">Log In</span>
        </p>
        <form>
          <div className="my-4">
            {/* <p>Others:</p> */}
            <input
              type="text"
              placeholder="Enter your email address"
              className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
          <div className="flex px-2">
            <div className="w-[15%] bg-lightColor flex justify-center pt-5">
              <RiCheckboxBlankLine className="h-8 w-8 text-[#E8EDF5] bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50 rounded-md" />
            </div>
            <div className="w-[85%]">
              <p className="font-text text-base font-normal my-4 px-3">
                Email me with news and offers
              </p>
            </div>
          </div>
          <div className="my-4">
            <p className="font-subHeading text-2xl font-bold mb-4">Address</p>
            <input
              type="text"
              placeholder="First Name"
              className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
          <div className="my-4">
            <input
              type="text"
              placeholder="Last Name"
              className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
          <div className="my-4">
            <select className="border-2 border-secondaryColor border-opacity-70 w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md">
              <option value="once a week">Country</option>
              <option value="2x a week">USA</option>
              <option value="3x a week">CANADA</option>
            </select>
          </div>
          <div className="my-4">
            <input
              type="text"
              placeholder="Address"
              className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
          <div className="my-4">
            <input
              type="text"
              placeholder="Apt, suite, floor, etc (optional)"
              className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
          <div className="my-4">
            <select className="border-2 border-secondaryColor border-opacity-70 w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md">
              <option value="once a week">Province</option>
              <option value="2x a week">USA</option>
              <option value="3x a week">CANADA</option>
            </select>
          </div>
          <div className="my-4">
            <input
              type="number"
              placeholder="Postal Code / Zip Code"
              className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
          <div className="my-4">
            <input
              type="number"
              placeholder="Phone Number"
              className="border-2 border-secondaryColor border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
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
