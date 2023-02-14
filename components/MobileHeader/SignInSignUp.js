import { useState } from "react";
import MobileMenu from "../MobileMenu";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Header from "../Header";
import logo2 from "../../public/assets/Maidzly-logo.png";
function SignInSignUp({ toggle }) {
  const [isSignIn, setIsSignIn] = useState(toggle);
  const handleSignInButton = () => {
    !isSignIn && setIsSignIn(true);
  };
  const handleSignUpButton = () => {
    isSignIn && setIsSignIn(false);
  };
  return (
    <>
      <Header bgColor={"bg-lightColor"} />
      <div className="flex flex-col w-auto h-auto justify-between items-center">
        <h1 className="font-heading text-3xl font-bold py-8 px-5">
          Sign In or Sign Up
        </h1>
        <div className="w-[10rem] flex justify-between  mb-5 bg-[#E8EDF5] rounded-full">
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              isSignIn ? "bg-darkColor text-lightColor" : "text-darkColor"
            }`}
            onClick={handleSignInButton}
          >
            Sign In
          </button>
          <button
            className={`font-text text-base font-semibold w-[50%] py-1 rounded-full ${
              !isSignIn ? "bg-darkColor text-lightColor" : "text-darkColor"
            }`}
            onClick={handleSignUpButton}
          >
            Sign Up
          </button>
        </div>
        {isSignIn ? <SignIn /> : <SignUp />}
      </div>
    </>
  );
}

export default SignInSignUp;
