import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutSecondBanner from "../components/About/AboutSecondBanner";
import Banner from "../components/About/Banner";
import OurTeam from "../components/About/OurTeam";
import Reviews from "../components/About/Reviews";
import Story from "../components/About/Story";
import Header from "../components/Header";
import { BiStar } from "react-icons/bi";
import Image from "next/image";
import likedImage from "../public/assets/Liked-Icon.png";
import { BsCheck2 } from "react-icons/bs";
import image from "../public/assets/AboutBanner-2.png";
import MobileTopBar from "../components/Home/MobileTopBar";
import TopBar from "../components/Home/TopBar";
import logo2 from "../public/assets/Maidzly-logo.png";
import Footer from "../components/Footer";
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
      <MobileTopBar />
      <TopBar />
      <Header position={"relative"} logo={logo2} />
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
          <div className="border-4 w-30">
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
          <img src="/assets/Liked-Icon.png" alt="" />
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
        <div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              Online easy booking
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl mb-6 font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
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
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl mb-12 font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              Professional, experienced, and vetted cleaners
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl mb-6 font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              GPS location of your cleaner from your app
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl mb-6 font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              Customize your clean online
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl mb-6 font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">
              Option to change your bookings plan online
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%]">No contracts</p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl mb-8 font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%] mt-2">
              Can choose the same cleaner depending on availability
            </p>
          </div>
          <div className="flex items-center">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl mb-6 font-bold w-[10%]" />
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
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl mb-6 font-bold w-[10%]" />
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
        <div className="mx-4 my-5">
          <h3 className="font-heading text-[44px] font-bold text-darkColor text-center leading-10">
            Cleaning services we offer
          </h3>
        </div>
        <div>
          <div className="flex items-center my-2">
            <BsCheck2 className="ml-2 text-secondaryColor text-3xl mb-8 font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%] leading-6 mt-12">
              House cleaning, apartment cleaning, condo cleaning, office
              cleaning, commercial cleaning, holiday rental & Airbnb cleaning
            </p>
          </div>
          <div className="flex items-center my-2">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl mb-8 font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%] leading-6 mt-3">
              Weekly cleaning, bi-weekly, monthly and one time cleaning
            </p>
          </div>
          <div className="flex items-center my-2">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%] leading-6">
              Regular cleaning services
            </p>
          </div>
          <div className="flex items-center my-2">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%] leading-6">
              Deep cleaning services
            </p>
          </div>
          <div className="flex items-center my-2">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%] leading-6">
              Spring cleaning services
            </p>
          </div>
          <div className="flex items-center my-2">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%] leading-6">
              Move in/out cleaning services
            </p>
          </div>
          <div className="flex items-center my-2">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%] leading-6">
              Post construction cleaning services
            </p>
          </div>
          <div className="flex items-center my-2">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%] leading-6">
              Organizing & decluttering services
            </p>
          </div>
          <div className="flex items-center my-2">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%] leading-6">
              Appliance cleaning services
            </p>
          </div>
          <div className="flex items-center my-2">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%] leading-6">
              Laundry services
            </p>
          </div>
          <div className="flex items-center my-2">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%] leading-6">
              Ironing
            </p>
          </div>
          <div className="flex items-center my-2">
            <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
            <p className="ml-2 font-subHeading text-xl w-[90%] leading-6">
              Wash dishes
            </p>
          </div>
        </div>
        <div>
          <img src="/assets/AboutBanner-2.png" />
        </div>
        <div className="mx-4 my-5">
          <h3 className="font-heading text-[44px] font-bold text-darkColor text-center leading-10">
            Let us give you back your time!
          </h3>
        </div>
        <div className="mx-4 my-5">
          <p className="fon-text text-xl font-normal text-darkColor leading-6 text-center">
            In the past, House Cleaning Services were considered a luxury rather
            than a necessity. In today's busy world, people rarely have time to
            enjoy their weekend as they are busy cleaning! We normally hear
            people speak about the amount of time cleaning takes and not
            enjoying their time off from work with their families.
          </p>
        </div>
        <div className="mx-4 my-5">
          <p className="fon-text text-xl font-normal text-darkColor leading-6 text-center">
            That's where we come in. We connect independent cleaners to busy
            families who need affordable cleaning services in their area. While
            cleaning agencies can be expensive, hiring a private cleaner is
            usually a lot more affordable. One of the benefits with hiring
            through Maidzly is that we insure our independent cleaners through
            our extensive insurance coverage giving you the same benefits as a
            cleaning agency!
          </p>
        </div>
        <div className="mx-4 my-5">
          <h3 className="font-heading text-2xl leading-6 text-center font-bold text-darkColor">
            One of our key value propositions we offer our clients is
            flexibility - the flexibility that comes with working around your
            schedule.
          </h3>
        </div>
        <div className="mx-4 my-5">
          <p className="fon-text text-xl font-normal text-darkColor leading-6 text-center">
            Think about it - for the cost of an evening out, you can come home
            to a clean house allowing you more time to do the things you want to
            do. Is there anything better than coming home to the clean smell of
            your home!
          </p>
        </div>
        <div className="mx-4 my-5">
          <p className="font-text text-2xl text-center font-normal leading-7">
            Let <span className="font-subHeading">"Maidlzly"</span>turn your
            house into a sparkling clean home!
          </p>
        </div>
        <div className="mx-4 flex items-center justify-center">
          <button className="bg-secondaryColor py-2 px-12 rounded-md font-text font-bold text-xl text-lightColor">
            Search Cleaners
          </button>
        </div>
        <div className="mx-4 my-5">
          <h3 className="font-heading text-[44px] font-bold text-darkColor text-center leading-10">
            Maidzly house cleaners
          </h3>
        </div>
        <div className="mx-4 my-5">
          <p className="fon-text text-lg font-normal text-darkColor leading-6 text-center">
            At Maidzly we understand that it is important to have a cleaner who
            is reliable, trustworthy, and dedicated. That's why, all the
            cleaners are carefully vetted, background checked, and trained to
            provide excellent service. We make sure that each of our cleaners
            are vetted, cleared though a criminal record check and covered under
            our <span className="text-secondaryColor">Maidzly guarantee</span>,
            so that you can rest assured that your home is in safe hands.
          </p>
        </div>
        <div className="mx-4 my-5">
          <p className="fon-text text-lg font-normal text-darkColor leading-6 text-center">
            We are committed to providing the highest quality of service and
            strive to exceed our customer's expectations. We know that having
            someone come into your home is a big deal and we take the security
            of your home very seriously.
          </p>
        </div>
        <div className="mx-4 my-5">
          <h3 className="font-heading text-[44px] font-bold text-darkColor text-center leading-10">
            We offer a seamless cleaning experience, built with you in mind.
          </h3>
        </div>
        <div className="mx-4 my-5">
          <p className="fon-text text-lg font-normal text-darkColor leading-6 text-center">
            At Maidzly, we believe that when it comes to house cleaning,
            everyone deserves the same quality of service. We value and honor
            people from diverse backgrounds, cultures, and walks of life. We
            strive to create a warm and welcome environment for our cleaners and
            clients alike.
          </p>
        </div>
        <div className="mx-4 my-5">
          <p className="fon-text text-lg font-normal text-darkColor leading-6 text-center">
            Our commitment to inclusion, equity, and diversity means that we
            prioritize hiring independent cleaners who represent a wide range of
            backgrounds. We know that having an inclusive workforce is essential
            to providing the best possible service. We value our cleaners and
            appreciate the hard work they put in to make your home sparkle!
          </p>
        </div>
        <div className="mx-4 my-5">
          <h3 className="font-heading text-[44px] font-bold text-darkColor text-center leading-10">
            Build a house cleaning business
          </h3>
        </div>
        <div className="mx-4 my-5">
          <p className="fon-text text-lg font-normal text-darkColor leading-6 text-center">
            As a Maidzly Cleaner, you can have the opportunity to grow a
            successful house-cleaning business. This can be an opportunity to be
            your own boss and to make money and sign up from the comfort of your
            home. Our self-service platform will provide you with the tools to
            get your business up and running quickly.
          </p>
        </div>
        <div className="mx-4 flex items-center justify-center">
          <button className="bg-secondaryColor py-2 px-12 rounded-md font-text font-bold text-xl text-lightColor">
            Sign Up Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
