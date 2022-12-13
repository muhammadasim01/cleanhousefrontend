import Image from "next/image";
import image from "../../public/assets/RegisterAsACleaner-details.png";
function SecondBanner() {
  return (
    <div className="my-3">
      <Image src={image} className="rounded-lg" />
    </div>
  );
}

export default SecondBanner;
