import { MdOutlineVerified } from "react-icons/md";
import LargeButton from "./LargeButton";
import Header from "../Header";
import Link from "next/link";
import Footer from "../Footer";
import CleanerStep from "./CleanerStep";
function BackgroundCheck() {
  return (
    <>
      <Header bgColor={"bg-lightColor"} />
      <div className="p-4">
        <CleanerStep first={true} second={true} />
      </div>
      <div className=" p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-subHeading  text-[26px] font-bold text-left leading-[33px]">
            Background Check
          </h2>
          <MdOutlineVerified className="text-2xl" />
        </div>
        <div>
          <p className="font-text text-[18px] font-normal leading-[23px] py-2">
            Authorize your{" "}
            <span className="font-subHeading font-bold">background check </span>
          </p>
          <p className="font-text text-sm font-normal leading-[19px] py-2 text-left">
            Build trust with your clients by applying for a background check. A
            one time fee of $25 (usd) will be applied to your credit card after
            completing this step. Approval will take 5 business days and we will
            email you your background check upon delivery. Fees are non
            refundable after submission. You will also receive a email once your
            information has been submitted.
          </p>
        </div>
        <form>
          <div className="my-4">
            <p className="font-text text-lg font-normal py-2 leading-[25px]">
              Name on card
            </p>
            <input
              type="text"
              placeholder="Name on card"
              className="border-2 border-secondaryColor focus:ring-0 border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
          <div className="my-4">
            <p className="font-text text-lg font-normal py-2 leading-[25px]">
              Card number
            </p>
            <input
              type="number"
              placeholder="1234 1234 1234 1234"
              className="border-2 border-secondaryColor focus:ring-0 border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
          <div className="flex items-center">
            <div className="mb-4 w-[48%] mx-2">
              <p className="font-text text-lg font-normal py-2 leading-[25px]">
                Expiry date
              </p>
              <input
                type="number"
                placeholder="MM/YY"
                className="border-2 border-secondaryColor focus:ring-0 border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
              />
            </div>
            <div className="mb-4 w-[48%] mx-2">
              <p className="font-text text-lg font-normal py-2 leading-[25px]">
                CVC
              </p>
              <input
                type="number"
                placeholder="123"
                className="border-2 border-secondaryColor focus:ring-0 border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
              />
            </div>
          </div>
          <div className="my-2 flex items-center border-2 border-secondaryColor focus:ring-0 border-opacity-70 bg-secondaryColor bg-opacity-10 py-2 rounded-lg">
            <input
              type="checkbox"
              className="h-[30px] w-[30px] focus:ring-0 ml-3 border-0  border-secondaryColor border-opacity-10 bg-lightColor rounded-md"
            />
            <label className="font-text text-[16px] font-normal px-4 leading-[22px]">
              Use my primary address as the billing address
            </label>
          </div>
          <div className="my-4">
            <p className="font-text text-lg font-normal py-2 leading-[25px]">
              Country
            </p>
            <select className="border-2 border-secondaryColor focus:ring-0 border-opacity-70 w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md">
              <option value="3x a week">CANADA</option>
              <option value="2x a week">USA</option>
            </select>
          </div>
          <div className="my-4">
            <p className="font-text text-lg font-normal py-2 leading-[25px]">
              Address Line 1
            </p>
            <input
              type="text"
              //   placeholder="Address"
              className="border-2 border-secondaryColor focus:ring-0 border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
          <div className="my-4">
            <p className="font-text text-lg font-normal py-2 leading-[25px]">
              Address Line 2
            </p>
            <input
              type="text"
              //   placeholder="Address"
              className="border-2 border-secondaryColor focus:ring-0 border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
          <div className="my-4">
            <p className="font-text text-lg font-normal py-2 leading-[25px]">
              City/Town
            </p>
            <input
              type="text"
              className="border-2 border-secondaryColor focus:ring-0 border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
          <div className="my-4">
            <p className="font-text text-lg font-normal py-2 leading-[25px]">
              {" "}
              State or province{" "}
            </p>
            <select className="border-2 border-secondaryColor focus:ring-0 border-opacity-70 w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md">
              <option value="2x a week"></option>
              <option value="3x a week">CANADA</option>
            </select>
          </div>
          <div className="my-4">
            <p className="font-text text-lg font-normal py-2 leading-[25px]">
              Zip / postal / postcode
            </p>
            <input
              type="number"
              className="border-2 border-secondaryColor focus:ring-0 border-opacity-70 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>

          <Link href="/uploadphoto">
            <div>
              <LargeButton
                Text="Save & Continue"
                customCode="justify-center bg-secondaryColor"
                color="text-lightColor"
                font="font-bold"
              />
            </div>
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default BackgroundCheck;
