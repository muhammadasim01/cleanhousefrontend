import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutSecondBanner from "../components/About/AboutSecondBanner";
import Banner from "../components/About/Banner";
import OurTeam from "../components/About/OurTeam";
import Reviews from "../components/About/Reviews";
import Story from "../components/About/Story";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BiStar } from "react-icons/bi";
import Image from "next/image";
import likedImage from "../public/assets/Liked-Icon.png";
import { BsCheck2 } from "react-icons/bs";
function About() {
  return (
    <>
      {/* <div>
      <Header bgColor={"bg-primaryColor"} />
      <AboutBanner />
      <Story />
      <Reviews />
      <OurTeam />
      <AboutSecondBanner />
      <Footer />
    </div> */}
      <Banner />
      <div className="mx-4 my-5">
        <h1 className="font-heading text-4xl text-center font-bold leading-9">
          About Us at Maidzly
        </h1>
        <p className="font-subHeading text-xl font-bold text-darkColor text-center leading-6 my-3">
          Maidzly Cleaning Services is Canada's and USA best 5-star rated
          independent house cleaners!
        </p>
        <div className="flex items-center justify-center">
          <div className="border-2 w-30">
            <p className="flex">
              <BiStar className="text-5xl" />
              <BiStar className="text-5xl" />
              <BiStar className="text-5xl" />
            </p>
            <p className="flex items-center justify-center">
              <BiStar className="text-5xl" />
              <BiStar className="text-5xl" />
            </p>
          </div>
        </div>
        <div className="my-3">
          <p className="fon-text text-xl font-normal text-darkColor leading-6 text-center">
            Maidzly is a web-based platform that connects house cleaners with
            busy people in neighborhoods across Canada and USA (USA coming
            soon). Our goal is to empower independent house cleaners by allowing
            them to set up their own cleaning business without the hassle trying
            to find new clients, where at Maidzly we find the clients for them.
          </p>
        </div>
        <div className="my-5">
          <p className="fon-text text-xl font-bold text-darkColor leading-6 text-center">
            Our mission at Maidzly is to make house cleaning affordable and
            accessible for everyone.
          </p>
        </div>
        <div className="my-5">
          <p className="fon-text text-xl font-normal text-darkColor leading-6 text-center">
            At Maidzly, we strive to make professional, high-quality house
            cleaning services available to everyone. Our team at Maidzly have
            over 20 years experience in the cleaning industry so we are able to
            understand what our customers are looking for. Each of our cleaners
            is carefully chosen to ensure they provide the best possible service
            for your home.
          </p>
        </div>
        <div className="my-5 flex items-center justify-center">
          <Image src={likedImage} />
        </div>
        <div className="my-5">
          <p className="fon-text text-xl font-normal text-darkColor leading-6 text-center">
            We are committed to providing an exceptional customer experience by
            offering personalized service and consistent quality. We take pride
            in providing you with a hassle-free, convenient cleaning experience
            that is tailored to your needs.
          </p>
        </div>
        <div className="my-5">
          <h3 className="font-heading text-4xl font-bold text-darkColor  text-center leading-[52px]">
            Connecting house cleaners, maids, housekeepers in your local area!
          </h3>
        </div>
        <div className="my-5">
          <p className="fon-text text-xl font-normal text-darkColor leading-6 text-center">
            Uncover 5-star house cleaners, maids, and housekeepers. We
            continuously show our support for the community by providing
            reliable, trustworthy house cleaners, maids and housekeepers. Here
            are some benefits of booking with us:
          </p>
        </div>
        <div className="border-2">
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              Online easy booking
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor mt-2 text-3xl mb-16 font-bold w-[10%]" />
            <p className="ml-2 font-subHeading mb-8 text-xl w-[90%]">
              Always free to use our platform
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              Rated 5 star cleaners
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              Professional, experienced, and vetted cleaners
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              GPS location of your cleaner from your app
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              Customize your clean online
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              Option to change your bookings plan online
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">No contracts</p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              Can choose the same cleaner depending on availability
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              Quality, consistent, and reliable service
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              7 days a week support
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              2 million dollar liability insurance
            </p>
          </div>
        </div>
        <div className="my-5">
          <p className="fon-text text-xl font-normal text-darkColor leading-6 text-center">
            If you need a one-time or recurring house cleaning services, Maidzly
            has you covered. With our convenient online booking system, you can
            easily book a cleaner in no time. We are committed to providing you
            with the highest quality service possible with great customer
            support and satisfaction guaranteed.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
