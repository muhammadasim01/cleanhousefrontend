import Image from "next/image";
import BannerImage from "../../public/assets/AboutBanner.png";

function Banner() {
  return (
    <div className="w-full">
      <Image src={BannerImage} />
    </div>
  );
}

export default Banner;
