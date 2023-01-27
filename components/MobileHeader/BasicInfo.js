import {GrFormNextLink } from "react-icons/gr";
import LargeButton from "./LargeButton";
import Header from "../Header";
import Link from "next/link";
import Footer from "../Footer";
import CleanerStep from "./CleanerStep";
function BasicInfo() {
  return (
    <>
      <Header bgColor={"bg-lightColor"} />
      <div className="p-4">
        <h2 className="font-subHeading  text-[40px] font-bold text-left leading-[52px]">
          Your Application
        </h2>
        <p className="font-subHeading text-lg font-bold  py-5 leading-[25px]">
          Complete the required EASY 3 steps to get approved!
        </p>
        <div className="flex items-center justify-center">
          <div className="border-2 border-secondaryColor border-opacity-50 rounded-md bg-secondaryColor bg-opacity-10 p-5 h-[120px] w-[205px]">
            <div className="flex justify-evenly items-center">
              <p className="font-suHeading text-[30px] font-bold leading-[42px]">1</p>
              <p>
                <GrFormNextLink className="text-darkColor text-[30px] font-extrabold" />
              </p>
              <p className="font-suHeading text-[30px] font-bold leading-[42px]">2</p>
              <p>
                <GrFormNextLink className="text-darkColor text-[30px] font-extrabold" />
              </p>
              <p className="font-suHeading text-[30px] font-bold leading-[42px]">3</p>
            </div>
            <p className="text-center font-subHeading text-[30px] font-bold py-2 leading-[42px]">
              easy steps!
            </p>
          </div>
        </div>
        <p className="font-text text-sm font-normal leading-5 py-5">
          To be approved, please complete all the form below. You will receive
          an email from us within 48 hours that you have been approved or that
          you need to complete additional steps and resubmit in order to be
          approved. Once you are approved or waiting for approval, you then can
          take our
          <span className="text-secondaryColor mx-2">
            Free Online Cleaning Course{" "}
          </span>{" "}
          to become certified! You will then be ready to work!
        </p>
        <div>
        <CleanerStep />
        </div>
      <div className=" my-5">
        <h3 className="font-heading text-[26px] font-bold leading-[33px]">Basic Info</h3>
        <div className="my-5">
          <p className="font-text text-[18px] font-normal leading-[23px] mb-3">Add your <span className="font-bold font-subHeading">address</span></p>
          <p className="font-text text-[14px] font-normal leading-5">Your address is not shared to your clients</p>
        </div>
      </div>
        <div className="my-4">
          <p className="font-text text-lg font-normal py-2">Address Line 1</p>
          <input
            type="text"
            //   placeholder="Address"
            className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
        </div>
        <div className="my-4">
          <p className="font-text text-lg font-normal py-2">Address Line 2</p>
          <input
            type="text"
            className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
        </div>
        <div className="my-4">
          <p className="font-text text-lg font-normal py-2">City</p>
          <input
            type="text"
            className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
        </div>
        <div className="my-4">
          <p className="font-text text-lg font-normal py-2">
            {" "}
            State or province{" "}
          </p>
          <select className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 bg-secondaryColor bg-opacity-10 rounded-md">
            <option value="2x a week">USA</option>
            <option value="3x a week">CANADA</option>
          </select>
        </div>
        <div className="my-4">
          <p className="font-text text-lg font-normal py-2">
            Zip / postal / postcode
          </p>
          <input
            type="number"
            className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
        </div>
        <div className="my-4">
          <p className="font-text text-lg font-normal py-2">Mobile Number</p>
          <div className="flex justify-between">
            <select className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-[40%] py-2 bg-secondaryColor bg-opacity-10 rounded-md">
              <option value="2x a week" className="font-text text-sm text-left">
                +1 (CA)
              </option>
              <option value="3x a week" className="font-text text-sm text-left">
                +2 (CA)
              </option>
              <option value="3x a week" className="font-text text-sm text-left">
                +3 (CA)
              </option>
              <option value="3x a week" className="font-text text-sm text-left">
                +4 (CA)
              </option>
            </select>
            <input
              type="number"
              className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-[50%] py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
            />
          </div>
        </div>
        <div className="my-2">
          <p className="font-text text-lg font-normal py-2">Email</p>
          <input
            type="email"
            className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
          <p className="font-text text-sm font-normal leading-5 py-3 text-darkColor">
            <span className="font-bold">Note: </span> We will email a
            confirmation link to your email address. Please check your junk
            folder in case you did not receive it.
          </p>
        </div>
        <h3 className="font-heading text-[26px] font-bold py-2 leading-[33px]">Emergency Contact</h3>
        <p className="font-text text-[18px] font-normal leading-[23px] py-2">
          Who can we contact, other than you, in case of an{" "}
          <span className="font-subHeading font-bold">emergency</span>?
        </p>
        <div className="my-2">
          <p className="font-text text-[18px] font-normal py-2 leading-[25px]">
            Emergency contact name
          </p>
          <input
            type="text"
            className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
        </div>
        <div className="my-2">
          <p className="font-text text-[18px] font-normal py-2 leading-[25px]">
            Emergency contact number
          </p>
          <input
            type="number"
            className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
        </div>
        <div className="my-2">
          <p className="font-text text-[18px] font-normal py-2 leading-[25px]">
            Please list all members of your household who are authorised to
            speak to us in case of an emergency.
          </p>
          <input
            type="number"
            className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
        </div>
        <h3 className="font-subHeading text-[26px] font-bold leading-[33px] my-5">Age Verification</h3>
        <div className="my-2">
          <p className="font-text text-[18px] font-normal py-2 leading-[23px]">
            We use this to conduct background checks when signing up to be a
            cleaner. We don&#39;t share or display this on your profile.
          </p>
        </div>
        <div className="my-4">
          <p className="font-text text-lg font-normal py-2 leading-[25px]">Month</p>
          <select className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md">
            <option value="2x a week">January</option>
            <option value="3x a week">February</option>
            <option value="3x a week">March</option>
            <option value="3x a week">Aprail</option>
          </select>
        </div>
        <div className="my-4">
          <p className="font-text text-lg font-normal py-2 leading-[25px]">Day</p>
          <select className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md">
            <option value="2x a week">01</option>
            <option value="3x a week">02</option>
            <option value="3x a week">03</option>
            <option value="3x a week">04</option>
            <option value="3x a week">05</option>
          </select>
        </div>
        <div className="my-4">
          <p className="font-text text-lg font-normal py-2 leading-[25px]">Year</p>
          <select className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md">
            <option value="2x a week">2022</option>
            <option value="3x a week">2021</option>
            <option value="3x a week">2022</option>
            <option value="3x a week">2023</option>
            <option value="3x a week">2024</option>
          </select>
        </div>
        <p className="font-text text-sm font-medium leading-5 py-2">
          <span className="font-bold"> Note: </span> You must be 18 years or
          older to sign up.
        </p>
        <h3 className="font-subHeading text-[26px] font-bold leading-[33px] my-2">Your Experience</h3>
        <div className="my-2">
          <p className="font-text text-[18px] font-normal leading-[23px] py-2">
            How much experience do you have in professional house cleaning?
          </p>
        </div>
        <div className="my-4">
          <select className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md">
            <option value="2x a week">No experience</option>
          </select>
        </div>
        <div className="my-2">
          <p className="font-text text-[18px] font-normal py-2 leading-[23px]">
            What type of cleaning experience do you have?
          </p>
        </div>
        <div className="my-2 flex items-center">
          <input
            type="checkbox"
            className="h-7 w-7  border-2  focus:ring-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
          />
          <label className="font-text text-base font-normal px-4 leading-[22px]">House cleaning</label>
        </div>
        <div className="my-2 flex items-center">
          <input
            type="checkbox"
            className="h-7 w-7  border-2 focus:ring-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
          />
          <label className="font-text text-base font-normal px-4 leading-[22px]">Hotel cleaning</label>
        </div>
        <div className="my-2 flex items-center">
          <input
            type="checkbox"
            className="h-7 w-7  border-2 focus:ring-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
          />
          <label className="font-text text-base font-normal px-4 leading-[22px]">Office cleaning</label>
        </div>
        <div className="my-2 flex items-center">
          <input
            type="checkbox"
            className="h-7 w-7  border-2 focus:ring-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
          />
          <label className="font-text text-base font-normal px-4 leading-[22px]">Hospital cleaning</label>
        </div>
        <div className="my-2 flex items-center">
          <input
            type="checkbox"
            className="h-7 w-7  border-2 focus:ring-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
          />
          <label className="font-text text-base font-normal px-4 leading-[22px]">
            Commercial cleaning
          </label>
        </div>
        <div className="my-2 flex items-center">
          <input
            type="checkbox"
            className="h-7 w-7  border-2 focus:ring-0 border-secondaryColor border-opacity-20 bg-secondaryColor bg-opacity-20 rounded-md"
          />
          <label className="font-text text-base font-normal px-4 leading-[22px]">Other cleaning</label>
        </div>
        <div className="my-2">
          <p className="font-text text-[18px] font-normal leading-[23px] py-2">
            Please briefly describe your cleaning experience.
          </p>
          <input
            type="text"
            placeholder="e.g. 'I cleaned houses through an agency for 3 years'"
            className=" border-2 focus:ring-0 h-20 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
        </div>
        <p className="font-text text-[8px] font-normal leading-[11px] text-end">
          2000 max characters
        </p>
        <h3 className="font-subHeading text-[26px] font-bold leading-[33px]">Request Testimonials</h3>
        <div className="my-2">
          <p className="font-text text-[18px] font-normal leading-[23px] py-2">
            Ask previous or current clients to give you a review. Your reviews
            will be published on your profile page if approved. You must submit
            at least 3 email addresses.
          </p>
        </div>
        <p className="font-text text-sm font-normal leading-5 py-2">
          You have sent 0 requests so far.
        </p>
        <div className="my-4">
          <p className="font-text text-lg font-normal py-2 leading-[25px]">
            Add email addresses
          </p>
          <input
            type="text"
            placeholder="email@domain.com"
            className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 my-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
          <input
            type="text"
            placeholder="email@domain.com"
            className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 my-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
          <input
            type="text"
            placeholder="email@domain.com"
            className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 my-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
          <input
            type="text"
            placeholder="email@domain.com"
            className=" border-2 focus:ring-0 border-secondaryColor border-opacity-50 w-full py-2 px-2 my-2 bg-secondaryColor bg-opacity-10 rounded-md"
          />
          <p className="font-text text-center text-secondaryColor text-sm font-normal leading-5">
            + Enter more email addresses
          </p>
        </div>
        <Link href="/backgroundcheck">
          <div>
            <LargeButton
              Text="Save & Continue"
              customCode="justify-center bg-secondaryColor"
              color="text-lightColor"
              font="font-bold"
            />
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default BasicInfo;
