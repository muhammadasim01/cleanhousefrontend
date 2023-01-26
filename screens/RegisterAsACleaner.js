import Image from "next/image";
import Accordian from "../components/RegisterAsACleaner/Accordian";
import Banner from "../components/RegisterAsACleaner/Banner";
import Card from "../components/RegisterAsACleaner/Card";
import DetailsSection from "../components/RegisterAsACleaner/DetailsSection";
import ListItem from "../components/RegisterAsACleaner/ListItem";
import SecondBanner from "../components/RegisterAsACleaner/SecondBanner";
import image from "../public/assets/RegisterAsACleaner_Banner3.png";
import MobileTopBar from "../components/MobileTopBar";
import logo2 from "../public/assets/Maidzly-logo.png";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
function RegisterAsACleaner() {
  return (
    <div className="">
      <MobileTopBar />
      <TopBar />
      <Header bgColor={"bg-lightColor"} />
      <Banner />
      <div className="mx-4">
        <h1 className="font-heading text-4xl text-center font-bold leading-9">
          Earn Great Money Being Your Own Boss As A Cleaner!
        </h1>
        <DetailsSection
          description="Are you an experienced and professional house cleaner? 
        Do you want to be your own boss and work flexible hours? If so, we would love to hear from you! 
        Maidzly is always on the lookout for talented, passionate, and hardworking individuals to join our team.
         We are Canada's and USA's best cleaning agency and we take pride in matching our clients with the 
         very best cleaners."
        />
        <DetailsSection
          description="We're growing fast, with new clients signing up every day, 
        so there are always opportunities for our cleaners to pick up new jobs. And, if you ever 
        have any questions or need any support, our team is available 24/7 to help you out."
        />
        <SecondBanner />
        <DetailsSection
          description="Cleaners working with Maidzly can set their own schedule and rates, 
        which means you have complete control over how much you work and how much you earn. Plus, 
        we use a secure payment system so you can be sure you'll get paid promptly and without any fuss 48 hours 
        after every job, straight to your bank account."
        />
        <DetailsSection
          description="Work as a private contractor and be your own boss while covered under our 
        insurance! We believe in taking care of our cleaners, which is why we offer a comprehensive insurance package
         to all of our contractors. This way, you can relax and focus on doing what you do best - providing an 
         outstanding cleaning service to our clients."
        />
        <div>
          <h3 className="font-subHeading text-[44px] font-bold text-left">
            The Benefits
          </h3>
          <ListItem />
        </div>
      </div>
      <div className="relative">
        <div className="">
          <img src="/assets/RegisterAsACleaner_Banner3.png" alt="" />
        </div>
        <div
          className="relative bottom-[5rem] z-50 mx-4 my-5 py-4 rounded-lg shadow-[-10px_1px_20px_10px_rgba(0,0,0,0.1)] bg-lightColor"
          // className="relative  bottom-[2rem]"
          // style={{
          //   position: "relative",
          //   bottom: "3rem",
          //   backgroundColor: "white",
          //   border: "4px solid black",
          //   marginRight: "2rem",
          //   marginLeft: "2rem",
          // }}
        >
          <h3 className="font-heading text-[40px] text-center font-bold text-darkColor my-4">
            How To Sign Up
          </h3>
          <Card
            no="1"
            heading="Application Form"
            description=" Simply fill out the online form. Once we have reviewed your
            application within 48 hours, we will email you to let you know if
            you are accepted."
          />
          <Card
            no="2"
            heading="Background Check"
            description="All applicants must undergo a background check before they can start working with us.
           This is to ensure the safety of our clients and cleaners. We will provide you with all the information
            you need to complete the background check during the application process."
          />
          <Card
            no="3"
            heading="Take Our Free Online Course"
            description="To be a certified cleaner, take our easy free online course!
          Once you have completed these steps, you will be ready to start working with Maidzly immediately
           and earning great money!"
          />
        </div>
        <div className="mx-4 my-5 py-4 rounded-lg shadow-[-10px_1px_20px_10px_rgba(0,0,0,0.1)]">
          <h3 className="font-heading text-4xl text-left ml-5 font-bold text-darkColor my-4">
            After Your Approval
          </h3>
          <Card
            no="1"
            heading="Make your profile"
            description="Make your profile so thousands of clients can find you!"
          />
          <Card
            no="2"
            heading="Get Client Requests"
            description="Tell your clients when you are able to work and make your own schedule."
          />
          <Card
            no="3"
            heading="Receive Your Payments"
            description="You get paid 48 hours after every cleaning job straight to your bank account."
          />
        </div>
      </div>

      <div className="mx-4 flex items-center justify-center">
        <button className="bg-secondaryColor py-2 px-12 rounded-md font-text font-bold text-xl text-lightColor">
          Get Started Now
        </button>
      </div>
      <div className="mx-4 my-5">
        <h3 className="font-heading text-4xl font-bold text-darkColor py-5">
          Questions?
        </h3>
        {/* <p className="border-b-2 border-accentColor border-opacity-20"></p> */}
        <Accordian heading="Am I eligible to become a cleaner?" 
        text="You must be a resident of Canada or USA.You need to be at least 18
          years old and have no criminal record. You also must have a mobile
          phone with a data plan and have a bank account (in Canada/USA). Our
          cleaners come from a variety of backgrounds, including students,
          recent graduates, babysitters, nannies, seasonal workers, entry-level
          job seekers, retirees, and contract workers. But of course, nothing is
          more important than a having the freedom to work when you want." />
        <Accordian heading="What's the process to become a cleaner?" 
        text="Before you get started, sign up and create your account. We'll need to know some things about you, such as   your experience with house cleaning. We are looking for cleaners with at least 3 months experience.
        We’ll review your profile before you can get started. Once your application has been approved, you then have 2 more steps.
        Here is the easy breakdown to all the steps to become a cleaner for us!"
        listItem1="Step 1) Fill out your application form Step"
        listItem2="Step 2) Apply to get your criminal background check through us ($35 fee)"
        listItem3="Step 3) Take our FREE online cleaner course and become a certified cleaner."
        />
        <Accordian heading="How much can I make as a cleaner?" 
        text="Your earnings will depend on how often you work, 
        what rates you charge, your star-rating, and more. We want our cleaners 
        to be well-compensated for their outstanding work, which is why we keep our commission low at only 20%.
        This means that you get to keep 80% of what you earn! We use our commission to cover payment processing costs,
        24/7 support, site maintenance, and product improvements. It is advisable to set a competitive yet fair rate
        in order to attract customers and also get repeat business." />
        <Accordian 
        heading="What are the perks of working with My Clean House?"
        text="Here are just a few of the many perks of working with My Clean House:"
        checklist1="You can register to become a cleaner with My Clean House without having to pay a joining fee."
        checklist2="Our cleaners can earn upto $1700 per week, plus tips."
        checklist3="We use a secure and simple app to connect cleaners with clients, and payments are made promptly and on-time - straight into your bank account."
        checklist4="Our cleaners enjoy flexible hours and the freedom to choose how many jobs they take on, whether they want to work part-time or full-time."
        checklist5="We offer proactive support to all of our cleaners, so you can relax and focus on doing what you do best."
        checklist6="Get as many or as few jobs as you like with no limit on the number of clients you can work for."
        checklist7="Keep doing the same job for the same client for as long as you like - it's up to you!"
        checklist8="We offer a comprehensive insurance package to all of our contractors, so you can work with peace of mind knowing that you're covered."
        checklist9="We’re here to help you grow your business and answer any questions you have as we have over 20 years experience in the cleaning industry!"
        />
        <Accordian
        heading="Can I offer other services besides cleaning?"
        text="Cleaners on My Clean House can also offer more than regular house cleaning services like;
         deep cleaning services, renovation cleaning services, post renovation cleaning services, home organizing, 
         laundry service, ironing service  and appliances cleaning. It really depends on you!"
        />
        <Accordian 
        heading="How does approval work?"
        text="When you sign up as a cleaner, you'll be asked to fill out some information about your experience 
        and the services you're looking to offer. We'll review your profile before you can get started to make sure
         your profile meets our quality standards and that you're providing accurate information. Once your profile 
         is approved, you'll receive an email within 48 hours letting you know that you're ready to start cleaning! 
         In case we need more information from you, we'll let you know what additional steps need to be taken in order
         to get your profile approved.
          
         If you want a faster approval process, make sure to include high-quality photos, 
         a descriptive description of both yourself and the services you offer, and proofread your profile 
         for any errors or typos.
          "
        />
      </div>
      <Footer />
    </div>
  );
}

export default RegisterAsACleaner;
