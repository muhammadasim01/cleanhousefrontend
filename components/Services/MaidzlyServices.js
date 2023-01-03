import Banner from "./Banner";
import ServiceImage from "./ServiceImage";
import ServicesChecks from "./ServicesChecks";
import ServicesHeading from "./ServicesHeading";
import ServicesSecondryButton from "./ServicesSecondryButton";
import ServicesSubHeading from "./ServicesSubHeading";
import SubText from "./SubText";

function MaidzlyServices() {
  return (
    <div>
      <Banner />
      <ServicesHeading />
      <ServicesSubHeading />
      <div className="flex items-center justify-center my-5">
        <ServicesSecondryButton />
      </div>
      <SubText />
      <ServicesChecks />
      <ServiceImage />
    </div>
  );
}

export default MaidzlyServices;
