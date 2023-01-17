import Image from "next/image";
function RectangularCard({ imageSrc, Title, Description }) {
  return (
    <div className="flex w-[600px] bg-lightColor rounded-lg mx-4 my-10 shadow-[2px_2px_20px_-6px_rgba(0,0,0,0.5)]">
      <div className="w-[25%] pt-10 pl-2">
        <Image src={imageSrc} height={75} width={75} alt="" />
      </div>
      <div className="w-[75%] pt-10">
        <h2 className="font-subHeading px-3 text-[40px] leading-[120%] font-bold text-left">
          {Title}
        </h2>
        <p className="font-text text-[22px] font-normal text-left px-5 py-5 leading-[140%]">
          {Description}
        </p>
      </div>
    </div>
  );
}

export default RectangularCard;
