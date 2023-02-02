// import Image from "next/image";
// import VerifyEmailImage1 from "../../public/assets/UpdateEmail-1.png";
// import VerifyEmailImage2 from "../../public/assets/UpdateEmail-2.png";
import SecondryButton from "./MobileHeader/SecondryButton";
import TertiaryButton from "./MobileHeader/TertiaryButton";
function Forgot() {
  return (
    <div>
      <h2 className="text-center font-heading text-2xl font-bold py-8 px-5">
        Forgot password?
      </h2>
      {/* <div className="flex h-52 w-full flex-col justify-center items-center bg-[url('../public/assets/VerifyEmail-1.png')] bg-no-repeat bg-center">
        <img src="/assets/UpdateEmail-2.png" alt="" />
      </div> */}
      <p className="font-text text-base mx-4 text-center font-medium leading-6 ">
        Please enter the email address you used to create your account, and we
        will send you a link to reset your password.
      </p>
      <form>
        <p className="text-left font-subHeading text-2xl font-bold my-2 px-4">
          Email Address
        </p>
        <input
          type="text"
          name="lastName"
          placeholder="Check your email for code"
          className="w-[300px]  bg-secondaryColor bg-opacity-10 decoration-0 outline-none border-[1.7px] border-secondaryColor border-opacity-50  py-2 px-4 rounded-md mx-4"
        />
        <div className="flex flex-col items-center justify-center pb-8">
          <SecondryButton Title="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Forgot;
