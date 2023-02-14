import Image from "next/image";
function BoxCard({
  imageSrc,
  Title,
  Description,
  buttonText,
  Text,
  background,
  imageShadoow,
}) {
  return (
    <div
      className={`flex bg-lightColor my-2 py-8 px-2  w-[90%] rounded-[8px]  items-start justify-center shadow-[2px_2px_50px_-18px_rgba(0,0,0,0.25)]
        sm:h-58  sm:m-2 md:h-[25rem] md:w-[18rem] md:px-0 lg:h-[380px] lg:w-72  lg:m-5 xl:h-[380px] xl:w-80 2xl:h-96 2xl:w-96
       ${background}  bg-no-repeat bg-right-bottom  
       `}
      style={{ backgroundSize: "10rem" }}
    >
      <div className={` w-[30%]  pt-2 pr-3`}>
        <img
          src={imageSrc}
          height={87}
          width={90}
          alt=""
          className={`${imageShadoow}`}
        />
      </div>
      <div className="w-[63%]   md:h-[70%] lg:h-[70%] flex flex-col items-start ">
        <div>
          <h2 className="text-black font-heading text-[40px] leading-[44px]   sm:text-center">
            {Title}
          </h2>
          <p className="text-darkColor mt-2 font-text text-[22px] font-semibold  h-auto sm:text-center w-[88%] ">
            {Description}
          </p>
        </div>
        {Text && (
          <div className={!Text ? " " : "mb-1"}>
            <button className="  text-secondaryColor font-text text-[14px] font-semibold">
              {Text}
            </button>
          </div>
        )}
        <button className="font-text mt-1 text-[16px] w-[175px] h-[35px] font-bold bg-lightColor text-secondaryColor py-1 px-1 rounded-md border-[1px] border-secondaryColor">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default BoxCard;
