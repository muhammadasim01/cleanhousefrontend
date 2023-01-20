import Image from "next/image";
import mobileImage from "../../public/assets/Mobile-app.png";
import playStoreIcon from "../../public/assets/playStore-icon.png";
import appStoreIcon from "../../public/assets/appStore-icon.png";
function MobileContainer() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between w-[262px] my-5">
          <div className="w-[120px] h-[40px]">
            <Image src={appStoreIcon} />
          </div>
          <div className="w-[120px] h-[40px]">
            <Image src={playStoreIcon} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-4">
        <Image src={mobileImage} />
      </div>
    </div>
  );
}

export default MobileContainer;
