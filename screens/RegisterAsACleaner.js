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
import { useRouter } from "next/router";
function RegisterAsACleaner() {
  const router = useRouter();
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
        <button
          className="bg-secondaryColor py-2 px-12 rounded-md font-text font-bold text-xl text-lightColor"
          onClick={() => router.push("/cleanerbasicinfo")}
        >
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
        heading="What are the perks of working with Maidzly?"
        text="Here are just a few of the many perks of working with Maidzly:"
        checklist1="You can register to become a cleaner with Maidzly without having to pay a joining fee."
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
        text="Cleaners on Maidzly can also offer more than regular house cleaning services like;
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
        <Accordian
        heading="How do I download the Maidzly app?"
        text={["The Maidzly app is available for both iPhone and Android devices.",<br/> ,<br/>,
         "In addition, it is your professional responsibility to install and maintain the app so that you can be reached for jobs, receive updates and resources, and submit your work.",<br/>,<br/>,
         "Maidzly app for Android phones" , <p className="text-secondaryColor mt-2">Download on Android</p> ,<br/>, "For Android phones (such as Samsung or Huawei) you need to have Android 6 or above.",<br/>,
         <p className="mt-2">Maidzly  app for iPhones</p>, <br/>, <p className="text-secondaryColor">Download on iPhone</p>,"For Apple iPhones you need to have iOS 10 or above.",<br/>,
         <p className="mt-2 mr-2">If you have issues downloading the app, you can check the memory of your device or whether you're trying to download the app on a rooted phone. If neither of those are the issue, please reach out to our support team at support@mycleanhouse.ca for assistance.</p>
      ]}
        />
        <Accordian 
        heading="Are there fees to join Maidzly?"
        text="No, there are no fees to join Maidzly. Its completely free!"
        />
        <Accordian 
        heading="Which documents do I need to join Maidzly?"
        text="In order to join Maidzly, you will need to provide a valid ID It can either be any government ID like a passport, birth certificate or a driver’s license."
        />
        <Accordian heading="Can I choose my own schedule?" text="Yes! You can set your own schedule and rates, which means you have complete control over how much you work and how much you earn. Plus, we use a secure payment system so you can be sure you'll get paid promptly and without any fuss - straight to your bank account." />
        <Accordian heading="How do payments work?" text={[<p>Maidzly pays all of its cleaners promptly and on-time - straight into your bank account after 48 hours of a completed job. You'll never have to worry about chasing up payments or waiting for weeks to get paid again.</p> ,<br/>,
       <p>Tip payments: You can either receive a cash tip from a client or via the app. If your client leaves you a tip via the app, this will be added to your payment automatically. We do not take off any fees from your tips.</p>
      ]} />
        <Accordian heading="What is Maidzly?"
         text={[<p>Maidzly is a cleaning agency that operates in Canada and the USA. We connect cleaners with clients via our secure app, which makes it easy for you to find work and get paid promptly after each job. Plus, our cleaners enjoy flexible hours and the freedom to choose how many jobs they take on, which means you can work as little or as much as you like.</p>,<br/>,
            <p>Maidzly is a great way to earn extra income or to start your own cleaning business - without having to pay a joining fee. Plus, our cleaners earn upto $1700 per week, plus tips!</p>,<br/>,
            <p>If you're interested in joining Maidzly, please <span className="text-secondaryColor">click here</span> to register. We look forward to welcoming you aboard! Apply now!</p>,<br/>,
            <div className="flex items-center justify-center"><button className="font-subHeading text-secondaryColor text-lg text-center">Apply here now!</button></div>
        ]} 
         
         />
        <Accordian heading="What is it like to work for Maidzly?" 
        text={[<p>Maidzly is a great way to earn extra income or to start your own cleaning business - without having to pay a joining fee. Plus, our cleaners earn upto $1700 per week, plus tips!</p>,<br/>,
        <p>We ensure a 5-star service to our customers and take care of all the marketing, scheduling, and payments for you so you can focus on doing what you do best - cleaning! This is the reason that we have thousands of happy customers and hundreds of 5-star reviews.</p>,<br/>,
        <p className="mb-3">With Maidzly you are able to:</p>,
        <p>- Work the hours you want to -  morning, afternoon, evening</p>,
        <p>- Choose the areas you want to work in - we have cleaning jobs available almost everywhere.</p>,
        <p>- Get jobs in your local area - with minimum travel time and expenses.</p>,
        <p>- Work up to any hours you want to  each week - repeat the same clients or work for different ones each day.</p>,
        <p>- Work when you want for those who want to work part-time or casually.</p>,
        <p>- Keep your own regular jobs and work with us around them.</p>,
        <p>- Work as little or as often as you like - it’s up to you!</p>,
        <p>- Get paid directly into your bank account- we use the latest technology to make sure you get paid promptly and correctly.</p>,
        <p>- Have support from our friendly team. We’re here to help you grow your business and answer any questions you have as we have over 20 years experience in the cleaning industry!</p>,
        <p>- Start working with us quickly. Once you’ve been approved, you can start taking on jobs straight away!</p>,
        ]} />
        <Accordian heading="What does being self-employed mean?"
         text={[<p>When you work with Maidzly, you are classed as being self-employed. This means that you are responsible for your own taxes. It also means that you have complete control over how much you work and when you work.</p>,<br/>,
        <p>If you're self-employed, you will be able to write off expenses like travel, gas, cell phone bills, clothing, internet, and so much more! Talk to your accountant to get more information.</p>
        ]}
         
         />
        <Accordian heading="Do I need to bring any cleaning products?" 
        text={[<p>Absolutely not! Your customers supply all the cleaning products and supplies. We do recommend to bring personal items to your jobs to make sure you can get through the day easier.</p>,<br/>,
        <p>Here is a list of personal items you'll need to bring:</p>,<br/>,
        <p>Your mobile phone and charger</p>,<br/>,
        <p>Rubber gloves</p>,<br/>,
        <p>Water or juice bottle</p>,<br/>,
        <p>Snacks/lunch if you have 2 jobs in one day</p>,<br/>,
        <p>Backpack</p>,<br/>,
        <p>Extra indoor clean runners</p>,<br/>,
        <p>Extra clean sponges and clean microfiber cloths just in case your customers ran out.</p>,<br/>,
        <p>We recommend that you avoid using the customers bleach. If you do use a customer's bleach, please make sure you take extra care as this can cause damage to floors and surfaces.</p>
      ]}
        />
        <Accordian heading="Where will I work?"
         text={[<p>You can work anywhere you wish! When you sign up you can let your customers know how far you want to work from your home location. You can extend the radius where you want to work at any time through our app.</p>,<br />,
        <p>Here's some more information:</p>,<br/>,
        <p className="text-secondaryColor">How can I see & change my working areas?</p>,<br/>,
        <p>Go to more questions for cleaners </p>,<br/>,
        ]} 
         
         />
      </div>
      <Footer />
    </div>
  );
}

export default RegisterAsACleaner;
