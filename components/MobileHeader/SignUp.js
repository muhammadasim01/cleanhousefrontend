import { useRouter } from "next/router";
import { useState } from "react";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { IoRadioButtonOff } from "react-icons/io";
import PrimaryButton from "./PrimaryButton";
import SecondryButton from "./SecondryButton";
function SignUp() {
  const [password, setPassword] = useState(false);
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(!password);
  };
  const router = useRouter();
  const navigate = (e) => {
    e.preventDefault();
    router.push("/verifyaccount");
  };
  return (
    <div className="flex flex-col h-[1300px] w-full items-center justify-between ">
      <form className="w-full  ">
        <div className="flex    justify-between items-center my-2">
          <div className="flex flex-col justify-between items-start  mx-2 w-[50%]">
            <p className="text-left font-subHeading text-2xl font-bold my-2 ">
              First Name
            </p>
            <input
              type="text"
              name="firstName"
              className=" focus:ring-0 bg-[#E8EDF5] w-[100%] border-none decoration-0   py-2  rounded-md "
            />
          </div>
          <div className="flex flex-col justify-between  items-start mx-2 w-[50%]">
            <p className="text-left font-subHeading text-2xl font-bold my-2">
              Last Name
            </p>
            <input
              type="text"
              name="lastName"
              className="focus:ring-0 bg-[#E8EDF5] w-[100%] border-none decoration-0 outline-none    py-2  rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col items-start  mx-[10px] my-3">
          <p className="text-left font-subHeading text-2xl font-bold my-2  ">
            Email
          </p>
          <input
            type="text"
            name="lastName"
            className="w-[100%] focus:ring-0 bg-[#E8EDF5] border-none decoration-0 outline-none    py-2  rounded-md "
          />
        </div>

        <div className="flex justify-between  mx-[10px] my-3">
          <div className="w-[35%]  mr-[4px]">
            <p className="text-left font-subHeading text-2xl font-bold my-2 ">
              Country
            </p>
            <div className="">
              <select className="focus:ring-0 w-full border-none border-opacity-70 py-2 bg-[#E8EDF5]  rounded-md">
                <option
                  value="2x a week"
                  className="font-text text-sm text-left"
                >
                  +1 (CA)
                </option>
                <option
                  value="3x a week"
                  className="font-text text-sm text-left"
                >
                  +1 (USA)
                </option>
              </select>
            </div>
          </div>
          <div className="w-[65%]  ml-[4px]">
            <p className="text-left font-subHeading text-2xl font-bold my-2 ">
              Mobile
            </p>
            <input
              type="number"
              name=""
              id=""
              className="w-full bg-[#E8EDF5] border-none rounded-md focus:ring-0  border-opacity-70"
            />
          </div>
        </div>
        <div className="flex flex-col items-start  mx-[10px] my-5">
          <div className="flex justify-between items-center w-full">
            <p className="text-left font-subHeading text-2xl font-bold my-2 ">
              Password
            </p>
            <p className="text-[16px] font-text">At least 8 characters</p>
          </div>
          <div className="w-[100%] flex bg-[#E8EDF5]  decoration-0 outline-none   border-opacity-70 rounded-md ">
            <input
              type={password ? "text" : "password"}
              name="lastName"
              className="w-[300px] decoration-0 outline-none border-none bg-[#E8EDF5] rounded-l-md focus:ring-0 "
            />
            <button
              onClick={handlePassword}
              className="font-subHeading text-lg font-bold mx-2"
            >
              Show
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start  mx-[10px]">
          <p className="text-left font-subHeading text-[26px] font-bold leading-[33px] my-2 ">
            How did you hear about us? <span className="font-text text-[22px] leading-6">(Optional)</span> 
          </p>
          <select className="w-[100%] bg-[#E8EDF5] border-none decoration-0 outline-none  focus:ring-0 py-2 rounded-md">
            <option value="2x a week" className="font-text text-sm text-left">
              Select an option
            </option>
            <option value="3x a week" className="font-text text-sm text-left">Google</option>
            <option value="3x a week" className="font-text text-sm text-left">Yahoo</option>
            <option value="3x a week" className="font-text text-sm text-left">Other Search Engine</option>
            <option value="3x a week" className="font-text text-sm text-left">Facebook</option>
            <option value="3x a week" className="font-text text-sm text-left">Twitter</option>
            <option value="3x a week" className="font-text text-sm text-left">Instagram</option>
            <option value="3x a week" className="font-text text-sm text-left">YouTube</option>
            <option value="3x a week" className="font-text text-sm text-left">TikTok</option>
            <option value="3x a week" className="font-text text-sm text-left">Other Social Media</option>
            <option value="3x a week" className="font-text text-sm text-left">Referred by Someone</option>
          </select>
        </div>
        <div className="flex  mx-[10px]">
          <div className="w-[15%] bg-lightColor flex justify-center pt-5">
            <input
              type="checkbox"
              className="h-10 w-10  border-none focus:ring-0 bg-[#E8EDF5]  rounded-md"
            />
          </div>
          <div className="w-[85%]">
            <p className="font-text text-base font-normal my-4 px-3">
              Yes, keep me updated with new features and promotions. I can
              opt-out at any time.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <SecondryButton Title="Sign Up" navigate={navigate} />
        </div>
      </form>
      <p className="w-full flex items-center justify-center">
        <span className="border-b-2 w-32 mr-3 text-[#A9A9A9]"></span>
        <span className="mb-1 font-text text-sm font-light">or</span>
        <span className="border-b-2 w-32 ml-3 text-[#A9A9A9]"></span>{" "}
      </p>
      <PrimaryButton
        // action={SignInWithGoogle}
        logo={<FcGoogle />}
        Title="Continue with Google"
        customCode="bg-[#4285F4] justify-evenly
        "
        bgColor="bg-lightColor"
      />
      <PrimaryButton
        // action={SignInWithFacebook}
        logo={<BsFacebook />}
        Title="Continue with Facebook"
        customCode="bg-[#3B5998] justify-evenly"
      />
      <PrimaryButton
        logo={<BsApple />}
        Title="Continue with Apple"
        customCode="bg-[#000000] justify-evenly"
      />
      <p className="font-text text-sm leading-[22px] font-normal mt-4 mx-4  px-2">
        By tapping “Sign Up” or “ Continue with Google, Facebook, or Apple” you
        agree to Maidzly{" "}
        <span className="text-primaryColor">Terms & Services </span> and{" "}
        <span className="text-primaryColor">Privacy Policy</span>.
      </p>
      <div className="border-b-2 w-72 text-[#A9A9A9]"></div>
      <div className="text-center mb-10">
        <p className="font-text text-base font-semibold  px-3">
          Already have a Maidzly account?
        </p>
        <button onClick={()=>router.push({pathname:"signin"})} className="px-3 text-primaryColor font-subHeading text-xl font-light underline">
          Sign In Now
        </button>
      </div>
    </div>
  );
}

export default SignUp;
