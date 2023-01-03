import Image from "next/image";
import img from "../../public/assets/Services_image.png";
function ServiceImage() {
  return (
    <div className="my-5">
      <Image src={img} />
    </div>
  );
}

export default ServiceImage;
