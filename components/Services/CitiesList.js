function CitiesList({ headingText, col1, col2 }) {
  return (
    <div className="py-5">
      <div className="pl-5">
        <h2 className="font-subHeading text-[26px] font-bold">{headingText}</h2>
      </div>
      <div className="flex">
        <div className="w-[50%] p-5">
          <p className="font-text text-[#007AB9] font-normal text-base leading-6">
            {col1}
          </p>
        </div>
        <div className="w-[50%] p-5">
          <p className="font-text text-[#007AB9] font-normal text-base leading-6">
            {col2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CitiesList;
