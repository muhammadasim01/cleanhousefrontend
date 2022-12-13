import { BsCheck2 } from "react-icons/bs";
function ListItem() {
  return (
    <div className="border-2">
      <div className="flex items-center">
        <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
        <p className="ml-2 font-subHeading text-xl w-[90%]">
          Choose your own rates
        </p>
      </div>
      <div className="flex items-center">
        <BsCheck2 className=" ml-2 text-secondaryColor text-3xl mb-16 font-bold w-[10%]" />
        <p className="ml-2 font-subHeading text-xl mt-3 w-[90%]">
          Manage your jobs through your online schedule calendar on our app
        </p>
      </div>
      <div className="flex items-center">
        <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
        <p className="ml-2 font-subHeading text-xl w-[90%]">
          Work near your home
        </p>
      </div>
      <div className="flex items-center">
        <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
        <p className="ml-2 font-subHeading text-xl mt-5 w-[90%]">
          Flexible work hours and days
        </p>
      </div>
      <div className="flex items-center">
        <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-semibold w-[10%]" />
        <p className="ml-2 font-subHeading text-xl mt-5 w-[90%]">
          Keep your phone number private through our app
        </p>
      </div>
      <div className="flex items-center">
        <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
        <p className="ml-2 font-subHeading text-xl mt-6 w-[90%]">
          Start immediately once you're registered
        </p>
      </div>
      <div className="flex items-center">
        <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold mb-8 w-[10%]" />
        <p className="ml-2 font-subHeading text-xl mt-5 w-[90%]">
          Maidzly app makes it easy to manage everything
        </p>
      </div>
      <div className="flex items-center">
        <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold w-[10%]" />
        <p className="ml-2 font-subHeading text-xl mt-5 w-[90%]">
          Access 7 days a week support
        </p>
      </div>
      <div className="flex items-center">
        <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold mb-7 w-[10%]" />
        <p className="ml-2 font-subHeading text-xl mt-5 w-[90%]">
          Become a certified cleaner when you take our free online course!
        </p>
      </div>
      <div className="flex items-center">
        <BsCheck2 className=" ml-2 text-secondaryColor text-3xl font-bold mb-28 w-[10%]" />
        <p className="ml-2 font-subHeading text-xl mt-5 w-[90%]">
          We're here to help you grow your business and answer any questions you
          have as we have over 20 years experience in the cleaning industry!
        </p>
      </div>
    </div>
  );
}

export default ListItem;
