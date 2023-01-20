import BoxCards from "../components/Home/BoxCards";
import Header from "../components/Header";
import Banner from "../components/Home/Banner";
import FeaturesSection from "../components/Home/FeaturesSection";
import HowItWorks from "../components/Home/HowItWorks";
import ContactCleaner from "../components/Home/ContactCleaner";
import MobileAppSection from "../components/Home/MobileAppSection";
import RectangularCards from "../components/Home/ServiceSection";
import CustomerSupport from "../components/Home/CustomerSupport";
import Subscription from "../components/Home/Subscription";
import SecondBanner from "../components/Home/SecondBanner";
import ServiceSection from "../components/Home/ServiceSection";
import Footer from "../components/Footer";
import MobileTopBar from "../components/MobileTopBar";
import TopBar from "../components/TopBar";
import logo2 from "../public/assets/Maidzly-logo.png";
const HomePage = () => {
  return (
    <div>
      <MobileTopBar />
      <TopBar />
      <Header bgColor={"bg-lightColor"} />
      <Banner />
      <BoxCards />
      <HowItWorks />
      <SecondBanner />
      <FeaturesSection />
      <ContactCleaner />
      <MobileAppSection />
      <ServiceSection />
      <CustomerSupport />
      <Subscription />
      <Footer />
    </div>
  );
};

export default HomePage;
