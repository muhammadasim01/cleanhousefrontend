import PrimaryButton from "./PrimaryButton";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import SecondryButton from "./SecondryButton";
import { useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import auth from "../../firebase";
import { useRouter } from "next/router";
function SignIn() {
  const [password, setPassword] = useState(false);
  const Googleprovider = new GoogleAuthProvider();
  const Facebookprovider = new FacebookAuthProvider();
  const router = useRouter();
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(!password);
  };

  const navigate = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const SignInWithGoogle = () => {
    signInWithPopup(auth, Googleprovider)
      .then(({ user }) => {
        console.log(user);
      })
      .catch((error) => alert(error.message));
  };

  const SignInWithFacebook = () => {
    signInWithPopup(auth, Facebookprovider)
      .then(({ user }) => {
        // The signed-in user info.
        console.log("The user Data is:", user);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(user);
        console.log("The Credentails=", credential);
        const accessToken = credential.accessToken;
        console.log("The Access Token=", accessToken);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log("The Error Code=", errorCode);
        const errorMessage = error.message;
        console.log("The Error Message=", errorMessage);
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log("The Credentails=", credential);

        // ...
      });
  };
  return (
    <div className="flex flex-col w-[320px] justify-between items-center h-[800px]">
      <PrimaryButton
        action={SignInWithGoogle}
        logo={<FcGoogle />}
        Title="Continue with Google"
        customCode="bg-[#4285F4] justify-evenly
        "
        bgColor="bg-lightColor"
      />
      <PrimaryButton
        action={SignInWithFacebook}
        logo={<BsFacebook />}
        Title="Continue with Facebook"
        customCode="bg-[#3B5998] justify-evenly"
      />
      <PrimaryButton
        logo={<BsApple />}
        Title="Continue with Apple"
        customCode="bg-[#000000] justify-evenly"
      />
      <p className="w-full flex items-center justify-center">
        <span className="border-b-2 w-16 mr-3 text-[#A9A9A9] "></span>
        <span className="mb-1 font-text text-sm font-light">
          or continue with email
        </span>
        <span className="border-b-2 w-16 ml-3 text-[#A9A9A9]"></span>{" "}
      </p>
      <form className="w-full flex flex-col justify-center  pt-5 ">
        <p className="text-left font-subHeading text-2xl font-bold  my-2">
          Email
        </p>
        <div className=" flex  decoration-0 outline-none  border-opacity-70   my-2">
          <input
            type="email"
            name="email"
            className="w-[100%] focus:ring-0 decoration-0 outline-none border-none bg-[#E8EDF5] rounded-md"
          />
        </div>
        <p className="text-left font-subHeading text-2xl font-bold  my-2">
          Password
        </p>
        <div className=" flex  decoration-0 outline-none  border-opacity-70   my-2">
          <input
            type={password ? "text" : "password"}
            name="password"
            className="w-[80%] focus:ring-0 decoration-0 outline-none border-none bg-[#E8EDF5] rounded-l-md"
          />
          <button
            onClick={handlePassword}
            className="font-subHeading w-[20%] text-lg font-bold px-2 bg-[#E8EDF5] rounded-r-md "
          >
            Show
          </button>
        </div>
        <p className="font-text text-base font-normal  mt-5">
          Forgot your password?
        </p>
        <div className="flex items-center justify-center">
          <SecondryButton Title="Sign In" navigate={navigate} />
        </div>
      </form>
      <p className="text-center px-2 pb-5 font-text text-[22px] leading-[140%] mb-4">
        By signing in, I agree to Maidzly{" "}
        <span className="text-primaryColor">Terms of Services </span> and{" "}
        <span className="text-primaryColor mr-2">Privacy</span>
        Policy, confirm that I am 18 years of age or older, and concent to
        receiving email communication.
      </p>
    </div>
  );
}

export default SignIn;
