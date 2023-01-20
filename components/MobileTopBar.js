import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
function MobileTopBar() {
  return (
    <div className="w-[100%] h-[90px] flex sm:hidden ">
      <div className="w-[80%] flex ">
        <div className="bg-primaryColor rounded-md flex items-center justify-center h-[53.94px] w-[53.94px] mt-5 mb-5 ml-5 ">
          <img src="/assets/top-logo.png" alt="" width={43} />
        </div>
        <div className="flex flex-col items-start px-2 mt-5  justify-between h-[53.94px]">
          <h2 className="font-subHeading text-sm">Maidzly</h2>
          <span className="flex text-primaryColor">
            <img src="/assets/star.png" width={17} height={0} />
            <img src="/assets/star.png" width={17} height={0} />
            <img src="/assets/star.png" width={17} height={0} />
            <img src="/assets/star.png" width={17} height={0} />
            <img src="/assets/star.png" width={17} height={0} />
          </span>
          <p className="font-text text-xs text-darkColor opacity-70">
            3,900+ Reviews
          </p>
        </div>
      </div>
      <div className="w-[20%] self-center  flex items-center justify-end  mr-4">
        <button className="flex items-center justify-center font-text font-normal text-lightColor bg-primaryColor px-4 py-0 rounded-full ">
          open
        </button>
      </div>
    </div>
  );
}

export default MobileTopBar;
