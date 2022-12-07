import Header from "../Header";
import GetAQuoteForm from "./GetAQuoteForm";
import YourBookingInfo from "./YourBookingInfo";

function GetAQuoteForm1() {
  return (
    <>
      <Header bgColor="bg-primaryColor" position={"relative"} />
      <div className="px-4 h-auto">
        <GetAQuoteForm Title="Customise Your Clean" />
        <YourBookingInfo />
      </div>
    </>
  );
}

export default GetAQuoteForm1;
