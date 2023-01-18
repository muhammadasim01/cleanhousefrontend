import React from "react";
import BoxCard from "./BoxCard";
import Box1 from "../../public/assets/Box1.png";
import Box2 from "../../public/assets/Box2.png";
import Box3 from "../../public/assets/Box3.png";
function BoxCards() {
  return (
    <div className="flex md:flex-row w-full flex-col items-center pt-10 sm:justify-center relative  bottom-[6.8rem]  sm:bottom-[8rem] mb-[-3rem] ">
      <BoxCard
        imageSrc="./assets/Box1.png"
        Title="Become a Cleaner"
        Description="As a cleaner, make your own schedule and your own rates per hour"
        Text="Start earning and apply now"
        buttonText="Register As A Cleaner"
        background="bg-[url('../public/assets/subtract-1.png')]"
      />
      <BoxCard
        imageSrc="./assets/Box2.png"
        Title="Find a Cleaner"
        Description="As a customer, book your cleaner based on location, rate and reviews"
        buttonText="Find Your Cleaner"
        background="bg-[url('../public/assets/subtract-2.png')]"
      />
      <BoxCard
        imageSrc="./assets/Box3a.png"
        Title="Get the App"
        Description="Download the app  and track your cleaner on route"
        buttonText="Download The App"
        background="bg-[url('../public/assets/subtract-3.png')]"
        imageShadoow="shadow-md shadow-accentColor w-[55px] h-[95px]"
      />
    </div>
  );
}

export default BoxCards;
