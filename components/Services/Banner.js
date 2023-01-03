import ServicesButton from "./ServicesPrimaryButton";
function Banner() {
  const bg_url = "assets/Maidzly_Services_Banner.png";
  return (
    <div
      className={`h-[334px] w-full bg-no-repeat bg-center py-5`}
      style={{
        backgroundImage: `url(${bg_url})`,
      }}
    >
      <div className="flex flex-col items-center justify-center mx-1">
        <p className="font-text text-2xl font-bold text-center leading-[33px] text-lightColor mx-1 my-3">
          Regular Cleaning Services with confidence by booking a Maidzly's
          Cleaner today!
        </p>
        <p className="font-text text-[22px] font-bold text-center leading-[33px] text-lightColor my-3">
          Book A Cleaner In Your Neighbourhood!
        </p>
      </div>
      <div className="flex items-center justify-center">
        <ServicesButton />
      </div>
    </div>
  );
}

export default Banner;
