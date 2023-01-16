import CheckList from "./CheckList";
function FeaturedCard1() {
  return (
    <div className="px-5 bg-lightColor mt-10 rounded-md shadow-[-10px_1px_20px_15px_rgba(0,0,0,0.1)]">
      <h3 className="font-subHeading text-3xl font-bold py-5">Benefits</h3>
      <div>
        <img src="assets/Features-Card-Image1.png" alt="" />
      </div>
      <div className="py-5">
        <CheckList CheckText="Online easy booking" />
        <CheckList CheckText="Pay online" />
        <CheckList CheckText="Rated 5 star cleaners" />
        <CheckList CheckText="Experienced local independent vetted cleaners" />
        <CheckList CheckText="GPS location of your cleaner from your app" />
        <CheckList CheckText="Customize your clean online" />
        <CheckList CheckText="Option to change your bookings plan online" />
        <CheckList CheckText="No contracts" />
        <CheckList CheckText="Can choose the same cleaner depending on availability" />
        <CheckList CheckText="Quality, consistent, and reliable service" />
        <CheckList CheckText="7 days a week support" />
      </div>
    </div>
  );
}

export default FeaturedCard1;
