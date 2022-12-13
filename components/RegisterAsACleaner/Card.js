function Card({ no, heading, description }) {
  return (
    <div>
      <div className="border-2">
        <div className="border-2 border-secondaryColor flex items-center justify-around">
          <p className="bg-secondaryColor py-1 px-3 text-lightColor rounded-full">
            {no}
          </p>
          <p className="mr-[55px] text-start font-subHeading text-xl font-bold text-darkColor">
            {heading}
          </p>
        </div>
        <div className="mr-4 ml-12">
          <p className="border-2 border-primaryColor text-start font-text text-lg leading-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
