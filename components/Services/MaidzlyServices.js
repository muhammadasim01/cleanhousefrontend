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
  const bg_url_1 = "/assets/Maidzly_Services_Banner.png";
  const bg_url_2 = "/assets/Deep_Cleaning_Service_Banner.png";
  const bg_url_3 = "/assets/MoveInOutCleaning_Banner.png";
  const bg_url_4 = "/assets/PostConstructionRenovation_Banner.png";
  const bg_url_5 = "/assets/OrganizingDeclutteringServices_Banner.png";
  const bg_url_6 = "/assets/Appliance.png";
  const bg_url_7 = "/assets/LaundryServices_Banner.png";
  const bg_url_8 = "/assets/IroningServices_Banner.png";
  const bg_url_9 = "/assets/ResidentialHouseCleaningServices_Banner.png";
  const bg_url_10 = "/assets/ApartmentCleaningServices.png";
  const bg_url_11 = "/assets/AirbnbCleaningServices_Banner.png";
  const bg_url_12 = "/assets/CommercialCleaningServices_Banner.png";
  return (
    <>
      <MobileTopBar />
      <Header bgColor={"bg-lightColor"} />
      <Banner
        buttonText="Book A Regular Cleaning"
        bgURL={bg_url_1}
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
          <ServicesChecks CheckText="7 days a week support" />{" "}
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
        bgURL={bg_url_2}
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
        bgURL={bg_url_3}
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
      <Banner
        buttonText="Book A Post Construction/Renovation Cleaning"
        bgURL={bg_url_4}
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
      </div>
      <Banner
        buttonText="Book An Organizing & Decluttering Service"
        bgURL={bg_url_5}
        // customHeight="440px"
        custom="text-[20px] w-[220px]"
        P1="Organizing & Decluttering with confidence by booking a Maidzly‘s Cleaner today!"
        P2="Book A Cleaner In Your Neighbourhood!"
      />
      <div className="mx-4">
        <ServicesHeading headingText="Organizing & Decluttering Services" />
        <div className="flex items-center justify-center">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Create More Space and Time with Maidzly&apos;s Professional
            Organizing & Decluttering Services
          </h3>
        </div>
        <div className="flex items-center justify-center my-5">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Live better and easier with Maidzly’s top-notch organization and
            decluttering services.
          </h3>
        </div>
        <div>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            At Maidzly, our goal is to help you maximize your time and space by
            providing the best home organizing and decluttering services
            available. We know that life can get busy, and it can be difficult
            to stay on top of all your clutter. That’s why we offer our
            professional organizing and decluttering services — to make sure
            your home stays tidy and your life is more efficient.
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Our experienced organizing experts can help you streamline the
            organization of any room in your home, from closets to bedrooms to
            kitchens. We also offer services for decluttering and purging, so
            that you can gain better control over all the messes that pile up on
            a daily basis.
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            What sets us apart from other cleaning services is our commitment to
            providing an exceptional service experience. All of our cleaners are
            police-checked and thoroughly vetted, so you can be confident that
            your home is in the best hands. We’re also reliable and professional
            – we show up when we say we will, and we always treat your home with
            respect.
          </p>
        </div>
        <SubText text="We match you with awesome independent cleaners in your local area to help you with your organization & decluttering cleaning needs." />
        <ServicesSubHeading headingText="Check out what we clean for an Organizing & Decluttering Services" />
      </div>
      <Banner
        buttonText="Book An Appliance Cleaning"
        bgURL={bg_url_6}
        // customHeight="440px"
        // custom="text-[20px] w-[220px]"
        P1="Appliance Cleaning Services with confidence by booking a Maidzly‘s Cleaner today!"
        P2="Book A Cleaner In Your Neighbourhood!"
      />
      <div className="mx-4">
        <ServicesHeading headingText="Appliance Cleaning Services" />
        <div className="flex items-center justify-center">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            A Sparkling Clean Kitchen Awaits With Maidzly&apos;s Appliance
            Cleaning Service
          </h3>
        </div>
        <div className="flex items-center justify-center my-5">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Let us take care of the hard work for you and make your life easier
            with our top-notch appliance cleaning service.
          </h3>
        </div>
        <div>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            At Maidzly, we are committed to providing you with a comprehensive
            cleaning experience. We offer more than just general housecleaning
            services - our team of experienced cleaners can make sure that all
            of your kitchen appliances receive the deep clean they deserve. Our
            cleaners will thoroughly inspect and clean every nook and cranny of
            your fridge, oven, and more.
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            We understand the importance of trust when it comes to hiring
            someone to clean your home, which is why all of our cleaners are
            police-checked and vetted prior to being hired. This means that you
            can rest assured that your appliances will be cleaned by
            professionals who have been thoroughly screened. We try our best to
            guarantee that each cleaner is reliable, and trustworthy, and will
            provide an excellent service.
          </p>
        </div>
        <SubText text="We match you with awesome independent cleaners in your local area to help you with your appliance cleaning needs." />
        <ServicesSubHeading headingText="Check out what we clean for an Appliance Cleaning Services" />
      </div>
      <Banner
        buttonText="Book A Laundry Service"
        bgURL={bg_url_7}
        // customHeight="440px"
        // custom="text-[20px] w-[220px]"
        P1="Laundry Services with confidence by booking a Maidzly‘s Cleaner today!"
        P2="Book A Cleaner In Your Neighbourhood!"
      />
      <div className="mx-4">
        <ServicesHeading headingText="Laundry Services" />
        <div className="flex items-center justify-center">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Turning Your Washing Time into Relaxing Time with Maidzly&apos;s
            Laundry Services!
          </h3>
        </div>
        <div className="flex items-center justify-center my-5">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Invest in Cleanliness - Enjoy Convenient and Professional Laundry
            Services from Maidzly!
          </h3>
        </div>
        <div>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Maidzly Cleaning Services have been providing professional and
            reliable cleaning services to thousands of customers. With the
            introduction of our laundry services, we are taking it one step
            further by turning mundane chore of washing clothes into an
            enjoyable experience!
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Maidzly Cleaning Services offer an all-inclusive laundry service
            which includes washing your laundry and folding. This means that our
            services not only save you valuable time but also guarantee
            satisfaction with quality assurance.
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            In addition to having experienced and professional cleaners, Maidzly
            Cleaning Services also ensure the safety of their customers with the
            policed-checked and vetted cleaners who are used in all cleaning
            services.
          </p>
        </div>
        <SubText text="We match you with awesome independent cleaners in your local area to help you with your organization & decluttering cleaning needs." />
        <ServicesSubHeading headingText="Check out what we clean for a Laundry Services" />
      </div>
      <Banner
        buttonText="Book A Ironing Service"
        bgURL={bg_url_8}
        // customHeight="440px"
        // custom="text-[20px] w-[220px]"
        P1="Ironing Services with confidence by booking a Maidzly‘s Cleaner today!"
        P2="Book A Cleaner In Your Neighbourhood!"
      />
      <div className="mx-4">
        <ServicesHeading headingText="Ironing Services" />
        <div className="flex items-center justify-center">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Put An End To Wrinkles and Hassles With Maidzly&apos;s Ironing
            Services!
          </h3>
        </div>
        <div className="flex items-center justify-center my-5">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Keep your wardrobe looking sharp - Get professional ironing services
            from Maidzly!
          </h3>
        </div>
        <div>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Are you tired of spending your weekend&apos;s ironing, only to have
            wrinkled clothes that don’t look their best? Maidzly Cleaning
            Services can help! Our team of experienced cleaners provides
            reliable and high-quality ironing services at an affordable price.
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            At Maidzly, we understand that busy schedules can make it difficult
            to keep up with mundane tasks like ironing. That’s why we’re here to
            take that responsibility off your hands! Our expert cleaners will
            make sure your clothes look perfect, every time – without any
            wrinkles or hassles.
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Not only are we committed to providing quality services, but also
            safety. All of our cleaners have been police-checked and fully
            vetted for your peace of mind.
          </p>
        </div>
        <SubText text="We match you with awesome independent cleaners in your local area to help you with your organization & decluttering cleaning needs." />
        <ServicesSubHeading headingText="Check out what we clean for a Ironing Services" />
      </div>
      <Banner
        buttonText="Book A Residential House Cleaning Service"
        bgURL={bg_url_9}
        customHeight="440px"
        custom="text-[20px] w-[220px]"
        P1="Residential House Cleaning Services with confidence by booking a Maidzly‘s Cleaner today!"
        P2="Book A Cleaner In Your Neighbourhood!"
      />
      <div className="mx-4">
        <ServicesHeading headingText="Residential House Cleaning Services" />
        <div className="flex items-center justify-center">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Turning Your Home into a Palace with Residential House Cleaning
            Services from Maidzly!
          </h3>
        </div>
        <div className="flex items-center justify-center my-5">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Don&apos;t Put it Off Any Longer - Get Residential House Cleaning
            Services from Maidzly!
          </h3>
        </div>
        <div>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            You’ve been meaning to do it for weeks, months even. You walk into
            your living room and sigh - it looks like a tornado went through it.
            You have a few hours free time, but no energy to start cleaning up
            the mess. Don’t keep putting off those tough cleaning chores -
            enlist the help of Maidzly Cleaning Services!
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Maidzly provides residential house cleaning services that make your
            home shine. Our professional staff will come to your home and do a
            thorough cleaning, ensuring that each room is sparkling clean. Our
            cleaners are vetted and police-checked, ensuring that your home is
            in good hands. We carry out a vigorous vetting process to make sure
            our cleaners are trustworthy, ensuring that you can trust Maidzly to
            provide the best services.
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Maidzly is committed to providing the best services for our
            customers, and part of that commitment is making sure that
            everything goes smoothly.
          </p>
        </div>
        <SubText text="We match you with awesome independent cleaners in your local area to help you with your Residential House Cleaning needs." />
        <ServicesSubHeading headingText="Check out what we clean for a Residential House Cleaning Services" />
      </div>
      <Banner
        buttonText="Book A Condo & Apartment Cleaning Services"
        bgURL={bg_url_10}
        customHeight="400px"
        custom="text-[20px] w-[250px]"
        P1="Condo & Apartment Cleaning Services with confidence by booking a Maidzly‘s Cleaner today!"
        P2="Book A Cleaner In Your Neighbourhood!"
      />
      <div className="mx-4">
        <ServicesHeading headingText="Condo & Apartment Cleaning Services" />
        <div className="flex items-center justify-center">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Expert Condo & Apartment Cleaning Services at Maidzly – Giving Your
            Home a Professional Touch!
          </h3>
        </div>
        <div className="flex items-center justify-center my-5">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Enhancing the Beauty of Your Home with Our Quality Condo & Apartment
            cleaning Services!
          </h3>
        </div>
        <div>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Are you looking for a reliable and professional cleaning service to
            help keep your apartment or condo sparkling clean? Maidzly provides
            quality cleaning services for apartments and condos that will exceed
            your expectations. Our affordable cleaners are experienced to make
            sure that your home is in top condition.
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            At Maidzly, we understand that your home is a place of refuge and
            solace, which is why we strive to provide professional and reliable
            cleaning services. All of our cleaners are police-checked and vetted
            to ensure that they have the experience, knowledge and work ethic to
            provide outstanding cleaning services.
          </p>
        </div>
        <SubText text="We match you with awesome independent cleaners in your local area to help you with your apartment & condo cleaning needs." />
        <ServicesSubHeading headingText="Check out what we clean for a Condo & Apartment Cleaning Service" />
      </div>
      <Banner
        buttonText="Book A Short Term & Airbnb Cleaning Service"
        bgURL={bg_url_11}
        customHeight="400px"
        custom="text-[20px] w-[250px]"
        P1="Short Term & Airbnb Cleaning Services with confidence by booking a Maidzly‘s Cleaner today!"
        P2="Book A Cleaner In Your Neighbourhood!"
      />
      <div className="mx-4">
        <ServicesHeading headingText="Short Term Rental & Airbnb Cleaning Services" />
        <div className="flex items-center justify-center">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Receive Timely and Efficient Short-Term Rental & Airbnb Cleanings
            from Maidzly Services!
          </h3>
        </div>
        <div className="flex items-center justify-center my-5">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Don&apos;t Waste Time Cleaning - Use Maidzly Short-Term Rental &
            Airbnb Cleaning Services!
          </h3>
        </div>
        <div>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Are you looking for a reliable and experienced cleaning service to
            take care of your Airbnb or short-term rental needs? Look no further
            than Maidzly Cleaning Services! Our cleaners are carefully selected
            and qualified professionals who always prioritize customer
            satisfaction. From regular cleans to deep cleans, we have the
            solution for all your Airbnb/short-term rental cleaning needs.
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            We understand how busy life can be and the importance of timely and
            efficient cleaning when it comes to your rental property. Maidzly
            Cleaning Services is committed to providing you with cleaning
            services that are completed at the highest industry standards.
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Our cleaners go through extensive background checks as part of our
            stringent selection process. We guarantee police-checked and vetted
            cleaners to deliver an outstanding service.
          </p>
        </div>
        <SubText text="We match you with awesome independent cleaners in your local area to help you with your short term rental & Airbnb cleaning needs." />
        <ServicesSubHeading headingText="Check out what we clean for a Short Term Rental Cleaning Service" />
      </div>
      <Banner
        buttonText="Book An Office & Commercial Cleaning Service"
        bgURL={bg_url_12}
        customHeight="400px"
        custom="text-[20px] w-[270px]"
        P1="Office & Commercial Cleaning Services with confidence by booking a Maidzly‘s Cleaner today!"
        P2="Book A Cleaner In Your Neighbourhood!"
      />
      <div className="mx-4">
        <ServicesHeading headingText="Office & Commercial Cleaning Services" />
        <div className="flex items-center justify-center">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Make Sure Your Staff & Customers Feel Welcome with Professional
            Office & Commercial Cleaning from Maidzly.
          </h3>
        </div>
        <div className="flex items-center justify-center my-5">
          <h3 className="font-subHeading text-[22px] font-bold text-center leading-6">
            Get Ready for the Workday with Professional Office & Commercial
            Cleaning Services from Maidzly!
          </h3>
        </div>
        <div>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Maidzly provides professional, reliable and affordable office &
            commercial cleaning services that make sure your business is always
            looking its best. We offer a range of services for offices and other
            commercial spaces, ensuring your customers and staff always feel
            welcome in a clean and comfortable environment. Our team of
            experienced cleaners is dedicated to providing you with the highest
            level of service possible.
          </p>
          <p className="font-subHeading text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            Maidzly cleaners will work with the utmost care and attention to
            detail.
          </p>
          <p className="font-text text-[22px] font-normal leading-6 text-darkColor text-center my-4">
            We understand that security is a major concern for any business.
            That&apos;s why all our cleaners have been police-checked and
            thoroughly vetted by us to ensure they are reliable, trustworthy and
            professional.
          </p>
        </div>
        <SubText text="We match you with awesome independent cleaners in your local area to help you with your office & commercial cleaning needs." />
        <ServicesSubHeading headingText="Check out what we clean for a Office & Commercial Cleaning Service" />
      </div>
      <Footer />
    </>
  );
}

export default MaidzlyServices;
