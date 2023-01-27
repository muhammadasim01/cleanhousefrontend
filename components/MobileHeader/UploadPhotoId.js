import Link from "next/link";
import { FaFileUpload } from "react-icons/fa";
import Footer from "../Footer";
import Header from "../Header";
import LargeButton from "./LargeButton";
import CleanerStep from "./CleanerStep";
function UploadPhotoId() {
  return (
    <>
      <Header bgColor={"bg-lightColor"} />
      <div className="p-4">
        <CleanerStep first={true} second={true} third={true} />
      </div>
      <div className=" py-4 px-3 relative">
        <div className="flex items-center justify-between">
          <h2 className="font-subHeading  text-[30px] font-bold text-left">
            Upload Photo ID
          </h2>
        </div>
        <div className="">
          <div className="h-[80px] w-[80px] rounded-full bg-[#D8D8D8] absolute top-[1.5rem] right-1"></div>
        </div>
        <div>
          <p className="font-text text-sm font-normal leading-[19px] py-2 text-left">
            To verify your ID please take a picture of <br /> one piece of
            government photo ID and <br /> upload it by clicking the button
            &#39; Upload Your ID&#39;. <br />
            This could either be your passport, your driver&#39;s license,
            government issued ID card, health card with photo ID, Canadian
            citizenship card, U.S permanent resident card. Your ID will not be
            shown on your profile page.
          </p>
        </div>
        <div className="border-[1px] border-secondaryColor border-opacity-50 bg-secondaryColor bg-opacity-10 rounded-lg flex flex-col items-center py-3">
          <div>
            <FaFileUpload className="text-5xl text-secondaryColor" />
          </div>
          <div>
            <p className="font text-sm font-normal pt-3">
              Upload Your Photo ID
            </p>
          </div>
        </div>
        <Link href="/cleanerprofile">
          <div>
            <LargeButton
              Text="Save & Continue"
              customCode="justify-center bg-secondaryColor"
              color="text-lightColor"
              font="font-bold"
            />
          </div>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
}

export default UploadPhotoId;
