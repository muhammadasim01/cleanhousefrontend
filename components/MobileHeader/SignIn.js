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
  getAuth,
  OAuthProvider,
} from "firebase/auth";
import auth from "../../firebase";
import { useRouter } from "next/router";
import Link from "next/link";
import Footer from "../Footer";
function SignIn() {
  const [password, setPassword] = useState(false);
  const Googleprovider = new GoogleAuthProvider();
  const Facebookprovider = new FacebookAuthProvider();
  const provider = new OAuthProvider("apple.com");
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

  const SignInWithApple = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // Apple credential
        const credential = OAuthProvider.credentialFromResult(result);
        console.log("The credentail from Apple ::", credential);
        const accessToken = credential.accessToken;
        console.log("the AccessToken from Apple ::", accessToken);
        const idToken = credential.idToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The credential that was used.
        const credential = OAuthProvider.credentialFromError(error);

        // ...
      });
  };

  return (
    <>
      <div className="flex flex-col w-[320px] items-center">
        <div className="w-[320px] flex flex-col items-center justify-between h-[180px]">
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
            action={SignInWithApple}
            Title="Continue with Apple"
            customCode="bg-[#000000] justify-evenly"
          />
        </div>
        <p className="w-full flex items-center justify-center my-5">
          <span className="border-b-2 w-16 mr-3 text-[#A9A9A9] "></span>
          <span className="mb-1 font-text text-sm font-light">
            or continue with email
          </span>
          <span className="border-b-2 w-16 ml-3 text-[#A9A9A9]"></span>{" "}
        </p>
        <form className="w-full flex flex-col justify-center">
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
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-2 border-2 border-secondaryColor rounded-sm"
              />
              <p>Remeber Me</p>
            </div>
            <p className="font-text text-base font-normal underline">
              <Link href="/forgotpassword">Forgot your password?</Link>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <SecondryButton
              Title="Sign In"
              navigate={navigate}
              customWidth={"w-[190px]"}
            />
          </div>
        </form>
        <p className="w-full font-text text-sm leading-[22px] font-normal text-center mx-4  px-2 my-5">
          By signing in, I agree to Maidzly{" "}
          <span className="text-primaryColor">Terms of Services </span> and{" "}
          <span className="text-primaryColor mr-2">Privacy</span>
          Policy, confirm that I am 18 years of age or older, and concent to
          receiving email communication.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
