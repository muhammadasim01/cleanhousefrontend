function ServiceCard({
  Count,
  Title,
  Description,
  buttonText,
  background,
  firstBox,
}) {
  return (
    <div
      className={`${background} bg-right-top bg-cover  bg-no-repeat bg-opacity-20 px-7  py-7 rounded-md  flex flex-col items-center 
            justify-center md:w-[350px] ml-[1.8vw] mr-[2.4vw] lg:w-[480px] lg:h-[340px] xl:w-[600px] `}
    >
      <div className=" h-[40px] w-[40px] bg-secondaryColor p-2   rounded-full flex items-center justify-center text-2xl text-lightShade font-semibold">
        {Count}
      </div>
      <h3 className="text-[33px] font-bold text-center pt-3 font-heading leading-[44px]">
        {Title}
      </h3>
      <p className="md:h-[350px] text-center font-text pt-5 text-[18px] font-normal">
        {firstBox ? (
          <>
            Just enter your postcode/zip code on our website or click on the{" "}
            <span className="font-bold">Find A Cleaner</span> below. The system
            will automatically pair you with the best local cleaner based on
            your location and needs. You can also check out reviews and ratings
            to find the perfect match.
          </>
        ) : (
          <>{Description}</>
        )}
      </p>
      {buttonText && (
        <div className="my-3">
          <button className="text-center mt-2 font-text w-[157px] h-[38px] text-[16px] font-bold text-lightColor bg-secondaryColor py-1  rounded-lg">
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
}

export default ServiceCard;
