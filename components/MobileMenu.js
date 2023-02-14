import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { BsInfoCircle } from "react-icons/bs";
function MobileMenu() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <div className="text-center  flex flex-col sm:hidden bg-darkColor bg-opacity-8 relative w-[100%] z-50">
      <div className="h-[90vh] overflow-y-scroll">
        <form className="flex items-center justify-center w-full pl-7 mt-3 sm:w-[600px]">
          <input
            type="text"
            placeholder="Search Cleaners"
            className="h-10 p-5 w-full my-4 rounded-md  "
          />
          <button className="py-1 px-1 relative right-10 bg-primaryColor rounded-md">
            <BiSearch className="h-6 w-6 text-lightColor" />
          </button>
        </form>
        <nav>
          <ul>
            <li className="text-lightColor flex justify-between w-[200px] text-start font-subHeading text-xl  font-bold py-3 ml-5">
              <img
                src="/assets/Search-Icon.png"
                alt=""
                height={24}
                width={24}
              />
              <Link href="/">Search Cleaners</Link>
            </li>
            <p className="border-b-2 border-lightColor mx-5"></p>
            <li className="text-lightColor flex justify-between w-[250px]  text-start ml-5 font-subHeading text-xl  font-bold py-3">
              <img
                src="/assets/Register-Cleaner.png"
                alt=""
                height={24}
                width={24}
              />
              <Link href="/registerasacleaner">Register As A Cleaner</Link>
            </li>
            <p className="border-b-2 border-lightColor mx-5"></p>
            <li className="text-lightColor flex justify-between w-[135px] text-start ml-5 font-subHeading text-xl  font-bold py-3">
              <BsInfoCircle className="h-[25px] w-[25px]" />
              <Link href="/about">About Us</Link>
            </li>

            <p className="border-b-2 border-lightColor mx-5"></p>
            <li
              className="text-lightColor flex justify-between w-[165px] text-start ml-5 font-subHeading text-xl  font-bold py-3"
              onClick={() => setDropDownOpen(!dropDownOpen)}
            >
              <img
                src="/assets/Our-Services.png"
                alt=""
                height={24}
                width={24}
              />
              <p>Our Services</p>
            </li>

            <div
              className="text-lightColor flex flex-col  w-[93%] ml-auto"
              style={{
                display: dropDownOpen ? "block" : "none",
                transition: "all 1s linear 1s",
              }}
            >
              <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
                <Link href="/services/maidzlyservices">Maidzly Services</Link>
              </li>
              <p className="border-b-2 border-lightColor mx-5"></p>

              <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
                <Link href="/services/deepcleaningservices">Deep Cleaning</Link>
              </li>
              <p className="border-b-2 border-lightColor mx-5"></p>
              <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
                <Link href="/services/moveinoutcleaningservices">
                  Move-in/Move-Out Cleaning
                </Link>
              </li>
              <p className="border-b-2 border-lightColor mx-5"></p>
              <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
                <Link href="/services/postconstructionrenovationservices">
                  Post Construction & Home Renovation Cleaning
                </Link>
              </li>
              <p className="border-b-2 border-lightColor mx-5"></p>
              <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
                <Link href="/services/organizingdeclutteringservices">
                  Organizing & Decluttering
                </Link>
              </li>
              <p className="border-b-2 border-lightColor mx-5"></p>
              <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
                <Link href="/services/appliancecleaningservices">
                  Appliance Cleaning
                </Link>
              </li>
              <p className="border-b-2 border-lightColor mx-5"></p>
              <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
                <Link href="/services/laundrycleaning">Laundry</Link>
              </li>
              <p className="border-b-2 border-lightColor mx-5"></p>
              <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
                <Link href="/services/ironingservices">Ironing</Link>
              </li>
              <p className="border-b-2 border-lightColor mx-5"></p>
              <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
                <Link href="/services/residentialhousecleaningservices">
                  Residential House Cleaning
                </Link>
              </li>
              <p className="border-b-2 border-lightColor mx-5"></p>
              <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
                <Link href="/services/apartmentcleaningservices">
                  Condo & Apartment Cleaning
                </Link>
              </li>
              <p className="border-b-2 border-lightColor mx-5"></p>
              <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
                <Link href="/services/airbnbcleaningservices">
                  Short Term Rental & Airbnb
                </Link>
              </li>
              <p className="border-b-2 border-lightColor mx-5"></p>
              <li className="text-lightColor text-start ml-5 font-subHeading text-xl  font-bold py-3">
                <Link href="/services/commercialcleaningservices">
                  Office & Commercial Cleaning
                </Link>
              </li>
            </div>

            <p className="border-b-2 border-lightColor mx-5"></p>
            <li className="text-lightColor  flex justify-between w-[122px] text-start ml-5 font-subHeading text-xl  font-bold py-3">
              <img
                src="/assets/SignUp-Icon.png"
                alt=""
                height={24}
                width={24}
              />
              <Link href="/signup">Sign Up</Link>
            </li>
            <p className="border-b-2 border-lightColor mx-5"></p>
            <li className="text-lightColor flex justify-between w-[113px] text-start ml-5 font-subHeading text-xl  font-bold py-3">
              <img
                src="/assets/SignIn-Icon.png"
                alt=""
                height={24}
                width={24}
              />
              <Link href="/signin">Sign In</Link>
            </li>
            <p className="border-b-2 border-lightColor mx-5"></p>
            <li className="text-lightColor flex justify-between items-center w-[204px] text-start ml-5 font-subHeading text-xl  font-bold py-3">
              <img
                src="/assets/bookCleaning-Icon.png"
                alt=""
                height={24}
                width={24}
              />
              <Link href="/bookacleaner">Book A Cleaning</Link>
            </li>
            <p className="border-b-2 border-lightColor mx-5"></p>
            <li className="text-lightColor flex justify-between items-center w-[148px] text-start ml-5 font-subHeading text-xl  font-bold py-3">
              <img
                src="/assets/PostJob-Icon.png"
                alt=""
                height={24}
                width={24}
              />
              <Link href="/">Post a Job</Link>
            </li>
            <p className="border-b-2 border-lightColor mx-5"></p>
            <li className="text-lightColor flex justify-between items-center w-[148px] text-start ml-5 font-subHeading text-xl  font-bold py-3">
              <img
                src="/assets/JobBord-Icon.png"
                alt=""
                height={32}
                width={32}
              />
              <Link href="/">Job board</Link>
            </li>
            <p className="border-b-2 border-lightColor mx-5"></p>
            <li className="text-lightColor flex justify-between items-center w-[115px] text-start ml-5 font-subHeading text-xl  font-bold py-3">
              <img src="/assets/Faq-Icon.png" alt="" height={25} width={25} />
              <Link href="/">FAQ&#39;s</Link>
            </li>
            <p className="border-b-2 border-lightColor mx-5"></p>
            <li className="text-lightColor flex justify-between items-center w-[112px]  text-start ml-5 font-subHeading text-xl  font-bold py-3">
              <img src="/assets/Inbox-Icon.png" alt="" height={25} width={25} />
              <Link href="/">Inbox</Link>
            </li>
            <p className="border-b-2 border-lightColor mx-5"></p>
            <li className="text-lightColor flex justify-between items-center w-[112px]  text-start ml-5 font-subHeading text-xl  font-bold py-3">
              <img src="/assets/My-Blog.png" alt="" height={25} width={25} />
              <Link href="/">Blog</Link>
            </li>
            <p className="border-b-2 border-lightColor mx-5"></p>
            <li className="text-lightColor flex justify-between items-center w-[135px]  text-start ml-5 font-subHeading text-xl  font-bold py-3">
              <img
                src="/assets/Logout-Icon.png"
                alt=""
                height={32}
                width={32}
              />
              <Link href="/">Log Out</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
