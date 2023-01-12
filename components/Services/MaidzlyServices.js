import Header from "../Header";
import Banner from "./Banner";
import ServiceImage from "./ServiceImage";
import ServicesChecks from "./ServicesChecks";
import ServicesHeading from "./ServicesHeading";
import ServicesSecondryButton from "./ServicesSecondryButton";
import ServicesSubHeading from "./ServicesSubHeading";
import SubText from "./SubText";
import logo2 from "../../public/assets/Maidzly-logo.png";
import MobileTopBar from "../MobileTopBar";
import MobileContainer from "./MobileContainer";
import CitiesList from "./CitiesList";
import Footer from "../Footer";
import DeepCleaningServices from "./DeepCleaningServices";

function MaidzlyServices() {
  const bg_url = "/assets/Maidzly_Services_Banner.png";
  return (
    <>
      <MobileTopBar />
      <Header position={"relative"} logo={logo2} />
      <Banner
        buttonText="Book A Regular Cleaning"
        bgURL={bg_url}
        P1="Regular Cleaning Services with confidence by booking a Maidzly's
          Cleaner today!"
        P2="Book A Cleaner In Your Neighbourhood!"
      />
      <div className="mx-4">
        <ServicesHeading headingText="Regular Cleaning Services" />
        <div className="flex items-center justify-center">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Get that sparkle back into your home with Maidzly&apos;s
            professional touch!
          </h3>
        </div>
        <div>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Say goodbye to messes and dirt - let Maidzly&apos;s regular cleaning
            services handle it!
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4 mx-2">
            Our regular cleaning services are designed to keep your home looking
            fresh and inviting. From vacuuming, dusting and mopping floors to
            scrubbing kitchen and bathroom surfaces, our independent cleaners
            can handle all of your regular cleaning needs whether it&apos;s a
            one time clean or on a regular schedule. All of our local cleaners
            are police-checked and vetted for your peace of mind.
          </p>
        </div>
        <SubText text="We match you with awesome independent cleaners in your local area to help you with your Regular Cleaning needs." />
        <ServicesSubHeading headingText="Check out what we clean for a Regular Cleaning" />
        <div className="flex items-center justify-center my-5">
          <ServicesSecondryButton buttonText="Cleaning Checklist" />
        </div>
        <SubText text="So sit back and relax – let Maidzly take care of the mess!" />
        <div>
          <ServicesChecks CheckText="Online easy booking" />
          <ServicesChecks CheckText="Always free to use our platform" />
          <ServicesChecks CheckText="Rated 5 star cleaners" />
          <ServicesChecks CheckText="Professional, experienced, and vetted cleaners" />
          <ServicesChecks CheckText="GPS location of your cleaner from your app" />
          <ServicesChecks CheckText="Customize your clean online" />
          <ServicesChecks CheckText="Option to change your bookings plan online" />
          <ServicesChecks CheckText="No contracts" />
          <ServicesChecks CheckText="Can choose the same cleaner depending on availability" />
          <ServicesChecks CheckText="Quality, consistent, and reliable service" />
          <ServicesChecks CheckText="7 days a week support" />
          <ServicesChecks CheckText="2 million dollar liability insurance" />
        </div>
        <ServicesSubHeading headingText="Other Cleaning Services We Offer" />
        <ServiceImage />
        <ServicesSubHeading headingText="Other Cleaning Services We Offer" />
        <div>
          <ServicesChecks CheckText="Regular Cleaning Services" />
          <ServicesChecks CheckText="Deep Cleaning Services" />
          <ServicesChecks CheckText="Move In/Out Cleaning Services" />
          <ServicesChecks CheckText="Post Construction & Home Renovation Cleaning Services" />
          <ServicesChecks CheckText="Organizing & Decluttering Services" />
          <ServicesChecks CheckText="Appliance Cleaning Services" />
          <ServicesChecks CheckText="Laundry Services" />
          <ServicesChecks CheckText="Ironing Services" />
          <ServicesChecks CheckText="Residential House Cleaning Services" />
          <ServicesChecks CheckText="Condo & Apartment Cleaning Services" />
          <ServicesChecks CheckText="Office & Commercial Cleaning Services" />
        </div>
        <ServicesSubHeading headingText="How Frequent Maidzly Can Clean" />
        <div>
          <ServicesChecks CheckText="Weekly Cleaning Services" />
          <ServicesChecks CheckText="Bi-weekly Cleaning Services" />
          <ServicesChecks CheckText="Daily Cleaning Services" />
          <ServicesChecks CheckText="Monthly Cleaning Services" />
          <ServicesChecks CheckText="Occasional Cleaning Services" />
          <ServicesChecks CheckText="One Time Cleaning Services" />
        </div>
        <ServicesSubHeading headingText="Find A Maidzly Cleaner In Your Area" />
        <div className="flex items-center justify-center my-5">
          <ServicesSecondryButton buttonText="Find A Cleaner" />
        </div>
        <SubText text="Connect anywhere with the Maidzly app" />
        <MobileContainer />
        <SubText text="Cities where you can book a Maidzly Cleaner" />
        <div>
          <CitiesList
            headingText="GTA"
            col1="Toronto, Etobicoke, Mississauga, Scarborough, Markham, Richmond Hill,
           Brampton, Vaughan, Aurora, Newmarket, King, Whitchurch-Stouffville, East Gwillimbury"
            col2="Georgina, Caledon, Oakville, Burlington, Milton, Georgetown, Halton Hills, 
          Pickering, Uxbridge, Brock, Scugog, Ajax, Whitby, Oshawa, Clarington"
          />
          <CitiesList
            headingText="Rest of Ontario"
            col1="Kingston, Ottawa, Guelph, Brantford, London, Niagara, Hamilton, Brant, Sudbury, Kitchener, Windsor, Brockville, Thunder Bay, St. Catherines, Cambridge, Elliott Lake, Cornwall, Timmins, North Bay, Peterborough, Belleville, Pembroke, Stratford, Sault Ste.Marie"
            col2=" Woodstock, Kenora, St. Thomas, Waterloo, Brant, Sarnia, Temiskaming Shores, Orillia, Owen Sound, Dryden, Clarence-Rockland, Quinte West, Port Colborne, Kawartha Lakes, Welland, Thorold, Hawkesbury, Chatham-Kent, Greater Sudbury, Norfolk County, Willowdale"
          />
          <CitiesList
            headingText="Neighbourhoods in Toronto"
            col1="Alexandra Park, Baldwin Village, CityPlace, Church and Wellesley, Corktown, 
          Discovery District, Entertainment District, East Bayfront, Fashion Disctrict, Garden District, 
          Grange Park, Harbord Village, South Core, St. James Town, Harbourfront, Moss Park, Old Town, Quayside, 
          Regent Park, St. Lawrence, Toronto Islands, Trefann Court, High Park, The Junction, Kensington Market,
          The Annex, Yorkville, The Beaches, Leslieville, Little Italy, Cabbagetown, Chinatown, Queen Street West,
          Parkdale, Distillery District, Downtown Toronto, Riverdale, Liberty Village, Yonge–Eglinton, Roncesvalles,
          Queen Street West, Bloor West Village, Financial District, North York, Forest Hill, University,
          The Beaches, Upper Beaches, East Chinatown, East Danforth, Gerrard Street East, Greektown, Leslieville, 
          Main Square, Playter Estates, Port Lands, Villers Island, Bedford Park, Canada Loma, Chaplin Estates, 
          Davisville village, Deer Park, Lawrence Park, Lytton Park, Midtown, Moore Park, North Toronto, Rosedale, South Hill, Summerhill, Uptown, Wychwood Park, Beaconsfield Village, Bloorcourt Village, "
            col2="Bracondale Hill, Brockton Village, Carleton Village, Corso Italia, Davenport, Dovercourt Park,
           Dufferine Grove, Earlscourt, Fort York, Junction Triangle, Koreatown, Little Portugal, Little Tibet, 
           Mirvish Village, Niagara, Regal Heights, Runneymede, Seaton Village, Swansea, Trinity-Bellwoods, Wallace
           Emerson, East York, Broadview North, Crescent Town, East Danforth, Pape Village, Woodbine Heights, 
           Bermondsey, Governor's Bridge, Leaside, O' Connor-Parkview, Thorncliffe Park, Amesbury, Armour Heights, 
           Bathurst Manor, Bayview Village, Bayview Woods-Steeles, Black Creek, The Bridle Path, Clanton Park, 
           Don Mills, Don Valley Village, Downsview, Flemington Park, Glen Park, Hillcrest Village, Hoggs Hollow, 
           Humber Summit, Humbermede, Jane and Finch, Lansing, Lawrence Heights, Lawrence Manor, Ledbury Park, 
           Maple Leaf, Newtonbrook, North York City Centre, Parkway Forest, Parkwoods, Pelmo Park-Humberlea, 
           Pleasant View, Uptown Toronto, Victoria Village, Westminster–Branson, Willowdale, York Mills, 
           York University Heights"
          />
        </div>
        <div className="p-5">
          <div>
            <p className="font-text text-[22px] text-darkColor font-normal leading-7">
              Other provinces coming soon!
            </p>
          </div>
          <div>
            <h2 className="font-subHeading text-[26px] text-darkColor font-bold">
              USA
            </h2>
          </div>
          <div>
            <p className="font-text text-[22px] text-darkColor font-normal leading-7">
              Coming soon!
            </p>
          </div>
        </div>
      </div>
      <Banner
        buttonText="Book A Deep Cleaning"
        bgURL={bg_url}
        P1="Deep Cleaning Services with confidence by booking a Maidzly‘s Cleaner today!"
        P2="Book A Cleaner In Your Neighbourhood!"
      />
      <div className="mx-4">
        <ServicesHeading headingText="Deep Cleaning Services" />
        <div className="flex items-center justify-center">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Need a deep clean? Make sure it&apos;s Maidzly clean with our
            affordable, hassle-free cleaning services!
          </h3>
        </div>
        <div>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Maidzly&apos;s deep cleaning service is your go-to choice if you
            want to give yourself a break from the tedious and time-consuming
            task of deep cleaning your living space. With our database of local
            cleaners, you can rest assured that we will make sure your home is
            cleaned thoroughly and safely. Not only that, all of our cleaners
            are experienced delivering top-tier cleaning results.
          </p>
          <p className="font-subHeading text-[22px] font-bold leading-6 text-darkColor text-center ">
            Rejuvenate your living space and make it look brand new with
            Maidzly’s deep cleaning service!
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4 mx-2">
            What&apos;s more, Maidzly provides the peace of mind that comes with
            knowing your home is being attended to by trustworthy individuals
            who have been police-checked and individually vetted before they
            become part of our team. We ensure that all of our cleaners are
            reliable and trustworthy, so you can trust your cleaner to get the
            job done right.
          </p>
        </div>
        <SubText
          text="We match you with awesome independent cleaners in your local area 
        to help you with your deep cleaning needs."
        />
        <ServicesSubHeading headingText="Check out what we clean for a Deep Cleaning Service" />
      </div>
      <Banner
        buttonText="Book A Move In/Out Cleaning"
        bgURL={bg_url}
        custom="w-[250px]"
        customHeight="370px"
        P1="Move-In/Move-Out Cleaning Services with confidence by booking a Maidzly‘s Cleaner today!"
        P2="Book A Cleaner In Your Neighbourhood!"
      />
      <div className="mx-4">
        <ServicesHeading headingText="Move-In /Move-Out Cleaning Services" />
        <div className="flex items-center justify-center">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Don&apos;t just move in-out, make sure it&apos;s a Maidzly clean
            with our professional, reliable, and hassle-free cleaning services!
          </h3>
        </div>
        <div className="flex items-center justify-center my-5">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Move In or Move Out with confidence. Leave the hard cleaning work
            for us!
          </h3>
        </div>
        <div>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Moving can be an exhausting and time-consuming process, not to
            mention stressful. That&apos;s why you should leave the dirty work
            to us! Maidzly Cleaning Services specializes in move-in/move-out
            cleaning services too. We have all the necessary solutions to make
            sure your new home is sparkling clean. All of our cleaners are
            vetted, police-checked, for your peace of mind.
          </p>
          <div className="flex items-center justify-center my-5">
            <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
              Maidzly Cleaners will leave your home pristine so you can spend
              more of your valuable time on the things that matter
            </h3>
          </div>
        </div>
        <SubText text="We match you with awesome independent cleaners in your local area to help you with your Move-In/Move-Out cleaning needs." />
        <ServicesSubHeading headingText="Check out what we clean for a Move-In Move-Out Cleaning Service" />
      </div>
      <Footer />
    </>
  );
}

export default MaidzlyServices;
