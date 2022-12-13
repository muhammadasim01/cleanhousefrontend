import Image from "next/image";
import BannerImage from "../../public/assets/Register-Cleaner-Banner.png";
function Banner() {
  return (
    <>
      <div className="border-2 w-full">
        <Image src={BannerImage} />
      </div>
    </>
  );
}

export default Banner;
