import Image from "next/image";
import Banner from "../../public/assets/Banner-2.png";
function SecondBanner() {
  return (
    <div className="py-10">
      <div className="text-center p-5">
        <h2 className="text-black text-4xl font-bold">
          House Cleaning Services That Save You Time And Money!
        </h2>
        <p className="font-text text-center text-xl font-normal leading-6 mt-5 lg:px-20">
          At Maidzly, we understand that your time is valuable.That's why we
          offer house cleaning services that is convenient and affordable. We
          specialize in providing independent local house cleaners to busy
          families and individuals who don&#39;t have the time or energy to
          clean their homes themselves.
        </p>
      </div>
      <span className="flex items-center justify-center w-full px-5 border-b-2 border-b-primaryColor">
        <img src="assets/Banner-2.png" alt="" />
      </span>
    </div>
  );
}

export default SecondBanner;
