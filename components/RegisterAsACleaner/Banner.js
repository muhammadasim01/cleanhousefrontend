import Image from "next/image";
import BannerImage from "../../public/assets/Register-Cleaner-Banner.png";
function Banner() {
  return (
    <>
      <div className="w-full">
        <Image src={BannerImage} alt="" />
      </div>
    </>
  );
}

export default Banner;
