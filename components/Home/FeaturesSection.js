import FeaturedCard1 from "./FeaturedCard1";
import FeaturedCard from "./FeaturedCard1";
import FeaturedCard2 from "./FeaturedCard2";

function FeaturesSection() {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h2 className="font-subHeading text-[44px] font-bold text-center leading-[120%]">
        Maidzly Cleaning Services Is The Best!
      </h2>
      <p className="font-text text-[22px] font-medium text-center leading-[140%] mt-8">
        What sets us apart from other cleaning services is we offer a database
        of 5 star experienced local cleaners. We go out of our way to make the
        whole process as seamless as possible, from booking to payment to
        clean-up.
      </p>
      <p className="font-text text-[22px] font-extrabold text-center leading-[140%] mt-8">
        Here are some of the benefits of choosing Maidzly for your home cleaning
        needs:
      </p>
      <div className="flex flex-col md:flex-row md:w-[760px] lg:w-[900px] md:justify-between">
        <FeaturedCard1 />
        <FeaturedCard2 />
      </div>
      <p className="font-subHeading text-darkColor text-center text-[22px] font-extrabold py-5 leading-[140%]">
        At Maidzly, we aim to make your life easier by taking on those extra,
        time-consuming tasks that you just dont have the time for. Whether its
        mopping your floors, doing the laundry or ironing your clothes,
        we&apos;ll take care of it so you dont have to.
      </p>
      <p className="font-text text-darkColor text-center text-[22px] font-medium mb-5 leading-[140%]">
        You can add extra tasks to your cleaning schedule in seconds through
        your online account. Just log in and add the changes needed.
      </p>
    </div>
  );
}

export default FeaturesSection;

// const Lists1 = [
//   "Online easy booking",
//   "Pay online via PayPal or Stripe",
//   "Rated 5 star cleaners",
//   "Professional, experienced, and vetted cleaners",
//   "GPS location of your cleaner from your app",
//   "Customize your clean online",
//   "Option to change your bookings plan online",
//   "No contracts",
//   "Can choose the same cleaner depending on availability",
//   "Quality, consistent, and reliable service",
//   "7 days a week support",
//   "2 million dollar liability insurance ",
// ];
// const Lists2 = [
//   "Regular cleaning",
//   "Deep cleaning",
//   "Spring cleaning",
//   "Move in/out cleaning",
//   "Appliance cleaning",
//   "Organizing",
//   "Laundry",
//   "Ironing",
//   "Wash dishes",
// ];
