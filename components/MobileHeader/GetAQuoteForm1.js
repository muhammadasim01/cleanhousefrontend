import Header from "../Header";
import GetAQuoteForm from "./GetAQuoteForm";
import YourBookingInfo from "./YourBookingInfo";
import logo2 from "../../public/assets/Maidzly-logo.png";
function GetAQuoteForm1() {
  return (
    <>
      <Header logo={logo2} position={"relative"} bgColor={"bg-lightColor"} />
      <div className="px-4 h-auto">
        <GetAQuoteForm Title="Customise Your Clean" />
        <YourBookingInfo />
      </div>
    </>
  );
}

export default GetAQuoteForm1;
