import Header from "../Header";
import MobileTopBar from "../MobileTopBar";
import Banner from "./Banner";
import logo2 from "../../public/assets/Maidzly-logo.png";
import SubText from "./SubText";
import MobileContainer from "./MobileContainer";
import ServicesSecondryButton from "./ServicesSecondryButton";
import ServicesSubHeading from "./ServicesSubHeading";
import ServicesChecks from "./ServicesChecks";
import ServicesHeading from "./ServicesHeading";
import ServiceImage from "./ServiceImage";
import CitiesList from "./CitiesList";
import Footer from "../Footer";

function PostConstructionRenovationService() {
  const bg_url = "assets/PostConstructionRenovation_Banner.png";
  return (
    <>
      <MobileTopBar />
      <Header position={"relative"} logo={logo2} />
      <Banner
        buttonText="Book A Post Construction/Renovation Cleaning"
        bgURL={bg_url}
        customHeight="440px"
        custom="text-[20px] w-[220px]"
        P1="Post Construction/Renovation Cleaning Services with confidence by booking a Maidzly‘s Cleaner today!"
        P2="Book A Cleaner In Your Neighbourhood!"
      />
      <div className="mx-4">
        <ServicesHeading headingText="Post Construction & Home Renovation Cleaning Services" />
        <div className="flex items-center justify-center">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Wave Goodbye to Post Construction & Home Renovation Cleaning Chaos
            with Maidzly Services!
          </h3>
        </div>
        <div className="flex items-center justify-center my-5">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Make Post Construction & Home Renovation Clean Up a Breeze with
            Professional Help from Maidzly Services!
          </h3>
        </div>
        <div>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            If you’re in the process of completing a construction or renovation
            project, then you know how hard it can be to get the place spotless
            and ready for use. Cleaning up after an extensive construction job &
            home renovation can be an overwhelming task, but Maidzly Cleaning
            Services is here to help! We also specialize in post-construction &
            home renovation cleaning and can make the job simple and
            stress-free. Our rated cleaners can help in removing debris, dust,
            dirt, and other messes that may be leftover after your project is
            complete.
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            At Maidzly, we pride ourselves on providing affordable services and
            delivering high-quality results. All of our cleaners are carefully
            police-checked, professionally vetted, and must be experienced in
            methods of post construction and home renovation cleaning to ensure
            that you receive only the finest service.
          </p>
        </div>
        <SubText text="We match you with awesome independent cleaners in your local area to help you with your post construction and home renovation cleaning needs." />
        <ServicesSubHeading headingText="Check out what we clean for a Post Construction and Home Renovation Cleaning Service" />
        <div className="flex items-center justify-center my-5">
          <ServicesSecondryButton buttonText="Cleaning Checklist" />
        </div>
        <SubText text="So sit back and relax – let Maidzly take care of the mess!" />
        <div>
          <ServicesChecks CheckText="Online easy booking" />
          <ServicesChecks CheckText="Always free to use our platform" />
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
          <ServicesChecks CheckText="Short Term Rental & Airbnb Cleaning Services" />
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
        <div className="my-5">
          <ServicesSubHeading headingText="Find A Maidzly Cleaner In Your Area" />
        </div>
        <div className="flex items-center justify-center my-5">
          <ServicesSecondryButton buttonText="Find A Cleaner" />
        </div>
        <SubText text="Connect anywhere with the Maidzly app" />
        <MobileContainer />
        <SubText text="Cities where you can book a Maidzly Cleaner" />
      </div>
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
      <Footer />
    </>
  );
}

export default PostConstructionRenovationService;
