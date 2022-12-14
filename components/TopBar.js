import Image from "next/image";
import logo from "../public/assets/logo.png";
import PlayStoreIcon from "../public/assets/Google_Play_Icon.png";
import AppStoreIcon from "../public/assets/Appstore_Icon.png";
function TopBar() {
  return (
    <div className="hidden sm:flex">
      <div className="w-[50%] flex items-center mx-24">
        <div className="bg-primaryColor h-14 my-1 flex items-center justify-center rounded-lg">
          <Image src={logo} height={45} width={55} alt="" />
        </div>
        <p className="font-text text-sm font-medium mx-5">Maidzly</p>
      </div>
      <div className="w-[50%] flex items-center justify-end mx-24">
        <p className="font-text text-sm font-medium mx-5">GET Our APP</p>
        <div className="w-[75px] flex justify-between">
          <img src="assets/Google_Play_Icon.png" alt="" />
          <img src="assets/Appstore_Icon.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
