function ServiceCard({ Count, Title, Description, buttonText, background }) {
  return (
    <div
      className={`${background} bg-right-top bg-cover bg-no-repeat bg-opacity-20 p-5 rounded-md my-6 flex flex-col items-center 
                justify-center md:w-[350px] mx-2 lg:w-[480px] lg:h-[340px] xl:w-[600px]`}
    >
      <div className=" h-8 w-8 bg-secondaryColor p-2 rounded-full flex items-center justify-center text-2xl text-lightColor">
        {Count}
      </div>
      <h3 className="text-2xl font-bold text-center pt-5 font-heading">
        {Title}
      </h3>
      <p className="md:h-[350px] text-center font-text pt-5 text-md font-normal">
        {Description}
      </p>
      {buttonText && (
        <div className="mt-5">
          <button className="text-center mt-2 font-text text-sm font-bold text-lightColor bg-secondaryColor py-1 px-4 rounded-lg">
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
}

export default ServiceCard;
