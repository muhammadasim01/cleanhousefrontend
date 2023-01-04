import Header from "../Header";
import Banner from "./Banner";
import ServiceImage from "./ServiceImage";
import ServicesChecks from "./ServicesChecks";
import ServicesHeading from "./ServicesHeading";
import ServicesSecondryButton from "./ServicesSecondryButton";
import ServicesSubHeading from "./ServicesSubHeading";
import SubText from "./SubText";
import logo2 from "../../public/assets/Maidzly-logo.png";
import MobileTopBar from "../MobileTopBar";
import MobileContainer from "./MobileContainer";
function MaidzlyServices() {
  const bg_url = "assets/Maidzly_Services_Banner.png";
  return (
    <>
      <MobileTopBar />
      <Header position={"relative"} logo={logo2} />
      <Banner
        buttonText="Book A Regular Cleaning"
        bgURL={bg_url}
        P1="Regular Cleaning Services with confidence by booking a Maidzly's
          Cleaner today!"
        P2="Book A Cleaner In Your Neighbourhood!"
      />
      <div className="border-4 border-primaryColor mx-4">
        <ServicesHeading headingText="Regular Cleaning Services" />
        <div className="border-2 border-secondaryColor flex items-center justify-center">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Get that sparkle back into your home with Maidzly's professional
            touch!
          </h3>
        </div>
        <div>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Say goodbye to messes and dirt - let Maidzly's regular cleaning
            services handle it!
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4 mx-2">
            Our regular cleaning services are designed to keep your home looking
            fresh and inviting. From vacuuming, dusting and mopping floors to
            scrubbing kitchen and bathroom surfaces, our independent cleaners
            can handle all of your regular cleaning needs whether it's a one
            time clean or on a regular schedule. All of our local cleaners are
            police-checked and vetted for your peace of mind.
          </p>
        </div>
        <SubText text="We match you with awesome independent cleaners in your local area to help you with your Regular Cleaning needs." />
        <ServicesSubHeading headingText="Check out what we clean for a Regular Cleaning" />
        <div className="flex items-center justify-center my-5">
          <ServicesSecondryButton buttonText="Cleaning Checklist" />
        </div>
        <SubText text="So sit back and relax – let Maidzly take care of the mess!" />
        <div>
          <ServicesChecks CheckText="Online easy booking" />
          <ServicesChecks CheckText="Always free to use our platform" />
          <ServicesChecks CheckText="Rated 5 star cleaners" />
          <ServicesChecks CheckText="Professional, experienced, and vetted cleaners" />
          <ServicesChecks CheckText="GPS location of your cleaner from your app" />
          <ServicesChecks CheckText="Customize your clean online" />
          <ServicesChecks CheckText="Option to change your bookings plan online" />
          <ServicesChecks CheckText="No contracts" />
          <ServicesChecks CheckText="Can choose the same cleaner depending on availability" />
          <ServicesChecks CheckText="Quality, consistent, and reliable service" />
          <ServicesChecks CheckText="7 days a week support" />
          <ServicesChecks CheckText="2 million dollar liability insurance" />
        </div>
        <ServicesSubHeading headingText="Other Cleaning Services We Offer" />
        <ServiceImage />
        <ServicesSubHeading headingText="Other Cleaning Services We Offer" />
        <div>
          <ServicesChecks CheckText="Regular Cleaning Services" />
          <ServicesChecks CheckText="Deep Cleaning Services" />
          <ServicesChecks CheckText="Move In/Out Cleaning Services" />
          <ServicesChecks CheckText="Post Construction & Home Renovation Cleaning Services" />
          <ServicesChecks CheckText="Organizing & Decluttering Services" />
          <ServicesChecks CheckText="Appliance Cleaning Services" />
          <ServicesChecks CheckText="Laundry Services" />
          <ServicesChecks CheckText="Ironing Services" />
          <ServicesChecks CheckText="Residential House Cleaning Services" />
          <ServicesChecks CheckText="Condo & Apartment Cleaning Services" />
          <ServicesChecks CheckText="Office & Commercial Cleaning Services" />
        </div>
        <ServicesSubHeading headingText="How Frequent Maidzly Can Clean" />
        <div>
          <ServicesChecks CheckText="Weekly Cleaning Services" />
          <ServicesChecks CheckText="Bi-weekly Cleaning Services" />
          <ServicesChecks CheckText="Daily Cleaning Services" />
          <ServicesChecks CheckText="Monthly Cleaning Services" />
          <ServicesChecks CheckText="Occasional Cleaning Services" />
          <ServicesChecks CheckText="One Time Cleaning Services" />
        </div>
        <ServicesSubHeading headingText="Find A Maidzly Cleaner In Your Area" />
        <div className="flex items-center justify-center my-5">
          <ServicesSecondryButton buttonText="Find A Cleaner" />
        </div>
        <SubText text="Connect anywhere with the Maidzly app" />
        <MobileContainer />
        <SubText text="Cities where you can book a Maidzly Cleaner" />
      </div>
    </>
  );
}

export default MaidzlyServices;
