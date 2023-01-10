import Image from "next/image";
function BoxCard({
  imageSrc,
  Title,
  Description,
  buttonText,
  Text,
  background,
}) {
  return (
    <div
      className={`flex bg-lightColor my-2 py-4 px-2  w-[20rem] rounded-[8px]  items-start justify-center shadow-[-10px_1px_20px_15px_rgba(0,0,0,0.1)]
        sm:h-58  sm:m-2 md:h-[25rem] md:w-[18rem] md:px-0 lg:h-[380px] lg:w-72  lg:m-5 xl:h-[380px] xl:w-80 2xl:h-96 2xl:w-96
       ${background}  bg-no-repeat bg-right-bottom  
       `}
      style={{ backgroundSize: "9rem" }}
    >
      <div className="w-[30%]  pt-2 pr-3 ">
        <Image src={imageSrc} height={95} width={75} alt="" />
      </div>
      <div className="w-[63%]   md:h-[70%] lg:h-[70%] flex flex-col items-start ">
        <div>
          <h1 className="text-black font-heading text-3xl font-bold mt-3  sm:text-center">
            {Title}
          </h1>
          <p className="text-black mt-2 font-text text-base font-bold h-24 sm:text-center w-[88%] ">
            {Description}
          </p>
        </div>
        {Text && (
          <div className={!Text ? " " : "mb-1"}>
            <button className="  text-secondaryColor font-text text-xs font-semibold">
              {Text}
            </button>
          </div>
        )}
        <button className="font-text mt-1 text-sm w-[88%] font-bold text-secondaryColor py-1 px-1 rounded-md border-2 border-secondaryColor">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default BoxCard;
