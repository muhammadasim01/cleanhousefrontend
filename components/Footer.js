import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="relative bottom-0 left-0 right-0 w-[100%] flex flex-col items-start bg-primaryColor py-5 px-3">
        <div className="flex items-start flex-col sm:flex-row sm:items-center lg:w-full">
          <div className=" flex flex-col w-full  text-lightColor items-start sm:self-start lg:pr-10">
            <img src="/assets/logo-3.png" alt="" />
            <p className="text-lightColor font-text text-[22px] font-normal leading-6 w-full text-sm 2xl:w-[18rem] mt-3">
              Rated 5 star cleaners. Pay and book online. GPS tracking when your
              cleaner is on route.
            </p>
          </div>
          <div className="flex flex-col text-lightColor sm:self-start w-full items-start my-2">
            <h1 className="text-[40px] font-subHeading font-bold">Explore</h1>
            <div className="flex flex-col">
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Get The App</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Log In</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Book A Clean</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Inbox</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Your Profile</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Register As A Cleaner</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Your Booking History</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Settings</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">FAQ&#39;s</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Our Blog</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Log Out</Link>
              </span>
            </div>
          </div>
          <div className="flex flex-col text-lightColor sm:self-start w-full ">
            <h1 className="text-[40px] font-subHeading font-bold">Utilites</h1>
            <div className="flex flex-col">
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Get The App</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Contact Us</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">About Us</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">News</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Careers</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Terms & Conditions</Link>
              </span>
              <span className="mt-2 font-text text-[20px] font-normal leading-6 my-2">
                <Link href="/">Privacy Policy</Link>
              </span>
            </div>
          </div>
          <div className="flex flex-col text-lightColor w-full items-start">
            <h1 className="text-[40px] font-subHeading font-bold">
              Areas We Cover
            </h1>
            <div className="flex flex-col">
              <h2 className="font-subHeading text-[26px] font-bold">Canada</h2>
              <div className="my-3">
                <h3 className="font-text text-[22px] font-normal">Toronto</h3>
                <p className="font-text text-[16px] font-normal leading-[22px] my-3">
                  High Park, The Junction, Kensington Market, The Annex,
                  Yorkville, The Beaches, Leslieville, Little Italy,
                  Cabbagetown, Chinatown, Queen West, Parkdale, Distillery
                  District, Downtown Toronto, Riverdale, Liberty Village, Yonge
                  Eglinton, Roncesvalles, Queen Street West, Bloor West Village,
                  Financial District, North York, Forest Hill
                </p>
              </div>
              <div className="my-3">
                <h3 className="font-text text-[22px] font-normal">GTA</h3>
                <p className="font-text text-[16px] font-normal leading-[22px] my-3">
                  Toronto, Etobicoke, Mississauga, Scarborough, Markham,
                  Richmond Hill, Brampton, Vaughan, Aurora, Newmarket, King,
                  Whitchurch-Stouffville, East Gwillimbury, Georgina, Caledon,
                  Oakville, Burlington, Milton, Georgetown, Halton Hills,
                  Pickering, Uxbridge, Brock, Scugog, Ajax, Whitby, Oshawa,
                  Clarington
                </p>
              </div>
              <div className="my-3">
                <h3 className="font-text text-[22px] font-normal">
                  Rest of Ontario
                </h3>
                <p className="font-text text-[16px] font-normal leading-[22px] my-3">
                  Kingston, Ottawa, Guelph, Brantford, London, Niagara,
                  Hamilton, Brant, Sudbury, Kitchener, Windsor, Brockville,
                  Thunder Bay, St. Catherines, Cambridge, Elliott Lake,
                  Cornwall, Timmins, North Bay, Peterborough, Belleville,
                  Pembroke, Stratford, Sault Ste.Marie, Woodstock, Kenora, St.
                  Thomas, Waterloo, Brant, Sarnia, Temiskaming Shores, Orillia,
                  Owen Sound, Dryden, Clarence-Rockland, Quinte West, Port
                  Colborne, Kawartha Lakes, Welland, Thorold, Hawkesbury,
                  Chatham-Kent
                </p>
                <h3 className="font-text text-[22px] font-normal">
                  Other Provinces coming soon!{" "}
                </h3>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="font-subHeading text-[26px] font-bold">USA</h2>
              <p className="font-text text-[22px] font-normal">Coming soon!</p>
            </div>
            <div>
              <h1 className="text-[40px] font-subHeading font-bold">
                Contact US
              </h1>
              <div className="flex justify-evenly">
                <p className="font-subHeading font-light text-sm md:mt-3">
                  Email:
                </p>
                <p className="font-subHeading font-light text-sm md:mt-3">
                  info@maidzly.com
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full my-3">
              <div className="social mt-2 sm:mt-1">
                <p className="font-subHeading font-light text-sm md:mt-3">
                  Follow us on social media
                </p>
                <div className="pt-2 flex justify-between sm:pt-1">
                  <Link href="/">
                    <img src="/assets/linkedin.png" alt="" />
                  </Link>
                  <Link href="/">
                    <img src="/assets/instagram.png" alt="" />
                  </Link>
                  <Link href="/">
                    <img src="/assets/twitter.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-lightColor mt-5 font-bold w-full" />
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="bottom text-lightColor flex items-center justify-center sm:w-[50%] sm:text-sm mt-5">
            <div className="cards flex items-center justify-between sm:justify-start h-8 w-[50%]">
              <span className="mx-2">
                <img src="assets/mastercard.png" alt="" />
              </span>
              <span className="mx-2">
                <img src="assets/visacard.png" alt="" />
              </span>
              <span className="mx-2">
                <img src="assets/americancard.png" alt="" />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center font-text font-light sm:w-[50%] sm:text-right text-sm mt-3 text-lightColor">
            copyright © 2022 Maidzly All rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
