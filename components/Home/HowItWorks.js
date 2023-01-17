import ServiceCard from "./ServiceCard";
import { FaExclamation } from "react-icons/fa";
import { BsQuestionLg } from "react-icons/bs";
function ServiceSection() {
  return (
    <div className="bg-lightShade  text-left px-5 py-10 sm:flex sm:items-center sm:justify-center sm:flex-col relative">
      <div className="flex absolute top-[-15px] right-2 sm:right-5 lg:right-10">
        <FaExclamation className="text-lightColor text-7xl sm:text-9xl" />
        <BsQuestionLg className="text-lightColor text-7xl sm:text-9xl ml-[-2rem]" />
      </div>
      <h2 className="font-heading text-[44px] font-bold text-darkColor leading-10 lg:text-3xl xl:text-4xl">
        How it works
      </h2>
      <p className="pt-2 px-1 text-[22px] font-text ">
        Here is how the cleaning process works:
      </p>
      <div className="md:flex md:flex-row md:justify-center md:w-full md:flex-wrap mr-[-1rem]">
        <ServiceCard
          Count="1"
          Title="Find A Cleaner"
          background="bg-[url('../public/assets/Card_bg_1.png')]"
          buttonText="Find Your Cleaner"
          firstBox={true}
          Description="Just enter your postcode/zip code on our website or click on the Find A Cleaner below. 
          The system will automatically pair you with the best local cleaner based on your location and needs. 
          You can also check out reviews and ratings to find the perfect match. "
        />
        <ServiceCard
          Count="2"
          Title="You're In Control"
          background="bg-[url('../public/assets/Card_bg_2.png')]"
          Description="Want to customize your cleaning or schedule it for a specific day and time? No problem! 
          You're in full control of when and how often you want your home cleaned.
           Simply log into your account to make any changes."
        />
        <ServiceCard
          Count="3"
          Title="Get A Secure Transaction"
          background="bg-[url('../public/assets/Card_bg_3.png')]"
          Description="We know that security is important to our customers. 
          That's why we offer secure online payments and the option to manage your booking via desktop or mobile app. 
          We will automatically bill your card when the cleaning is complete.
          You can also track to see when your cleaner is on route via the mobile app!
          If you enjoyed the work of your cleaner, you have the option to rebook the same cleaner for your next clean depending on availability. "
        />
        <ServiceCard
          Count="4"
          Title="Relax And Enjoy Your clean Home"
          background="bg-[url('../public/assets/Card_bg_4.png')]"
          Description="After a long day, it's so nice to come
           home to a clean house! And with our hassle-free service, you
            can relax and enjoy your clean home worry-free. We're always striving for excellence,
            so if you have any feedback, please let us know. And don't forget to rate your cleaner!"
        />
      </div>
    </div>
  );
}

export default ServiceSection;
