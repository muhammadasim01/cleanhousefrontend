import ServicesButton from "./ServicesPrimaryButton";
function Banner({ buttonText, bgURL, P1, P2, customHeight }) {
  return (
    <div
      className={`h-[334px] w-full bg-no-repeat bg-center bg-cover py-5`}
      style={{
        backgroundImage: `url(${bgURL})`,
        height: `${customHeight}`,
      }}
    >
      <div className="flex flex-col items-center justify-center mx-1">
        <p className="font-subHeading text-[24px] font-bold text-center leading-[33px] text-lightColor mx-1 my-3">
          {P1}
        </p>
        <p className="font-subHeading text-[22px] font-bold text-center leading-[33px] text-lightColor my-3">
          {P2}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <ServicesButton buttonText={buttonText} />
      </div>
    </div>
  );
}

export default Banner;
