function Card({ no, heading, description }) {
  return (
    <div>
      <div>
        <div className="flex">
          <div className="w-[20%] flex justify-center">
            <p className="h-7 w-7 bg-secondaryColor rounded-full flex items-center justify-center text-lightColor mt-2">
              {no}
            </p>
          </div>
          <p className="mr-2 my-1 flex-1 font-subHeading text-[22px] text-darkColor font-bold leading-6 pl-2 mt-2">
            {heading}
          </p>
        </div>
        <div className="pl-16 pr-2 mr-2 mb-4">
          <p className="font-text text-darkColor text-xl leading-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
