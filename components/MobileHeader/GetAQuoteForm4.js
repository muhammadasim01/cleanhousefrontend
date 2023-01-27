import Image from "next/image";
import { BsInfoCircle } from "react-icons/bs";
import GpayIcon from "../../public/assets/GPay_logo.png";
import materCard from "../../public/assets/mastercard.png";
import visaCard from "../../public/assets/visacard.png";
import americanCard from "../../public/assets/americancard.png";
import Paypal from "../../public/assets/PayPal.png";
import { FcGoogle } from "react-icons/fc";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsPaypal } from "react-icons/bs";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import LargeButton from "./LargeButton";
import GetAQuoteForm from "./GetAQuoteForm";
import { useRouter } from "next/router";
import logo2 from "../../public/assets/Maidzly-logo.png";
import Link from "next/link";
import Header from "../Header";
function GetAQuoteForm4() {
  const router = useRouter();
  const navigation = (e) => {
    e.preventDefault();
    router.push("/bookingsummary");
  };
  return (
    <>
      <Header logo={logo2} position={"relative"} bgColor={"bg-lightColor"} />
      <div className=" px-4">
        <GetAQuoteForm
          Title="Get Your Quote"
          fourth={true}
          first={true}
          second={true}
          third={true}
        />
      </div>
      <div className="px-4 ">
        <h2 className="font-subHeading  text-[26px] font-bold leading-[33px] text-left my-2">
          Payment Information
        </h2>
        <div className="flex py-2">
          <BsInfoCircle className="text-secondaryColor text-2xl font-bold w-[10%]" />
          <p className="w-[90%] font-text text-sm font-normal px-2 leading-5">
            You will only be charged after your clean is completed. You can
            change or cancel this schedule at any time.
          </p>
        </div>
        <form>
          <div className="my-2">
            <p className="font-text text-[18px] font-normal leading-[25px] text-darkColor py-2">
              Card number
            </p>
            <input
              type="number"
              placeholder="1234 1234 1234 1234"
              className="border-2 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-lg"
            />
          </div>
          <div className="flex items-center">
            <div className="mb-4 w-[65%] mx-2">
              <p className="font-text text-[18px] font-normal leading-[25px] text-darkColor py-2">
                Expiry date
              </p>
              <input
                type="number"
                placeholder="MM/YY"
                className="appearance-none border-2 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-lg"
              />
            </div>
            <div className="mb-4 w-[35%] mx-2">
              <p className="font-text text-[18px] font-normal leading-[25px] text-darkColor py-2">
                CVC
              </p>
              <input
                type="number"
                placeholder="123"
                className="border-2 border-secondaryColor border-opacity-50 w-full py-2 px-2 bg-secondaryColor bg-opacity-10 rounded-lg"
              />
            </div>
          </div>
          <h2 className="font-subHeading  text-[22px] font-bold leading-[26px] text-left my-3">
            Saved Payment Methods
          </h2>
          <div className="flex items-center py-3">
            <p className="border-[2px] border-secondaryColor rounded-md px-2 py-[1px] flex items-center justify-between w-[20%]">
              <FcGoogle />
              Pay
            </p>
            <p className="w-[80%] px-2 font-text text-base font-normal leading-[22px]">
              Google Pay
            </p>
          </div>
          <div className="border-b-2 w-full text-[#A9A9A9]"></div>
          <h2 className="font-subHeading  text-[22px] font-bold leading-[26px] text-left my-3">
            Add Payment Methods
          </h2>
          <div className="flex items-center py-3">
            <p className="px-2">
              <BsFillCreditCardFill className="text-2xl text-secondaryColor" />
            </p>
            <p className="font-text text-base font-normal leading-[22px]">
              Credit/Debit Card
            </p>
          </div>
          <div className="border-b-2 w-full text-[#A9A9A9]"></div>
          <div className="flex items-center py-3">
            <p className="px-2">
              <img
                src="/assets/PayPal.png"
                alt=""
                className="h-[22px] w-[390px]"
              />
            </p>
          </div>
          <div className="border-b-2 w-full text-[#A9A9A9]"></div>
          <div className="flex items-center py-3">
            <p className="ml-[6px] h-[28px] w-[32px] border-[2px] border-secondaryColor rounded-md  py-[2px] flex items-center justify-center">
              <img src="/assets/mastercard.png" alt="" />
            </p>
            <p className="h-[20px] w-[28px] px-2 font-text text-base font-normal leading-[22px]">
              Mastercard
            </p>
          </div>
          <div className="flex px-2">
            <div className="bg-lightColor flex justify-center pt-5">
              <input
                type="checkbox"
                className="h-[30px] w-[30px] border-2 border-secondaryColor border-opacity-50 bg-secondaryColor bg-opacity-10 rounded-lg"
              />
            </div>
            <div className="w-[85%]">
              <p className="font-text text-base font-normal my-4 px-3 leading-[22px]">
                I accept the{" "}
                <span className="text-secondaryColor">
                  terms and conditions
                </span>
                , have read the{" "}
                <span className="text-secondaryColor">privacy policy </span> and
                authorise to change my payment card in accordance with these
                terms.
              </p>
            </div>
          </div>
          <div className="h-[230px] border-2 border-secondaryColor border-opacity-50 bg-secondaryColor bg-opacity-10 rounded-md">
            <div className="py-4 px-2">
              <h2 className="font-subHeading text-lg  font-bold leading-[23px]">
                Security
              </h2>
            </div>
            <div className="flex">
              <div className="pl-4 w-[20%] flex flex-col justify-between h-[120px]">
                <BsFillCreditCardFill className="text-2xl text-secondaryColor" />
                <HiOutlineShoppingBag className="text-secondaryColor text-2xl" />
              </div>
              <div className="w-[80%] flex flex-col justify-between h-[160px]">
                We accept these cards only
                <p className="text-left flex py-2">
                  <img
                    src="/assets/mastercard.png"
                    alt=""
                    className="mx-2 h-[17px] w-[26px]"
                  />
                  <img
                    src="/assets/visacard.png"
                    alt=""
                    className="mx-2 h-[17px] w-[26px]"
                  />
                  <img
                    src="/assets/americancard.png"
                    alt=""
                    className="mx-2 h-[17px] w-[26px]"
                  />
                </p>
                <p className="font-text text-sm text-left font-normal leading-5">
                  Maidzly uses 256-bit SSL encryption and 3D secure
                  authentication to protect your peronal information.
                </p>
              </div>
            </div>
          </div>
          <LargeButton
            Text="Complete"
            customCode="justify-center bg-secondaryColor"
            color="text-lightColor"
            font="font-bold"
            toggle={navigation}
          />
        </form>
      </div>
    </>
  );
}

export default GetAQuoteForm4;
